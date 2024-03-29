import express from "express"

const app = express()

app.get("/", (req, res) => {
  res.send("Server is ready.")
})

// get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "1st joke",
      content: "This is 1st joke",
    },
    {
      id: 2,
      title: "2nd joke",
      content: "This is 2nd joke",
    },
    {
      id: 3,
      title: "3rd joke",
      content: "This is 3rd joke",
    },
    {
      id: 4,
      title: "4th joke",
      content: "This is 4th joke",
    },
    {
      id: 5,
      title: "5th joke",
      content: "This is 5th joke",
    },
  ]
  res.send(jokes)
})

// Serve static files from the 'public' directory
app.use("/public", express.static("public"))

app.get("/api/store", (req, res) => {
  const store = [
    {
      id: 11,
      title: "object_1",
      image: "img/img_obj_1.png",
    },
  ]
  res.send(store)
})

const port = process.env.PORT || 4001

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`)
})
