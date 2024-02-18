import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import Jokes from "./components/Jokes"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <hr />
      <h1 className="h1c my-5">
        full stack web Dev first practice project Repo.
      </h1>
      <Jokes />
    </>
  )
}

export default App
