import React, {useState} from 'react'
import {render} from 'react-dom'

const Contador = (props) => {    
    const [count,setCount] = useState(0)    
    const {nameA} = props

    const Sumar = () => {
        setCount(count+1)
    }

    const Restar = () => {
        setCount(count-1)
    }

    return(                 
        <div>
            <div>{nameA}</div>            
            <h2>{count}</h2>
            <button onClick={Sumar}>SUMAR</button>       
            <button onClick={Restar}>RESTAR</button>       
        </div>
    )
}

export default Contador