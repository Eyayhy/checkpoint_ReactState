import React from "react";


class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date()
      };
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
       2000
      );
    }
  
 
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
      
          <h4 style={{textAlign:'center',fontWeigh:'600'}}>The time interval since the last component was mounted is {this.state.date.toLocaleTimeString()}</h4>
        </div>
      );
    }
  }

  export default Timer;