const express = require("express")
const app = express()
const PORT = 8000

// file handling
const fs = require("fs")
const users = require("./MOCK_DATA.json")

// Middleware -> Plugin
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
  console.log("Hello from middleware 1")
  // return res.json({ msg: "Hello from middleware 1" })
  next() // calling next routing / middleware
})

//########### Practical use case of middlewares ##################################
app.use((req, res, next) => {
  console.log("Hello from middleware 2!")
  fs.appendFile(
    "log.txt",
    `\n${Date.now()}:${req.ip} ${req.method}: ${req.path}\n`,
    (err, data) => {
      next()
    }
  )
})

// Custom Headers
app.get("/api/users", (req, res) => {
  res.setHeader("X-MyName", "Shubham Kumar") // Always add X as preffix to custom headers
  return res.json(users)
})

// Routes
app.get("/users", (req, res) => {
  const html = `
    <ol>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ol>
    `
  res.send(html)
})

app
  .route("/api/users/:userId")
  .get((req, res) => {
    const id = Number(req.params.userId)
    const user = users.find((user) => user.id == id)
    const index = users.findIndex((user) => user.id === id)
    if (index + 1 == id) {
      return res.json(user)
    } else {
      return res.status(404).json({ error: "User not found" })
    }
  })
  .patch((req, res) => {
    const id = Number(req.params.userId)
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
      // Update user with id
      // Assuming req.body contains the updated user data
      users[index] = { ...users[index], ...req.body }
      fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
        if (err) {
          return res.status(500).json({ error: "Internal server error" })
        }
        return res.json({ status: "User updated successfully" })
      })
    } else {
      return res.status(404).json({ error: "User not found" })
    }
  })

  .delete((req, res) => {
    const id = Number(req.params.userId)
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
      // Delete user with id
      users.splice(index, 1)
      fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: "User deleted successfully" })
      })
    } else {
      return res.status(404).json({ error: "User not found" })
    }
  })

app.post("/api/users", (req, res) => {
  const body = req.body

  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All fields are required except id" })
  }
  users.push({ ...body, id: users.length + 1 })
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.status(201).json({ status: "Success", id: users.length })
  })
})

app.get("/api/users", (req, res) => {
  return res.json(users)
})

app.listen(PORT, () => console.log(`Server is serving at PORT : ${PORT}`))
