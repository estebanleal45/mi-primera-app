import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Saludo from './components/Saludo'; // Importa el componente
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [reverseCount, setReverseCount] = useState(20)
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
