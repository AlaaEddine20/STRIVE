const express = require("express")
const fs = require("fs") 
const path = require("path")
const uniqid = require("uniqid")
const { check, validationResult } = require("express-validator")

const router = express.Router()

const readFile = fileName => {
    const buffer = fs.readFileSync(path.join(__dirname, fileName))
    const fileContent = buffer.toString()
    return JSON.parse(fileContent)
}

router.get("/", (req, res, next) => {

    try {
        const projectsDB = readFile("projects.json")

        if (req.query && req.query.name) {
            const filteredProjects = projectsDB.filter(
              project =>
                project.hasOwnProperty("name") &&
                project.name.toLowerCase() === req.query.name.toLowerCase()
            )
            res.send(filteredProjects)
          } else {
            res.send(projectsDB)
          }
    } catch (error) {
        next(error)
    }
})

router.get("/:id", (req, res, next) => {
    try {
        const projectsDB = readFile("projects.json")
        const project = projectsDB.filter(project => project.ID === req.params.id)

        let err;

        project.length > 0 ? res.send(project) : err = new Error()
        err.httpStatusCode = 404
        next(err)

    } catch (error) {
        next(error)
    }
})


router.post("/", 

[
    check("name")
    .isLength({ min: 4 })
    .withMessage("Name too short!")
    .exists()
    .withMessage("Please insert a name."),

    check("description")
    .exists()
    .withMessage("Please provide a description about your project.")
],



(req, res, next) => {
    try {
        const errors = validationResult(req)
        
        if (!errors.isEmpty()) {

            const err = new Error()
            err.message =  errors
            err.httpStatusCode = 400
            next(err) 
        } else {

            const projectsDB = readFile("projects.json")
            const newProject = {
                ...req.body,
                ID: uniqid(),
                createdAt: new Date(),
                
            }
                
            projectsDB.push(newProject)
            fs.writeFileSync(
            path.join(__dirname, "projects.json"),
                    JSON.stringify(projectsDB)
            )
            res.status(201).send(newProject)
        
            }
        } catch (error) {
        next(error)
      }
   
})

router.put("/:id", (req, res, next) => {
    try {
        const projectsDB = readFile("projects.json")
        const newDB = projectsDB.filter(project => project.ID !== req.params.id)

        const modifiedProject = {
            ...req.body,
            ID: req.params.id,
            modifiedAt: new Date()
        }

        newDB.push(modifiedProject)
        fs.writeFileSync(path.join(__dirname, "projects.json"), JSON.stringify(newDB))
        
        res.send(modifiedProject)

    } catch (error) {
        next(error)
    }
})
router.delete("/:id", (req, res, next) => {
    try {
        const projectsDB = readFile("projects.json")
        const newDB = projectsDB.filter(project => project.ID !== req.params.id)
        fs.writeFileSync(path.join(__dirname, "projects.json"), JSON.stringify(newDB))
        
        res.status(204).send()

    } catch (error) {
        next(error)
    }
}) 
module.exports = router
