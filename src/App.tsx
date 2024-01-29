// import { useState } from 'react'
import About from './routes/about/about'
import Home from './routes/home/home'
import './App.css'
import { Routes, Route } from "react-router-dom"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path={'/about'} element={<About/>}/>
        <Route path={'/'} element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
