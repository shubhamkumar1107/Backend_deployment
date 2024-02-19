import React, { useState, useEffect } from "react"
import axios from "axios"

function StoreCompo() {
  const [stores, setStores] = useState([])

  useEffect(() => {
    axios
      .get("/api/store")
      .then((response) => {
        setStores(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  })

  return (
    <div className="storesDiv">
      <p className=" text-xl font-bold">STOCK:{stores.length}</p>

      {stores.map((store, index) => (
        <div key={store.id}>
          <br />
          <h3>{store.title}</h3>
          <p>{store.image}</p>
        </div>
      ))}
    </div>
  )
}

export default StoreCompo
