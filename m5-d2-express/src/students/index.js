//richiedo sempre express
const express = require("express")
//per creare il mio router quando faccio router.get("")
const router = express.Router()
const fs = require("fs") //core module (file system, read files, write, etc..)
const path = require("path")// questo mi serve per poter creare un path relativo dentro studentsFilePath

//qui prendo tutti gli students, mi serve solo uno / per tutti gli studenti
//dentro prende una funzione che è il mio handler
router.get("/", (req, res) => {
    //ho assegnato la variabile path che mi consente di usare __dirname, con il metodo path concateno __dirname con il mio file json
    const studentsFilePath = path.join(__dirname, "students.json")
    //a)prendo la lista di studenti dal file su disco (students.json).
    
    //b)devo inviare la lista come response

    //faccio il test con postman per vedere se ricevo una response
    res.send("i am the list of students")
})

//qui prendo uno studente singolo tramite id
router.get("/:id", (req, res) => {
    res.send("i am the single student")
})

//posto un nuovo studente
router.post("/", (req, res) => {
    res.send("i am the new student")
})
//edito le info di uno studente, mi serve l'id per identificare quello studente
router.put("/:id", (req, res) => {
    res.send("edited student info")
})
//elimino uno studente, e mi serve ancora l'id
router.delete("/:id", (req, res) => {
    res.send("Deleted student")
}) 
//esporto il router per poterlo usare
module.exports = router
