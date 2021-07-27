import React, {useState} from 'react'

const Hookscomponent=()=>{
    const[title]=useState('React Hooks app')
    const[count,setcount]=useState(0)
    return(
        <div>
            <h1>{title}</h1>
            <h2>count value is {count}</h2>
            <button className="btn" onClick={()=>{
                setcount(count+1)
            }
}>Click Me</button>
        </div>
    )
}
export default Hookscomponent;