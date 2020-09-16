import React from "react";

export interface State {}
interface Props {}

export class SuccessPayment extends React.Component<Props, State> {
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
          src={"https://www.i-q.net.au/wp-content/uploads/success.png"}
          alt="Logo"
        />
        <h2>
          <b> Payment Successful </b>
        </h2>
        <p>Congragulation your payment is Success</p>
        <p>Thank you for Purchasing from this website</p>
      </div>
    );
  }
}

export default SuccessPayment;
