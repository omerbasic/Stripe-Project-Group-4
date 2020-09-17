import React from "react";

export interface State {}
interface Props {}

export class CancelPayment extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div
        style={{
          marginTop: "100px",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <img
          src={"https://cdn0.iconfinder.com/data/icons/payment-methods-9/479/credit-card-ban-cancel-banking-service-512.png"}
          alt="Logo"
        />
         <h2>
          <b> Payment Unsuccessful </b>
        </h2>
        <p>Your order is Cancelled</p>
        <p>Try out with different Products</p>
      </div>
    );
  }
}

export default CancelPayment;
