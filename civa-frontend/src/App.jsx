import { useState } from 'react'
import './App.css'
import { TablePagination } from './Components/TablePagination'
import { Header } from './Components/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <TablePagination></TablePagination>
    </>
  )
}

export default App
  