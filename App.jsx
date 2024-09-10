import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

g
  let [counter, setCounter] = useState(0);

  // let counter = 5;SS

  const addValue = () =>{
    if(counter != 20){
      counter = counter+1
    setCounter(counter);
    }
  }

  const removeValue = () => {
    if(counter === 0){
      setCounter(counter)
    }
    else if (counter != 0){
    counter = counter - 1;
    setCounter(counter)
    }
  }

  return (
    <>
      <h1> Chai aur React </h1>
      <h3>Counter Value: {counter}</h3>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
