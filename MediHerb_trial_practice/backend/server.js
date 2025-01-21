import express, { json } from "express"
import cors from "cors"
import plants from "./data/plants.js"

const app = express()
const PORT = 5000

// Middleware
app.use(cors())
app.use(json())

// Routes
app.get("/", (req, res) => {
  res.send("server is ready.")
})
app.get("/api/plants", (req, res) => {
  res.json(plants)
})

app.get("/api/plants/:id", (req, res) => {
  const plantId = parseInt(req.params.id, 10)
  const plant = plants.find((p) => p.id === plantId)

  if (!plant) {
    return res.status(404).json({ error: "Plant not found" })
  }

  res.json(plant)
})

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
