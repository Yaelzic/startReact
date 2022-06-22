
import './App.css';
import { useState } from 'react'
import Names from './Names';

const App = () => {

  const [count, setCount] = useState(0)
  const myStyle = { colore: "white", backgroundColor: "red" }

  return (
    <div className='App'>
      
        <button style={myStyle} onClick={() => setCount(count + 10)}>{count}</button>
      
      <Names userName="Yael"></Names>
  
    </div>
  )
}

export default App
