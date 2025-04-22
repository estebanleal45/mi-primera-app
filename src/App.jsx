import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Saludo from './components/Saludo'; // Importa el componente
import './App.css'
import senaLogo from '/logosena.png'

function App() {
  const [count, setCount] = useState(0)
  const [reverseCount, setReverseCount] = useState(20)
  

  return (
    <>
      <div>
        <a href="" target="_blank">
          <img src={senaLogo} className="logo" alt="" />
        </a>
      </div>
      <h1>Mi Primera App</h1>
      <div>
    <Saludo nombre="Esteban Leal" />
  </div>
      <div className="card">
        <p>conteo progresivo</p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
          <p>conteo regresivo</p>
        <button onClick={() => setReverseCount((prev) => prev - 1)}>
          count is {reverseCount}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}


export default App
