import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/nav'
import Footer from './components/footer'
import Hero from './components/Hero'
import Highlight from './components/Highlights'
import "./App.css";
import Getting from './components/Getting'
import Interactive from './components/Interactive'


function App() {
  const [count, setCount] = useState(0)
  const clickHandle=(event)=>{
    setCount(count+1)
  }

  return (
    <>
       <Nav></Nav>
     <Hero></Hero>
    
      
      <Highlight></Highlight>     
     
      <Getting></Getting>
      <Interactive></Interactive>
      <Footer></Footer>
  

  
    </>
  )
}

export default App
