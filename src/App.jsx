import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserContext } from './main'
import { useContext } from 'react'
import { Counter } from './Counter'


function App(props) {
  const [count, setCount] = useState(0)
  const value = useContext(UserContext)

  return (
    <div>
        {/* Received, {value} */}
        <Counter />
    </div>
  )
}

export default App
