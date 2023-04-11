import React from "react";
import ReactDOM from "react-dom/client";
import FizzBuzzCounterApp from "./components/FizzBuzzCounterApp";
import "./style/style.css";

class CounterApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
    this.onDecreaseEventHandler = this.onDecreaseEventHandler.bind(this);
    this.onResetEventHandler = this.onResetEventHandler.bind(this);
  }

  onIncreaseEventHandler() {
    this.setState((nextState) => {
      return {
        count: nextState.count + 1,
      };
    });
  }

  onDecreaseEventHandler() {
    this.setState((previousState) => {
      return {
        count: previousState.count - 1,
      };
    });
  }

  onResetEventHandler() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }

  render() {
    return (
      <div>
        <FizzBuzzCounterApp increase={this.onIncreaseEventHandler} decrease={this.onDecreaseEventHandler} count={this.state.count} reset={this.onResetEventHandler} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CounterApp />);
