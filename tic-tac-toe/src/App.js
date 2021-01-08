/* eslint-disable no-this-before-super */
import "./App.css";
import React, { Component } from "react";
import Status from "./components/Status/status";
import Box from "./components/Box/box";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      player: null,
      winner: null,
    };
  }
  checkWinner() {
    let winLines = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"],
    ];
    this.checkMatch(winLines);
  }
  checkMatch(winLines) {
    const { board } = this.state;
    winLines.map((index) => {
      const [a, b, c] = index;

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        alert("You Won!!");
        this.setState({ winner: this.state.player });
      }
    });
  }
  handleClick(index) {
    if (this.state.player && !this.state.winner) {
      let auxBoard = this.state.board;
      if (!this.state.board[index]) {
        auxBoard[index] = this.state.player;
        this.checkWinner();
        this.setState({
          board: auxBoard,
          player: this.state.player === "O" ? "X" : "O",
        });
      }
    }
  }
  setPlayer(player) {
    console.log(player);
    this.setState({ player: player });
  }

  renderBoxes() {
    return this.state.board.map((box, index) => (
      <Box
        index={index}
        box={box}
        handleClick={() => {
          this.handleClick(index);
        }}
      />
    ));
  }

  reset() {
    this.setState({ board: Array(9).fill(null), player: null, winner: null });
  }
  render() {
    return (
      <div className="container">
        <h1>Tic Tac Toe</h1>
        <Status
          player={this.state.player}
          winner={this.state.winner}
          setPlayer={(e) => {
            this.setPlayer(e);
          }}
          reset={() => {
            this.reset();
          }}
        />
        <div className="board">{this.renderBoxes()}</div>
      </div>
    );
  }
}

export default App;
