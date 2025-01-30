// public/script.js

window.onload = function () {
  const targetDate = new Date("March 21, 2025 09:00:00 GMT-0600").getTime();

  // update the countdown every 1 second
  const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    // update the
    document.querySelector(".digit-days").innerHTML = `${days}:`;
    document.querySelector(".digit-hours").innerHTML = `${hours}:`;
    document.querySelector(".digit-min").innerHTML = `${minutes}:`;
    document.querySelector(".digit-seconds").innerHTML = seconds;

    // when the countdown is over
    if (distance < 0) {
      clearInterval(x);
      document.querySelector(".countdown-display").innerHTML = "L A U N C H";
    }
  }, 1000);
};
