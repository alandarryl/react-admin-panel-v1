import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import SideBar from './components/sidebar/SideBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SideBar/>
      <h1>Vite + React</h1>
    </>
  )
}

export default App
