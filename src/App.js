import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
super()
    this.state={
      hour: 0,
      minute:0,
      second:0,
      status:"stop"
    }
  }


timer= ()=>{


setTimeout(()=>{
  if(this.state.status==="start" ){
 if(this.state.second===60){

  
  if(this.state.minute===60){
    this.setState({
     
      hour: (this.state.hour+1),
      minute:0 
    })}else{
      this.setState({
  
        minute: (this.state.minute+1),
        second:0
       
      })
    }
 }else{
  this.setState({
    second: (this.state.second +1)
  })
 }
this.timer() }
},1000)
}

// reset timer   ////
 reset =()=>{
this.setState(
{
  
  hour: 0,
  minute:0,
  second:0,
  status:"stop"
  
})


}

// ***** start and pause ********



status=()=>{
  if(this.state.status==="start"){
    this.setState({
      status:"stop"
    })
  }else{
    
    this.setState({
      status:"start"
    })
    this.timer()
   
  }
 
}

 
  render() {

   

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
      <div className="btn-group">

         <button onClick={this.status}>{this.state.status==="start"?"stop":"start"}</button>
         <button onClick={this.reset}>reset</button>

      </div>
      </div>
    );
  }
}

export default App;
