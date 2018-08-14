import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
super()
    this.state={
      hour: 0,
      minute:0,
      second:0
    }
  }


timer=()=>{
setTimeout(() => {
  


 if(this.state.second===60){

  this.setState({
  
    minute: (this.state.minute+1),
    second:0
   
  })
  if(this.state.minute===60){
    this.setState({
     
      hour: (this.state.hour+1),
      minute:0 
    })}

 
 }else{
  this.setState({
    second: (this.state.second +1)
  })
 }

}, 1000);


}


  render() {
   this.timer()
    return (
      <div className="App">
      <div className="time">
       <span>{this.state.hour<10?"0"+this.state.hour:this.state.hour}</span>:
       <span>{this.state.minute<10?"0"+this.state.minute:this.state.minuter}</span>:
       <span>{this.state.second<10?"0"+this.state.second:this.state.second}</span>

      </div>
      <div className="footer">
      <span>Hour</span>
      <span>Minute</span>
      <span>Second</span>
      </div> 
      
      </div>
    );
  }
}

export default App;
