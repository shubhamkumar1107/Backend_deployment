import React, { useState, useEffect } from "react"
import axios from "axios"

function Jokes() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  })

  return (
    <div className="jokesDiv">
      <p className=" text-xl font-bold">JOKES:{jokes.length}</p>

      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <br />
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </div>
  )
}

export default Jokes
