import logo from './logo.svg';
import './App.css';
import React from "react";
import useToggle from "./useToggle.js";
import Clock from "./Clock";
import Profile from './profile/Profile';
import img from './images/profile.jpg';

class App extends React.Component {





  state = {
    fullName: "Eya Yahyaoui",
    bio: "I'm a Software Enginner in a Web agency",
    imgSrc: {img},
    profession: "Software Enginner",
   
  };


  state = {
    show: true,
  }

  toggle = () => this.setState((currentState) => ({show: !currentState.show}));
  render() {
   
 

    return (

      <>
       <div className="Profile">

        <h1>{this.state.fullName}</h1>
        <h1>{this.state.bio}</h1>
     
        <h1>{this.state.profession}</h1>

       </div>


       <div>
			  <button onClick={this.toggle}>toggle: {this.state.show ? 'show' : 'hide'}</button>    
        {this.state.show && <div><Profile src={img}/></div>}
		  </div>
      <Clock/>
     </>
    );
  }
   
  }


export default App;
