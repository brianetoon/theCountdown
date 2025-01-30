// public/script.js

window.onload = function() {
    var targetDate = new Date("March 21, 2025 09:00:00 GMT-0600").getTime();
  
    // update the countdown every 1 second
    var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = targetDate - now;
  
      // time calculations
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      var minutes = Math.floor((distance / (1000 * 60)) % 60);
  
      // update the 
      document.querySelector('.digit:nth-child(1)').innerHTML = days;
      document.querySelector('.digit:nth-child(3)').innerHTML = hours;
      document.querySelector('.digit:nth-child(5)').innerHTML = minutes;
  
      // when the countdown is over
      if (distance < 0) {
        clearInterval(x);
        document.querySelector('.countdown-display').innerHTML = "L A U N C H";
      }
    }, 1000);
  };
  