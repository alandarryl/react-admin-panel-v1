import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import SideBar from './components/sidebar/SideBar';

import Interface from './components/interface/Interface';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SideBar/>
    <Interface/>
    </>
  )
}

export default App
