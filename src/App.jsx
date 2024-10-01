import { useState } from 'react'
import './App.css'

const App =()=> {
  const [color, setColor] = useState("black")

  return (
    <>
      <div className="main-container" style={{background:color}}>
        <div>
        <button className='btn' style={{background:"black"}} onClick={()=>{setColor("black")}}>Black</button>
        <button className='btn' style={{background:"green"}} onClick={()=>{setColor("green")}}>Green</button>
        <button className='btn' style={{background:"blue"}} onClick={()=>{setColor("blue")}}>Blue</button>
        <button className='btn' style={{background:"yellow"}} onClick={()=>{setColor("yellow")}}>yellow</button>
        <button className='btn' style={{background:"cyan"}} onClick={()=>{setColor("cyan")}}>cyan</button>
        <button className='btn' style={{background:"purple"}} onClick={()=>{setColor("purple")}}>purple</button>
        <button className='btn' style={{background:"red"}} onClick={()=>{setColor("red")}}>red</button>
        <button className='btn' style={{background:"lightgrey"}} onClick={()=>{setColor("lightgrey")}}>lightgrey</button>
        </div>
      </div>
    </>
  )
}

export default App
