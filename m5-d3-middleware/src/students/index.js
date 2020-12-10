const express = require("express")
const router = express.Router()
const fs = require("fs") 
const path = require("path")
const uniqid = require("uniqid")
router.get("/", (req, res) => {
    const studentsFilePath = path.join(__dirname, "students.json")
    const fileAsBuffer = fs.readFileSync(studentsFilePath)// returns a buffer, machine readable, not human readable
    const fileAsString = fileAsBuffer.toString()//converto il file in stringa
    const studentsArray = JSON.parse(fileAsString)
    res.send(studentsArray)
})

router.get("/:id", (req, res) => {

    const studentsFilePath = path.join(__dirname, "students.json")
    const fileAsBuffer = fs.readFileSync(studentsFilePath)
    const fileAsString = fileAsBuffer.toString()
    const studentsArray = JSON.parse(fileAsString)
    const idComingFromReq = req.params.id
    const student = studentsArray.filter(student => student.ID === idComingFromReq)
    res.send(student)
})

router.post("/", (req, res) => {
    const studentsFilePath = path.join(__dirname, "students.json")
    const fileAsBuffer = fs.readFileSync(studentsFilePath)
    const fileAsString = fileAsBuffer.toString()
    const studentsArray = JSON.parse(fileAsString)
    
    const newStudent = req.body
    newStudent.ID = uniqid()
    studentsArray.push(newStudent)
    fs.writeFileSync(studentsFilePath, JSON.stringify(studentsArray))
    res.status(201).send(newStudent)
})

router.put("/:id", (req, res) => {
    const studentsFilePath = path.join(__dirname, "students.json")
    const fileAsBuffer = fs.readFileSync(studentsFilePath)
    const fileAsString = fileAsBuffer.toString()
    const studentsArray = JSON.parse(fileAsString)
    const newStudentsArray = studentsArray.filter(student => student.ID !== req.params.id)
    const modifiedStudent = req.body
    modifiedStudent.ID = req.params.id
    newStudentsArray.push(modifiedStudent)
    fs.writeFileSync(studentsFilePath, JSON.stringify(newStudentsArray))

    res.send("student updated")
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
