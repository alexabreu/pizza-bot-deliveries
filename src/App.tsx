import React, { Component, FormEvent } from 'react';

import Map from './components/Map';
import Form from './components/Form';
import { getDeliveries, getDeliveryInstructions, getMapSize } from './utils/deliveries';
import { moveBot } from './utils/map';
import { INITIAL_DELIVERIES_STATE, BOT_STARTING_LOCATION, DEFAULT_MAP_SIZE, BOT_SPEED } from './constants';

interface AppState {
  order: string;
  mapSize: number;
  deliveryInstructions: string;
  deliveries: Delivery[];
  botLocation: PointInterface;
}

class App extends Component<{}, AppState> {
  private pizzaDeliveryInterval: number | undefined;

  public state = {
    order: '',
    deliveryInstructions: '',
    mapSize: DEFAULT_MAP_SIZE,
    deliveries: INITIAL_DELIVERIES_STATE,
    botLocation: BOT_STARTING_LOCATION
  }

  public constructor(props: any) {
    super(props);
    this.pizzaDeliveryInterval = undefined;
  }

  public render() {
    const { order, mapSize, deliveries, botLocation } = this.state;

    return (
      <div className="App">
        { this.shouldShowForm && <Form order={order} onSubmit={this.handleOrder}/> }
        <Map size={mapSize} deliveries={deliveries} botLocation={botLocation}/>
      </div>
    );
  }

  private reset = () => {
    this.setState({
      deliveries: INITIAL_DELIVERIES_STATE,
      botLocation: BOT_STARTING_LOCATION,
    });

    window.clearInterval(this.pizzaDeliveryInterval);
  }
  
  private deliverPizza = () => {
    const { deliveryInstructions, botLocation, deliveries } = this.state;

    if (!deliveryInstructions) {
      this.reset();
      return;
    }

    const deliveryInstructionsArray = deliveryInstructions.split('');
    const direction = deliveryInstructionsArray.shift();

    const didDeliver = direction === 'D';
    if (didDeliver) {
      const currentDeliveryIndex = deliveries.findIndex((d) => d.hasBeenDelivered === false);
      deliveries[currentDeliveryIndex].hasBeenDelivered = true;
    }

    this.setState({
      deliveryInstructions: deliveryInstructionsArray.join(''),
      botLocation: moveBot(direction, botLocation),
      deliveries,
    });
  }

  private handleOrder = (e: FormEvent<HTMLFormElement>, order: string) => {
    this.setState({
      order,
      mapSize: getMapSize(order),
      deliveries: getDeliveries(order).map(d => ({ location: d, hasBeenDelivered: false })),
      deliveryInstructions: getDeliveryInstructions(order),
    });

    this.pizzaDeliveryInterval = window.setInterval(this.deliverPizza, BOT_SPEED);
  }

  private get shouldShowForm() {
    const { deliveryInstructions } = this.state;

    return !deliveryInstructions;
  }
}

export default App;
