var button = document.querySelector('#btn');
var htmlTimer = document.querySelector("#time");
var modal = document.querySelector('#modal-content');
//var questionObj = data;
var correct = '';
//var questionObj = index[0];
var duration = 60;
var questionIndex = 0;
var footer = document.querySelector('#footer');
var footerH2 = document.querySelector('#footer-h2');

button.addEventListener('click', function () {

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
});


function choice(eventObj) {
  var btn = eventObj.target;
  var btnText = btn.innerText;
  //var footer = document.querySelector('#footer');

  console.log(eventObj);
  console.log(btnText);

  if (btnText === correct) {
    console.log('Correct!');
    //footerH2.innerText = "Correct";
    if (questionIndex < 5) {
      //button.click();
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
    htmlTimer.innerText = "Times Up!";
    modal.style.display = "none";
    //footer.style.display = "none"

  } else {
    console.log('You Win!')
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

modal.addEventListener('click', choice);