import React, {useState} from 'react'
import {render} from 'react-dom'
import './App.css';
import logo from './logo.svg';
import Contador from './components/contador'

const App = () => {
    /*
    const [name,setName] = useState('Luis')
    const [count,setCount] = useState(0)

    const Sumar = () => {
        setCount(count+1)
    }
    return(
        <div className='App-header'>
            <h1>{name}</h1>
            <img src={logo} className="App-logo" alt="logo" />                        
            <h2>{count}</h2>
            <button className='boton' onClick={Sumar}>SUMAR</button>            
        </div>
    )
    */    

    const name='Luis'

    return(
        <div className='App-header'>
            <h1>{name}</h1>
            <img src={logo} className="App-logo" alt="logo" />                        
            <Contador nameA={name}></Contador>
        </div>
    )
}

export default App