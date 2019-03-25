import React, { FunctionComponent, FormEvent, useCallback } from 'react';

import Styles from './styles/Form.module.scss';

export interface FormProps {
  order: string;
  onSubmit: (e: FormEvent<HTMLFormElement>, order: string) => void
}
 
const handleSubmit = (e: FormEvent<HTMLFormElement>, props: FormProps) => {
  e.preventDefault();

  const { onSubmit } = props;
  const order = (e.target as any).elements.order.value;

  onSubmit(e, order);
}

const Form: FunctionComponent<FormProps> = (props) => {
  const memoizedHandleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => handleSubmit(e, props), []);

  return (
    <form className={Styles.form} onSubmit={memoizedHandleSubmit}>
      <h1>Pizza 🤖 Bot Deliveries</h1>
      <input
        type="text"
        id="order"
        name="order" 
        required pattern="(\dx\d)(\(\d,\d\))+" 
        placeholder={'5x5(1,3)(4,4)'}
        title="Please enter a valid order with the map size and at least one set of coordinates."
      />
      <input type="submit" value="Place Order"/>
    </form>
  );
}
 
export default Form;
