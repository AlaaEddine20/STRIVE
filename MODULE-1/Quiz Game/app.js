const questionsAndAnswers = 
    {
        question: "Wich of these variables is a string?",
        choice1: "let variable = ciao",
        choice2: "let variable = 12",
        choice3: "let variable = /i am a string/",
        choice4: "let variable = 'i am a string'",
        answer: 4
    }


const question = document.querySelector(".question").textContent = questionsAndAnswers.question


let choices = document.querySelectorAll(".choice")
let choice1 = document.querySelector("#A").textContent = questionsAndAnswers.choice1
let choice2 = document.querySelector("#B").textContent = questionsAndAnswers.choice2
let choice3 = document.querySelector("#C").textContent = questionsAndAnswers.choice3
let choice4 = document.querySelector("#D").textContent = questionsAndAnswers.choice4

