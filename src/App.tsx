// import { useState } from 'react'
import About from './routes/about/about'
import Home from './routes/home/home'
import './App.css'
import { Routes, Route } from "react-router-dom"
import ResponsiveAppBar from './components/topNav'
import Experience from './routes/experience/experience'
import Projects from './routes/projects/projects'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <ResponsiveAppBar/>
      <Routes>
        <Route path={'/about'} element={<About/>}/>
        <Route path={'/experience'} element={<Experience/>}/>
        <Route path={'/projects'} element={<Projects/>}/>
        <Route path={'/'} element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
