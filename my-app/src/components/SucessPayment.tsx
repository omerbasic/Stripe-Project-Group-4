import React, { CSSProperties } from "react";
import {RouteComponentProps} from "react-router-dom"

export interface State {
  isLoading: boolean
  verified: boolean
}
type Props = RouteComponentProps<{ session_id: string }> & {}

export class SuccessPayment extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isLoading: true,
      verified: false
    }
    
  }

  componentDidMount(){
    

    const searchParam= new URLSearchParams(this.props.location.search)
    const sessionId= searchParam.get("session_id")
    console.log(sessionId)
    fetch('/api/verifysession', {method: 'POST', body: JSON.stringify({id: sessionId}), headers: {
      'Content-Type': 'application/json'
  }})
    .then((response) => {
        console.log(response)
        return response.json()
    })
    .then((data) => {
        console.log(data)
      if (data.verified== true){
        this.setState({ verified: true  });
        this.setState({ isLoading: false  });
      }
      else if (data.verified == false ){
        this.setState({ verified: false });
        this.setState({ isLoading: false  });
      }
        
        
    })
    .catch((err) => {
        console.error(err)
    })
  }
  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>
    } 

    if (this.state.verified== true) {
    

      console.log(this.state.verified)
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
    } else if (this.state.verified == false && this.state.isLoading == false) {
        return (
        <div  style={{
          marginTop: "100px",
          justifyContent: "center",
          textAlign: "center",
        }} >
          <p>Go back to the checkout page and proceed with the payment</p>
          </div>
          );
    }
  }
}



let failMsg: CSSProperties = {
    marginTop: '600px',
    fontSize: '50px',
    margin: 'auto',
    textAlign: 'center'

}


export default SuccessPayment;
