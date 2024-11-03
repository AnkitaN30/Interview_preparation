import withCounter from "./withCounter";

const ClickCounterComponent = ({count,incrementCounter}) => {
  return (
    <>
      <div>
          <button onClick={incrementCounter}>Click Me</button>
          <h2>count is:{count}</h2>
      </div>
    </>
    );
  };

export default withCounter(ClickCounterComponent,5);