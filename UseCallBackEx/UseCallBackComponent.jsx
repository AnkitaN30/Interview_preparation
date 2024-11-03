import {useState, useCallback } from 'react';
import HeaderComponent from './HeaderComponent';

const UseCallBackComponent = ()=>{
    const [counter,setCounter]=useState(0);

    const newFn = useCallback(()=>{},[]);
    
    return(
        <div className='wrapper' >
            <HeaderComponent newFn={newFn}/>
            <p>Increment Counter: {counter}</p>
            <button onClick ={()=>setCounter(prev=>prev+1)}>Increment  {counter}</button>  
        </div>
    )
}

export default UseCallBackComponent;