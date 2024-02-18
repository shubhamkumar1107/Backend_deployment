require("dotenv").config()

console.log("Hello world!") // output in treminal

const express = require("express")

const app = express()

const port = 4000 // or any other port you want to use
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`)
// })

app.get("/", (req, res) => {
  res.send("Hello World!") // output in localhost:4000
})

app.get("/twitter", (req, res) => {
  res.send("Shubhamkr") //   output in localhost/twitter:4000
})

app.get("/login", (req, res) => {
  res.send("<h1>You are here for login request!</h1>") //  output in localhost:4000/login
})

app.get("/youtube", (req, res) => {
  res.send("<h2>hi, this is youtube here!</h2>")
})

app.listen(port, () => {
  // process.env.PORT in place of port
  console.log(`Example app listening on port ${port}`)
})
