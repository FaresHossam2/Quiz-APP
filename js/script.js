  
    const questions = [
    
      {
        question: "which of the following is not a valid type of loop in JS",
        answers:[
          {text: "for", correct: "flase"},
          {text: "while", correct: "false"},
          {text: "repeat", correct: "false"},
          {text: "do-while", correct: "true"},

        ]
      },
      {
        question: `Which built-in method adds one or more elements
         to the end of an array and returns the new length of the array`,
        answers:[
          {text: "push()", correct: "true"},
          {text: "concat()", correct: "false"},
          {text: "splice()", correct: "false"},
          {text: "join()", correct: "false"},
        ]
      },
    
      {
        question: "What data type can be stored in Local Storage",
        answers: [
          {text: "String", correct: "true"},
          {text: "Object", correct: "false"},
          {text: "Array", correct: "false"},
          {text: "All of the above", correct: "false"},
        ]
      },
      {
        question: `
        let a = 10 , b = 10 , c = 10 ; <br><br>
        if (a == b == c){ <br><br>
          console.log ("Hello"); <br><br>
        }else { <br><br>
          console.log ("bye"); <br>
        }`,
        answers:[
          {text: "error", correct: "false"},
          {text: "Hello ", correct: "false"},
          {text: "bye", correct: "true"},
          {text: "undefiend", correct: "false"},
        ]
      },
      {
        question: "Which method is used to create an AJAX request in JavaScript",
        answers: [
          {text: "XMLHttpRequest()", correct: "true"},
          {text: "createRequest()", correct: "false"},
          {text: "makeRequest()", correct: "false"},
          {text: "newAJAX()", correct: "false"},
        ]
      },
      {
        question: "Which method is used to remove the last element from an array and returns that element",
        answers:[
         
          {text: "shift()", correct: "false"},
          {text: "splice()", correct: "false"},
          {text: "unshift()", correct: "false"},
          {text: "pop()", correct: "true"},
        ]
      },
      {
        question: "What does 'NaN' stand for in JavaScript",
        answers: [
          {text: "'Not a Number'", correct: "true"},
          {text: "'No available Numbers'", correct: "false"},
          {text: "'Notable Numeric'", correct: "false"},
          {text: "'Null and None'", correct: "false"},
        ]
      },
      {
        question: "Which method is used to sort the elements of an array",
        answers:[
          {text: "filter()", correct: "false"},
          {text: "map()", correct: "false"},
          {text: "sort()", correct: "true"},

          {text: "reduce()", correct: "false"},
        ]
      },
      {
        question: "Which method is used to convert a string to an integer",
        answers: [
          {text: "stringToInt()", correct: "false"},
          {text: "toInteger()", correct: "false"},
          {text: "convertToInt()", correct: "false"},
          {text: "parseInt()", correct: "true"},

        ]
      },
      {
        question: "Which method is used to store data in Local Storage",
        answers: [
          {text: "localStorage.setItem()", correct: "true"},
          {text: "localStorage.saveItem()", correct: "false"},
          {text: "localStorage.storeData()", correct: "false"},
          {text: "localStorage.set()", correct: "false"},
        ]
      }
    ]

const questionElement = document.getElementById("question"); // Get the HTML element where the question will be displayed
const answerBtn = document.getElementById("answer-btns"); // Get the HTML element where answer buttons will be displayed
const nextBtn = document.getElementById("next"); // Get the HTML element for the "Next" button
let currentQuestionIndex = 0 ; // Initialize a variable to keep track of the current question index
let score = 0; // Initialize a variable to keep track of the score
    
    const app = document.querySelector(".app");
    const start_btn = document.querySelector(".start_btn button");
    const info_box = document.querySelector(".info_box");
    const exit_btn = info_box.querySelector(".buttons .quit");
    const continue_btn = info_box.querySelector(".buttons .restart");
    const quiz_box = document.querySelector(".quiz_box");

    
    // if startQuiz button clicked
    start_btn.onclick = ()=>{
        info_box.classList.add("activeInfo"); //show info box
    }
    
    // if exitQuiz button clicked
    exit_btn.onclick = ()=>{
        info_box.classList.remove("activeInfo"); //hide info box
    }
    
    // if continueQuiz button clicked
    continue_btn.onclick = ()=>{
        info_box.classList.remove("activeInfo"); //hide info box
        app.style.display="block"; //show quiz box
        start_btn.style.display="none";
        showQuetions(0); //calling showQestions function
        
    }

function startQuiz(){ // Function to start the quiz
  currentQuestionIndex=0; // Reset the current question index
  score = 0; // Reset the score
  nextBtn.innerHTML = "Next"; // Set the text of the "Next" button to "Next"
  showQuestion(); // Call function to display the first question
}

function showQuestion(){ // Function to display a question
  resetState(); // Call function to reset the state (clear previous question and answers)
  let currentQuestion = questions[currentQuestionIndex]; // Get the current question object
  let questionNumber = currentQuestionIndex + 1 ; // Calculate the question number (index + 1)
  questionElement.innerHTML = questionNumber + " - " + currentQuestion.question; // Display the question
  
  currentQuestion.answers.forEach(answer => { // Loop through each answer in the current question
    const button = document.createElement("button"); // Create a button element for the answer
    button.innerHTML = answer.text; // Set the text of the button to the answer
    button.classList.add("btn"); // Add a CSS class to the button
    answerBtn.appendChild(button); // Append the button to the answer container
    if(answer.correct){ // If the answer is correct
      button.dataset.correct = answer.correct; // Set a custom data attribute indicating it's correct
    }
    button.addEventListener("click", selectAnswer); // Add a click event listener to the button
    if (currentQuestionIndex === 4) {
      const appElements = document.getElementsByClassName("app");
      for (let i = 0; i < appElements.length; i++) {
        appElements[i].style.marginBottom = "50px";
      }
    }
    
  });
}

function resetState(){ // Function to reset the state (clear previous question and answers)
  nextBtn.style.display = "none"; // Hide the "Next" button
  while(answerBtn.firstChild){ // Loop through all answer buttons
    answerBtn.removeChild(answerBtn.firstChild); // Remove each answer button
  }
}

function selectAnswer(e){ // Function to handle when an answer is selected
  const selectedBtn = e.target; // Get the clicked button
  const isCorrect = selectedBtn.dataset.correct === "true"; // Check if the selected answer is correct
  if(isCorrect){ // If the answer is correct
    selectedBtn.classList.add("correct"); // Add a CSS class to indicate it's correct
    score++; // Increment the score
  } else { // If the answer is incorrect
    selectedBtn.classList.add("incorrect"); // Add a CSS class to indicate it's incorrect
  }
  Array.from(answerBtn.children).forEach(button =>{ // Loop through all answer buttons
    if(button.dataset.correct === "true"){ // If the button's answer is correct
      button.classList.add("correct"); // Add a CSS class to indicate it's correct
    }
    button.disabled = true; // Disable the button to prevent further selection
  })
  nextBtn.style.display= "block"; // Display the "Next" button
}
function showScore() {
  resetState(); // Call function to reset the state (clear previous question and answers)
  let message;
  if (score > 7) {
    message = `Congratulations! You scored ${score} out of ${questions.length}! 😊`; // Emoji for happy
  } else {
    message = `You scored ${score} out of ${questions.length}. Try again next time! 😔`; // Emoji for sad
  }
  questionElement.innerHTML = message; // Display the score message
  
  // Create and append emoji div
  if (score > 7) {
    const emojiDiv = document.createElement("div");
    emojiDiv.classList.add("emoji");
    emojiDiv.innerHTML = "&#x1F600;"; // Unicode for happy emoji
    questionElement.appendChild(emojiDiv);
  }else{
    const emojiDiv = document.createElement("div");
    emojiDiv.classList.add("emoji");
 
    emojiDiv.innerHTML = "&#x1F622;"; // Unicode for sad emoji
    questionElement.appendChild(emojiDiv);
  }
  
  nextBtn.innerHTML = "Again"; // Change the text of the "Next" button to "Again"
  nextBtn.style.display = "block"; // Display the "Next" button
}




function handleNextBtn(){ // Function to handle the "Next" button click
  currentQuestionIndex++; // Move to the next question
  if(currentQuestionIndex < questions.length){ // If there are more questions remaining
    showQuestion(); // Display the next question
  } else { // If all questions have been answered
    showScore(); // Display the final score
  }
}

nextBtn.addEventListener("click", () =>{ // Add click event listener to the "Next" button
  if(currentQuestionIndex < questions.length){ // If there are more questions remaining
    handleNextBtn(); // Handle the "Next" button click
  } else { // If all questions have been answered
    startQuiz(); // Restart the quiz
  }
})

startQuiz(); // Call function to start the quiz when the page loads
