import React, { useEffect, useState } from "react"
import axios from "axios"
import "../components/Explore.css"
import PlantDetailsModal from "../components/PlantDetailsModel"
import Header from "../components/Header"

const Explore = () => {
  const [plants, setPlants] = useState([])
  const [selectedPlant, setSelectedPlant] = useState(null)

  useEffect(() => {
    const fetchPlants = async () => {
      const response = await axios.get("http://localhost:5000/api/plants")
      setPlants(response.data)
    }

    fetchPlants()
  }, [])

  return (
    <>
      <Header />
      <div className="explore-container">
        <h1>Explore Medicinal Plants</h1>
        <div className="card-grid">
          {plants.map((plant) => (
            <div
              key={plant.id}
              className="plant-card"
              onClick={() => setSelectedPlant(plant)}
            >
              <img src={plant.image} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>{plant.description}</p>
            </div>
          ))}
        </div>

        {selectedPlant && (
          <PlantDetailsModal
            plant={selectedPlant}
            onClose={() => setSelectedPlant(null)}
          />
        )}
      </div>
    </>
  )
}

export default Explore
