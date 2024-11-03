import { useContext } from "react";
import Component1 from "./Component1";
import { counterContext } from "./context";

const Button = () => {
    const value  = useContext(counterContext);
  return (
    <> 
      <button onClick={()=> value.setCounter((count)=> count+1)}>
       Counter button {value.count}
       </button>
      <Component1/>
    </>
  );
};

export default Button;
