var button = document.querySelector('#btn');
var htmlTimer = document.querySelector("#time");
var modal = document.querySelector('#modal-content');
var score = document.querySelector('#scores-section');
//var questionObj = data;
var correct = '';
//var questionObj = index[0];
var duration = 60;
var questionIndex = 0;
var footer = document.querySelector('#footer');
var footerH2 = document.querySelector('#footer-h2');
var input = document.querySelector('#initials-input');
var viewHighScores = document.querySelector('#view-high-score');

function createQuestion() {

  var h1 = document.querySelector('#question');
  var p0 = document.querySelector('#answer1');
  var p1 = document.querySelector('#answer2');
  var p2 = document.querySelector('#answer3');
  var p3 = document.querySelector('#answer4');
  //var section = document.querySelector('#modal-content');
  var modal = document.querySelector('#modal');
  var hero = document.querySelector('#hero');
  var button = document.querySelector('#btn');
  var footer = document.querySelector('#footer');
  var footerH2 = document.querySelector('#footer-h2')
  //var header = document.querySelector('#header');

  modal.style.display = "flex";
  footer.style.display = "flex";
  hero.style.display = 'none';
  button.style.display = 'none';

  if (questionIndex < 5) {

    var randomIndex = Math.floor(Math.random() * data.length);
    var questionObj = data[randomIndex];

    // var footerH2 = document.querySelector('#footer-h2');
    footerH2.innerText = ''; // Clear any previous content



    // for (var index = 0; index < data.length; index++) {
    //   var questionObj = data[index];

    h1.innerText = questionObj.question;
    p0.innerText = questionObj.choices[0];
    p1.innerText = questionObj.choices[1];
    p2.innerText = questionObj.choices[2];
    p3.innerText = questionObj.choices[3];
    //footer.innerText = questionObj.answer;
    correct = questionObj.answer;

    // section.append(h1);
    // section.append(p0);
    // section.append(p1);
    // section.append(p2);
    // section.append(p3);
    // footer.append(footerH2);

    //console.log(footer);

    //console.log(questionObj.answer);
    questionIndex++;
  } else {
    endGame(false);
  }
};


function choice(eventObj) {
  var btn = eventObj.target;
  var btnText = btn.innerText;
  //var footer = document.querySelector('#footer');

  console.log(eventObj);
  console.log(btnText);

  if (btnText === correct) {
    console.log('Correct!');
    //footerH2.innerText = "Correct";
    if (questionIndex <= 5) {
      //button.click();
      createQuestion();
      footerH2.innerText = "Correct";
    } else {
      endGame(false);
    }
  } else {
    console.log('Wrong');
    duration -= 5;
    footerH2.innerText = "Wrong";
  }

  

  //questionIndex++;
}

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


button.addEventListener('click', function () {
  // Calculate the target time
  // Update the timer every second
  var timer = setInterval(function () {

    duration--;

    htmlTimer.innerText = duration;

    if (duration <= 0 || questionIndex > 5) {
      clearInterval(timer);
      endGame(true);
    }


    // Get the current time
    // Check if the timer has reached 0

    //if (duration <= 0) {
    // Timer has finished, stop the interval
    //   clearInterval(timer);
    //   htmlTimer.innerText = "Times Up!";
    // } else{
    //   duration--;
    //   htmlTimer.innerText = duration;
    // }

  }, 1000);

});

function saveScore() {
  var initials = input.value.trim();
  
  if (initials !== "") {
    var userScore = {
      initials: initials,
      score: duration
    };
  
    var scoresArray = getScoresData();
    scoresArray.push(userScore);
  
    saveScoresData(scoresArray);
    showScores();
  
    clearData();
  }
}

function getScoresData() {
  var scoresData = localStorage.getItem('quizScores');
  var parsed = JSON.parse(scoresData) || [];
  
  return parsed;
}

function saveScoresData(arr) {
  var jsonVal = JSON.stringify(arr);
  localStorage.setItem('quizScores', jsonVal);
}

function showScores() {
  var scores = getScoresData();
  var scoresContainer = document.querySelector('#scores-container');
  
  scoresContainer.innerHTML = '';
  
  if (scores.length === 0) {
    scoresContainer.innerHTML = '<p>No high scores have been recorded.</p>';
  }
  
  for (var scoreObj of scores) {
    var div = document.createElement('div');
    div.classList.add('scoreBoard');
  
    var h3 = document.createElement('h3');
    h3.innerText = `Initials: ${scoreObj.initials}`;
    div.append(h3);
  
    var p = document.createElement('p');
    p.innerText = `Score: ${scoreObj.score}`;
    div.append(p);
  
    scoresContainer.append(div);
  }
}

function clearData() {
  input.value = ''; // Clear the input field
}

function saveData(eventObj) {
  if (eventObj.keyCode === 13) {
    saveScore();
  }
}

// function saveScoresData(arr) {
//   var jsonVal = JSON.stringify(arr);
//   localStorage.setItem('quizScores', jsonVal);
// }

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





modal.addEventListener('click', choice);
button.addEventListener('click', createQuestion);
input.addEventListener('keydown', saveData);
viewHighScores.addEventListener('click', GameOverPage);

showScores();