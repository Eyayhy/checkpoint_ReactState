import logo from './logo.svg';
import './App.css';
import React from "react";
import useToggle from "./useToggle.js";
import Timer from "./Timer";

import img from './profile.jpg';

class App extends React.Component {

  state = {

    Person:{
    fullName: "Eya Yahyaoui",
    bio: "I'm a Software Enginner in a Web agency",
    imgSrc: "./profile.jpg",
    profession: "Software Enginner",
    

    },

    show: true,
  };


 

  toggle = () => this.setState((currentState) => ({show: !currentState.show}));
  render() {
   
 

    return (

      <>
      

      
			  <button onClick={this.toggle}>{this.state.show ? 'Show my Profile' : 'Hide my Profile '}</button>    
        {this.state.show && 
        <>
         
         <img src={this.state.Person.imgSrc} style={{borderRadius:'50%', width:'20%',height:'20%',float:'left',padding:'30px'}}/>
         <div className="profile">
         <h3 style={{fontWeight:400,color:'#282c34ab'}}> <span style={{color:'#c32c71'}}>FullName :</span> {this.state.Person.fullName} </h3>
         <h3 style={{fontWeight:400,color:'#282c34ab'}}><span style={{color:'#c32c71'}}>Profession: </span> {this.state.Person.profession}</h3>
         <h3 style={{fontWeight:400,color:'#282c34ab'}}><span style={{color:'#c32c71'}}> Bio: </span>{this.state.Person.bio}</h3>
         </div>
         
         
     


        </>
        
        }
		 
      <Timer/>
     </>
    );
  }
   
  }


export default App;
