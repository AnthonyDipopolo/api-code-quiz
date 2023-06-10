// Here are all the globally declared variables that can be used in multiple functions
var button = document.querySelector('#btn');
var htmlTimer = document.querySelector("#time");
var modal = document.querySelector('#modal-content');
var score = document.querySelector('#scores-section');
var correct = '';
var duration = 60;
var questionIndex = 0;
var footer = document.querySelector('#footer');
var footerH2 = document.querySelector('#footer-h2');
var input = document.querySelector('#initials-input');
var viewHighScores = document.querySelector('#view-high-score');

//This functions main job is to run the code block that creates the questions and choices in the modal when the start button is clicked
function createQuestion() {
//here is the stored variables that can only be called upon in this function 
  var h1 = document.querySelector('#question');
  var p0 = document.querySelector('#answer1');
  var p1 = document.querySelector('#answer2');
  var p2 = document.querySelector('#answer3');
  var p3 = document.querySelector('#answer4');
  var modal = document.querySelector('#modal');
  var hero = document.querySelector('#hero');
  var button = document.querySelector('#btn');
  var footer = document.querySelector('#footer');
  var footerH2 = document.querySelector('#footer-h2')
 
//This is where the function hides the first page and adds the modal and the footer to the screen allowing the user to see them now
  modal.style.display = "flex";
  footer.style.display = "flex";
  hero.style.display = 'none';
  button.style.display = 'none';
//This if statement is used to tell the function if the question index is less than 5 then continue to pull another question or continue to questionIndex++
  if (questionIndex < 5) {

    //this is used to pull a random index from the questionIndex so that a random question is chosen 
    var randomIndex = Math.floor(Math.random() * data.length);
    var questionObj = data[randomIndex];

    footerH2.innerText = ''; // Clear any previous content in the footer

//this code takes the variables previously set to ids in the html and sets their new text on the website to the randomly selected question or the choices that go along with that question
    h1.innerText = questionObj.question;
    p0.innerText = questionObj.choices[0];
    p1.innerText = questionObj.choices[1];
    p2.innerText = questionObj.choices[2];
    p3.innerText = questionObj.choices[3];
    //this sets the variable correct to be the correct answer in the data array 
    correct = questionObj.answer;

    questionIndex++;
  } else {
    endGame(false); //the end of the else statement says that if there are less than 5 questions continue to generate questions and dont run endgame
  }
};

//here we target the choice that was selected
function choice(eventObj) {
  var btn = eventObj.target;
  var btnText = btn.innerText;
  
  //console.log(eventObj);
  //console.log(btnText);
//then we run an if statement to say if that choices was correct and if the amount of questions is less than 5 then we run the createQuestion function to create a new question until we reach 5
  if (btnText === correct) {
    //console.log('Correct!');
    if (questionIndex <= 5) {
      createQuestion();
      footerH2.innerText = "Correct";
    } else {
      endGame(false);
    } //this tells the program to minus 5 seconds from the timer if the choices that was selected was wrong 
  } else {
    console.log('Wrong');
    duration -= 5;
    footerH2.innerText = "Wrong";
  }

}
//this is the end game function which tells the website what to do when the time is up or the amount of questions is 5, it displays the scoreboard screen 
function endGame(timeDone) {
  if (timeDone) {
    htmlTimer.style.display = "none";
    modal.style.display = "none";
    footer.style.display = "none";
    score.style.display = "flex";
    saveScore();

  } else {
    //console.log('You Win!')
    endGame(true);

  }
}

//this is the timer set to an anoymous function that is only started when the user clicks the start game button 
button.addEventListener('click', function () {
 //the set interval element is used to take a second off for the whole 60 second duration 
  var timer = setInterval(function () {

    duration--;
//here is the code to show the timer on the website
    htmlTimer.innerText = duration;
//here is the code to tell the timer that if the time is at or below 0 then the interval should be cleared or stoped and that if the time is up or the questions reach the limit of 5 then the function of end game becomes true and runs 
    if (duration <= 0 || questionIndex > 5) {
      clearInterval(timer);
      endGame(true);
    }

  }, 1000); //this is to tell the timer to run in seconds and not miliseconds 

});

//this function saves the user score 
function saveScore() {
  var initials = input.value.trim(); //here the intials variable holds the input value which is trimmed of white space
  

  function clearData() {
    input.value = ''; // Clear the input field
  }

  if (initials !== "") { //checks to see if the intials variable is an empty string and if intials contains anything other than white space then it will be true and run
    var userScore = {   //running will create th euserscore variable and set the intials to the input intials and score to time left
      initials: initials,
      score: duration
    };
    
  //this is used to gather the scores that are in the local storage and store them to the scores array 
    var scoresArray = getScoresData();
    scoresArray.push(userScore); //adds the usser score to the end of the array
  
    saveScoresData(scoresArray); //then we call the saveScoresData function to save this and create a json
    showScores(); //updates the webpage to show the score 
  
    clearData(); //clears the input filed for the next user to enter their initials 
  }
}
//we use the key to grab the data from the local storage and if the key doesnt exist we use the [] so that scoreData cannot be null
function getScoresData() {
  var scoresData = localStorage.getItem('quizScores');
  var parsed = JSON.parse(scoresData) || [];
  
  return parsed; //this now stores the data that was changed from a string to an array
}

function saveScoresData(arr) { //this function takes an array and converts it to a string which is allowed to be stored in the local storage to be accesed whenever needed 
  var jsonVal = JSON.stringify(arr);
  localStorage.setItem('quizScores', jsonVal);
}
//this is how the scores are shown in the webpage
function showScores() {
  var scores = getScoresData();
  var scoresContainer = document.querySelector('#scores-container'); //the container element is selected from html
  
  scoresContainer.innerHTML = ''; //reset the html
  
  if (scores.length === 0) {
    scoresContainer.innerHTML = '<p>No high scores have been recorded.</p>'; 
  }
  //here the html is created to hold the scores and intials 
  for (var scoreObj of scores) {
    var div = document.createElement('div');
    div.classList.add('scoreBoard'); //added a class to the div
  
    var h3 = document.createElement('h3'); //created h3
    h3.innerText = `Initials: ${scoreObj.initials}`; //concated the intials to make a dynamic innerText
    div.append(h3); //append or put the h3 in the div
  
    var p = document.createElement('p'); //create a paragraph for the score 
    p.innerText = `Score: ${scoreObj.score}`; //concat just like intials 
    div.append(p); //append to the div
  
    scoresContainer.append(div);
  }
}
//this is ued to tell the website to save the input data when the enter button or keycode 13 is key down and run function save score
function saveData(eventObj) {
  if (eventObj.keyCode === 13) {
    saveScore();
  }
}
//this is to display the scoreboard through the view high score button without having to play the game 
function GameOverPage() {
   if (modal.style.display !== 'none') {
    htmlTimer.style.display = 'none';
    modal.style.display = 'none';
    footer.style.display = 'none';
    score.style.display = 'flex';
    saveScore();
    createQuestion();
  }

}




//these are event listeners set to listen for user input and call a function when that input is done
modal.addEventListener('click', choice);
button.addEventListener('click', createQuestion);
input.addEventListener('keydown', saveData);
viewHighScores.addEventListener('click', GameOverPage);

showScores();