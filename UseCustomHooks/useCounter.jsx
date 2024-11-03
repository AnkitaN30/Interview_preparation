import {useState} from "react";

export const useCounter =  (initVal = 0)=>{
 
    const[count,setCount] = useState(initVal);

    const increment = () => setCount((prevCount)=>prevCount+1);
    const decrement = () => setCount((prevCount)=>prevCount-1);
    const reset = ()=>setCount(initVal);

    return {increment,decrement,reset,count}
}

