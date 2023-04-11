import CounterDisplay from "./CounterDisplay";
import IncreaseButton from "./IncreaseButton";
import DecreaseButton from "./DecreaseButton";
import ResetButton from "./ResetButton";

function FizzBuzzCounterApp({ count, increase, decrease, reset }) {
  return (
    <div className="fizzbuzz_counter_app">
      <h1>FizzBuzz Counter App</h1>
      <CounterDisplay count={count} />
      <div className="main_button">
        <DecreaseButton decrease={decrease} />
        <IncreaseButton increase={increase} />
      </div>
      <ResetButton reset={reset} />
    </div>
  );
}

export default FizzBuzzCounterApp;
