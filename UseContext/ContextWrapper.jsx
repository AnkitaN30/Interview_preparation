import { useState } from "react";
import NavBar from "./Navbar";
import { counterContext } from "./context";

const ContextWrapper = () => {
    const [count,setCounter] = useState(0);
  return (
    <>
      <counterContext.Provider value={{count,setCounter}}>
        <div>Context Wrapper</div>
        <NavBar />
      </counterContext.Provider>
    </>
  );
};

export default ContextWrapper;
