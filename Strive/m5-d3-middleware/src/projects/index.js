const express = require("express")
const path = require("path")
const uniqid = require("uniqid")
const { readDB, writeDB } = require("../lib/fs-utilities")
const { check, validationResult } = require("express-validator")

const router = express.Router()

const projectsJsonPath = path.join(__dirname, "projects.json")

router.get("/", async (req, res, next) => {

    try {
        const projectsDB = await readDB(projectsJsonPath)

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

router.get("/:id", async (req, res, next) => {
    try {
        const projectsDB = await readDB(projectsJsonPath)
        const project = projectsDB.filter(project => project.ID === req.params.id)

        let err;

        project.length > 0 ? res.send(project) : err = new Error()
        err.httpStatusCode = 404
        next(err)

    } catch (error) {
        next(error)
    }
})


router.post("/:id", 

[
    check("name")
    .isLength({ min: 4 })
    .withMessage("Name too short!")
    .exists()
    .withMessage("Please insert a name."),

    check("description")
    .exists()
    .withMessage("Please provide a description about your project."),

],

async (req, res, next) => {
    try {
        const errors = validationResult(req)
        
        if (!errors.isEmpty()) {

            const err = new Error()
            err.message =  errors
            err.httpStatusCode = 400
            next(err) 
        } else {

            const projectsDB = await readDB(projectsJsonPath)
            const newProject = {
                ...req.body,
                ID: uniqid(),
                createdAt: new Date(),
                studentID: req.params.id,
            }
                
            console.log(projectsDB)
            projectsDB.push(newProject)
            await writeDB(projectsJsonPath, projectsDB)
            res.status(201).send({ id: newProject.ID })
        
            }
        } catch (error) {
        next(error)
      }
   
})

router.put("/:id", async (req, res, next) => {
    try {
        const projectsDB = await readDB(projectsJsonPath)
        const newDB = projectsDB.filter(project => project.ID !== req.params.id)

        const modifiedProject = {
            ...req.body,
            ID: req.params.id,
            modifiedAt: new Date()
        }

        newDB.push(modifiedProject)
        await writeDB(projectsJsonPath, newDB)
        
        res.send(modifiedProject)

    } catch (error) {
        next(error)
    }
})
router.delete("/:id", async (req, res, next) => {
    try {
        const projectsDB = await readDB(projectsJsonPath)
        const newDB = projectsDB.filter(project => project.ID !== req.params.id)
        await writeDB(projectsJsonPath, newDB)
        
        res.status(204).send()

    } catch (error) {
        next(error)
    }
}) 
module.exports = router
