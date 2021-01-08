import React, { Component } from "react";
import ChoosePlayer from "../ChoosePlayer/choosePlayer";
class Status extends Component {
  handleSetPlayer(e) {
    this.props.setPlayer(e);
  }
  handleReset() {
    this.props.reset();
  }
  renderWinner() {
    return (
      <>
        <h2> The Winner is {this.props.winner}</h2>{" "}
        <button
          onClick={() => {
            this.handleReset();
          }}
        >
          Reset
        </button>
      </>
    );
  }
  renderStatus() {
    return this.props.player ? (
      <h2>Next Player is {this.props.player}</h2>
    ) : (
      <ChoosePlayer
        player={(e) => {
          this.handleSetPlayer(e);
        }}
      />
    );
  }
  render() {
    return this.props.winner ? this.renderWinner() : this.renderStatus();
  }
}
export default Status;
