import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [counter,setCounter] = useState(15)

  const addNum = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  const subNum = () => {
    setCounter(prevCounter => prevCounter - 1)
  }


  return (
    <>
    <h1> Chai aur react </h1>
    <h2> Counter value: {counter}  </h2>

    <br />
    <button onClick={addNum}> add value : {counter} </button>
    <button onClick={subNum}> remove value : {counter} </button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
