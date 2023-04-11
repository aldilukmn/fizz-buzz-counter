function CounterDisplay({ count }) {
  if (count === 0) {
    return <p>{count}</p>;
  }

  if (count % 5 === 0 && count % 7 === 0) {
    return <p className="fizz_buzz">FizzBuzz</p>;
  }

  if (count % 5 === 0) {
    return <p className="fizz">Fizz</p>;
  }

  if (count % 7 === 0) {
    return <p className="buzz">Buzz</p>;
  }

  return <p>{count}</p>;
}

export default CounterDisplay;
