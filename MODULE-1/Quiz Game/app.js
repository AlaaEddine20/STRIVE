

const question = document.querySelector(".question")

 
let choices = document.querySelectorAll(".choice-text")
let choice1 = document.querySelector("#A")
let choice2 = document.querySelector("#B")
let choice3 = document.querySelector("#C")
let choice4 = document.querySelector("#D")


fetch("https://opentdb.com/api.php?amount=5&category=11")
.then( response => response.json() )
.then( function (data) {
    data.results.forEach(el => {
        // console.log(data)
        let questions = el.question.replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/</g, "&lt;").replace(/&quot;/g, '"');
        
       
        question.textContent = questions
        data.results.forEach(answer => {
            console.log("INCORRECT: ",answer.incorrect_answers)
            console.log("CORRECT: ",answer.correct_answer)
            let correctAnswer = answer.correct_answer
            choices[Math.floor(Math.random() * 3)].textContent = correctAnswer
            
            let wrongAnswers = answer.incorrect_answers
            choices[Math.floor(Math.random() * 3) + 1].textContent = wrongAnswers

        })
            
        
        
    });
} )
