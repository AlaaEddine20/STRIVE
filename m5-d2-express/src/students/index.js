//richiedo sempre express
const express = require("express")
//per creare il mio router quando faccio router.get("")
const router = express.Router()
const fs = require("fs") //core module (file system, read files, write, etc..)
const path = require("path")// questo mi serve per poter creare un path relativo dentro studentsFilePath
const uniqid = require("uniqid")//uso uniqid per generare id nuovi ogni volta che posto
//qui prendo tutti gli students, mi serve solo uno / per tutti gli studenti
//dentro prende una funzione che è il mio handler
router.get("/", (req, res) => {
    //ho assegnato la variabile path che mi consente di usare __dirname, con il metodo path concateno __dirname con il mio file json
    const studentsFilePath = path.join(__dirname, "students.json")
    //a) Prendo la lista di studenti dal file su disco (students.json) e la rendo leggibile per la macchina
    const fileAsBuffer = fs.readFileSync(studentsFilePath)// returns a buffer, machine readable, not human readable
    //b) Devo inviare la lista come response
    const fileAsString = fileAsBuffer.toString()//converto il file in stringa
    //c) Converto il file in stringa JSON così da ricevere l'oggetto e poterlo leggere
    const studentsArray = JSON.parse(fileAsString)
    //voglio una risposta in json per poterla leggere dunque procedo così:
    res.send(studentsArray)
    //faccio il test con postman per vedere se ricevo una response
    // res.send("i am the list of students")
})

//qui prendo uno studente singolo tramite id
router.get("/:id", (req, res) => {

    const studentsFilePath = path.join(__dirname, "students.json")
    const fileAsBuffer = fs.readFileSync(studentsFilePath)
    const fileAsString = fileAsBuffer.toString()
    const studentsArray = JSON.parse(fileAsString)
    const idComingFromReq = req.params.id
    const student = studentsArray.filter(student => student.ID === idComingFromReq)
    res.send(student)
    // res.send("i am the single student")
})

//posto un nuovo studente
router.post("/", (req, res) => {
    //leggo il vecchio contenuto dal file precedente
    const studentsFilePath = path.join(__dirname, "students.json")
    const fileAsBuffer = fs.readFileSync(studentsFilePath)
    const fileAsString = fileAsBuffer.toString()
    const studentsArray = JSON.parse(fileAsString)
    
    const newStudent = req.body
    //creo un id unico per lo studente nuovo che posto
    newStudent.ID = uniqid()
    //pusho il nuovo studente in studentsArray
    studentsArray.push(newStudent)
    //scrivo il file su disco
    //rimpiazzo il vecchio contenuto nel file con un nuovo array
    fs.writeFileSync(studentsFilePath, JSON.stringify(studentsArray))
    res.status(201).send(newStudent)
})

//edito le info di uno studente, mi serve l'id per identificare quello studente
router.put("/:id", (req, res) => {
    const studentsFilePath = path.join(__dirname, "students.json")
    const fileAsBuffer = fs.readFileSync(studentsFilePath)
    const fileAsString = fileAsBuffer.toString()
    const studentsArray = JSON.parse(fileAsString)
    //Filtro l'array di studenti in base all'id
    const newStudentsArray = studentsArray.filter(student => student.ID !== req.params.id)
    //e lo reinserisco nell'array
    const modifiedStudent = req.body
    modifiedStudent.ID = req.params.id
    //lo pusho
    newStudentsArray.push(modifiedStudent)
    //e infine lo riscrivo nel disco
    fs.writeFileSync(studentsFilePath, JSON.stringify(newStudentsArray))

    res.send("student updated")
})
//elimino uno studente, e mi serve ancora l'id
router.delete("/:id", (req, res) => {
    const studentsFilePath = path.join(__dirname, "students.json")
    const fileAsBuffer = fs.readFileSync(studentsFilePath)
    const fileAsString = fileAsBuffer.toString()
    const studentsArray = JSON.parse(fileAsString)
    //Filtro lo studente con il suo specifico id
    const newStudentsArray = studentsArray.filter(student => student.ID !== req.params.id)
    //e lo riscrivo su disco
    fs.writeFileSync(studentsFilePath, JSON.stringify(newStudentsArray))
    res.status(204).send("Deleted student")
}) 
//esporto il router per poterlo usare
module.exports = router
