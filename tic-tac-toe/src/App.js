import './App.css';
import React, {Component} from 'react';
class App extends Component{

  constructor(){
    this.state = {
      board : Array(9).fill("X")
    }
  }
  render(){

    const box= this.state.board.map(box=>{<div className="box">{box}</div>})
  return (
    <div className="container">
    <h1>Tic Tac Toe</h1>
    <div className="board">
  
{box}
    </div>
    </div>
  );}
}

export default App;
