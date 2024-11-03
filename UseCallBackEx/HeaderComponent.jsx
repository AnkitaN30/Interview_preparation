import React from "react";

const HeaderComponent = ({newFn})=>{

    console.log('header');
    return(
        <div className='wrapper'>
           <p>Header Component</p>
        </div>
    )
}

export default React.memo(HeaderComponent);