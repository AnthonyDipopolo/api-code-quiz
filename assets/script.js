//var timer = 60;
//var seconds = Date.now() + timer * 1000;
// var interval = setInterval(function () {
//     var timeCurrent = Date.now();
//     var timeRemaining = Math.floor((interval - timeCurrent) / 1000);
//     console.log('Remaining Time', timeRemaining));

//     if (timeRemaining <= 0) {
//     clearInterval(interval);
//     alert('Times Up');
//     }
// }, 1000);

var htmlTimer = document.querySelector("#time");
var duration = 60;

// Calculate the target time
var targetTime = Date.now() + duration * 1000;

// Update the timer every second
var timer = setInterval(function() {
    // Get the current time
    var currentTime = Date.now();
  
    // Calculate the remaining time in seconds
    var remainingTime = Math.floor((targetTime - currentTime) / 1000);
  
    // Display the remaining time
    //console.log("Remaining Time:", remainingTime, "seconds");
    htmlTimer.textContent = remainingTime
  
    // Check if the timer has reached 0
    if (remainingTime <= 0) {
      // Timer has finished, stop the interval
      clearInterval(timer);
      htmlTimer.textContent = "Times Up!";
    }
  }, 1000);

  