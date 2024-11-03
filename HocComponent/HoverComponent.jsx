
import withCounter from "./withCounter";

const HoverComponent = ({count,incrementCounter}) => {
  return (
    <>
      <div>
          <button onMouseOver={incrementCounter}>Hover Me</button>
          <h2>count is:{count}</h2>
      </div>
    </>
    );
  };

export default withCounter(HoverComponent,10);