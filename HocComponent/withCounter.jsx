import { useState } from "react";

const withCounter = (OldComponent,incrementBy=1) => {
  return function EnhanceComponent(props) {
    const [count, setCount] = useState(0);
    return (
      <>
        <OldComponent
          {...props}
          count={count}
          incrementCounter={() => setCount(count + incrementBy)}
        />
      </>
    );
  };
};

export default withCounter;
