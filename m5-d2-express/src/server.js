const express = require("express")
//creo la route per il mio file
const studentsRoutes = require("./students")

const server = express()

const port = 3003
//dico al server di usare questa route
server.use("/students", studentsRoutes)
//dico al server di ascoltare il mio port
server.listen(port, () => {
  console.log("Server is running on port: ", port)
})


