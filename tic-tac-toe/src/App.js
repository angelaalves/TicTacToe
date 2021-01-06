/* eslint-disable no-this-before-super */
import './App.css';
import React, {Component} from 'react';
class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      board : Array(9).fill(null)
    }
  }

  handleClick(event){
    console.log(event.target)
  }
  render(){

    const Box= this.state.board.map((box,index)=><div className="box" key={index} onClick={()=>{this.handleClick()}}>{box}</div> );
  return (
    <div className="container">
    <h1>Tic Tac Toe</h1>
    <div className="board">
  
      {Box}
    </div>
    </div>
  );
}
}

export default App;
