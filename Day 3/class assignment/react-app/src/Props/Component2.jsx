import React from 'react';
import Component3 from './Component3';
const Component2 = (props1)=>{
        console.log(props1);
        //console.log(Object.isFrozen(props1));
        let { num,setNum } = props1;
        return(
            <div>
                <h1>this is component2 count {num.count}</h1>
                <button onClick={()=>{
                    setNum(prev=>({...prev,count:num.count+1}))
                }}>Increment</button>
                {/* <Component3 info = {props1}/> */}
            </div>
        )
}

export default Component2;