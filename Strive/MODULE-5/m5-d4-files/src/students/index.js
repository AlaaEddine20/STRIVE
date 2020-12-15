const express = require("express")
const router = express.Router()
const fs = require("fs") 
const path = require("path")
const uniqid = require("uniqid")
const { readDB, writeDB } = require("../lib/fs-utilities")
const { check, validationResult } = require("express-validator")


const studentsFilePath = path.join(__dirname, "students.json")

router.get("/", async (req, res, next) => {
    try {
        const studentsDB = await readDB(studentsFilePath)
    if (req.query && req.query.name) {
      const filteredStudents = studentsDB.filter(
        user =>
          user.hasOwnProperty("name") &&
          user.name.toLowerCase() === req.query.name.toLowerCase()
      )
      res.send(filteredStudents)
    } else {
      res.send(studentsDB)
    }

    } catch (error) {
        next(error)
    }
})

router.post("/", 

[
    check("name")
      .isLength({ min: 4 })
      .withMessage("No way! Name too short!")
      .exists()
      .withMessage("Insert a name please!"),
  ],

async (req, res, next) => {
    try {
        const errors = validationResult(req)
  
        if (!errors.isEmpty()) {
          const err = new Error()
          err.message = errors
          err.httpStatusCode = 400
          next(err)
        } else {
          const studentsDB = await readDB(studentsFilePath)
          const newStudent = {
            ...req.body,
            ID: uniqid(),
            modifiedAt: new Date(),
          }
  
          studentsDB.push(newStudent)
  
          await writeDB(studentsFilePath, studentsDB)
  
          res.status(201).send({ id: newStudent.ID })
        }
      } catch (error) {
        next(error)
      }
    }
)

router.get("/:id", async (req, res, next) => {
    try {
        const studentsDB = await readDB(studentsFilePath)
        const student = studentsDB.filter(student => student.ID === req.params.id)

        let err;
        student.length > 0 ? res.send(student)
        : err = new Error()
          err.httpStatusCode = 404
          next(err)
        
      } catch (error) {
        next(error)
      }
})


router.put("/:id", async (req, res, next) => {
    try {
        const studentsDB = await readDB(studentsFilePath)
        const newDb = studentsDB.filter(student => student.ID !== req.params.id)
    
        const modifiedStudent= {
          ...req.body,
          ID: req.params.id,
          modifiedAt: new Date(),
        }
    
        newDb.push(modifiedStudent)
        await writeDB(studentsFilePath, newDb)
    
        res.send({ id: modifiedStudent.ID })
      } catch (error) {
        next(error)
      }
})
router.delete("/:id", (req, res) => {
    const studentsFilePath = path.join(__dirname, "students.json")
    const fileAsBuffer = fs.readFileSync(studentsFilePath)
    const fileAsString = fileAsBuffer.toString()
    const studentsArray = JSON.parse(fileAsString)
    const newStudentsArray = studentsArray.filter(student => student.ID !== req.params.id)
    fs.writeFileSync(studentsFilePath, JSON.stringify(newStudentsArray))
    res.status(204).send("Deleted student")
}) 
module.exports = router
