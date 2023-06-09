var button = document.querySelector('#btn')
var htmlTimer = document.querySelector("#time");


button.addEventListener('click', function () {
  // Calculate the target time
  var duration = 60;
  // Update the timer every second
  var timer = setInterval(function () {
    // Get the current time
     // Check if the timer has reached 0

     if (duration <= 0) {
      // Timer has finished, stop the interval
      clearInterval(timer);
      htmlTimer.innerText = "Times Up!";
    } else{
      duration--;
      htmlTimer.innerText = duration;
    }

  }, 1000);

});

button.addEventListener('click', function () {

  var h1 = document.querySelector('#question');
  var p0 = document.querySelector('#answer1');
  var p1 = document.querySelector('#answer2');
  var p2 = document.querySelector('#answer3');
  var p3 = document.querySelector('#answer4');
  var section = document.querySelector('#modal-content');
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

  //header.style.display = 'none';
  //console.log(modal.section.style.display);

  // var data = [
  //   {
  //     question: 'What does the acronym D.O.M. stand for?',
  //     choices: ['Dog Only Members', 'Document Object Model', 'Dancing On Mercury', 'Document On Memory'],
  //     answer: 'Document Object Model'
  //   }
  // ];

  for (var index = 0; index < data.length; index++) {
    var questionObj = data[index];
  
  h1.innerText = questionObj.question;
  p0.innerText = questionObj.choices[0];
  p1.innerText = questionObj.choices[1];
  p2.innerText = questionObj.choices[2];
  p3.innerText = questionObj.choices[3];
  footer.innerText = questionObj.answer;

  section.append(h1);
  section.append(p0);
  section.append(p1);
  section.append(p2);
  section.append(p3);
  footer.append(footerH2);

  //console.log(footer);

  //console.log(questionObj.answer);
  }
});

var questionIndex = 0;

function choice(eventObj){
  var btn = eventObj.target;
  var btnText = btn.innerText;

  if (button.innerText === correct){
    console.log('Correct!');
    timeDone(false);
    questionIndex++;

  } else{
    console.log('Wrong')
    duration -=5;
  }
}

function endGame(timeDone){
  if(timeDone){
    console.log('Times Up!');

  } else{
    console.log('You Win!')
  }
}

