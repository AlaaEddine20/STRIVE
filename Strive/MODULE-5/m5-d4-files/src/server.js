const express = require("express")
const studentsRoutes = require("./students")
const projectsRouter = require("./projects")
const cors = require("cors")
const {join} = require("path")
const filesRouter = require("./files")
const {
    notFoundHandler,
    unauthorizedHandler,
    forbiddenHandler,
    catchAllHandler,
    badRequestHandler,
  } = require("./errorHandling")

const server = express()

const port = process.env.PORT || 3005;
const publicFolderPath = join(__dirname, "./public")

const loggerMiddleware = (req, res, next) => {
    console.log(`Logged ${req.url} ${req.method} -- ${new Date()}`)
    next()
  }

  server.use(cors())
  server.use(express.json())
  server.use(loggerMiddleware)
  server.use(express.static(publicFolderPath))

server.use("/students", studentsRoutes)
server.use("/projects", projectsRouter)
server.use("/files", filesRouter)

server.use(notFoundHandler)
server.use(unauthorizedHandler)
server.use(forbiddenHandler)
server.use(badRequestHandler)
server.use(catchAllHandler)

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
