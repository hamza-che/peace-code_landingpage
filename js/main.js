const statsSection = document.getElementById("statistics");
const statNumbers = document.querySelectorAll("#statistics .stat .number");
let functionStarted = false;

window.onscroll = function() {
  if (window.scrollY >= statsSection.offsetTop) {
    !functionStarted && statNumbers.forEach(number => startCounting(number));
    functionStarted = true;
  }
};

function startCounting(element) {
  let goal = element.dataset.goal;
  let count = setInterval(() => {
    element.textContent++;
    element.textContent == goal && clearInterval(count);
  }, 1500 / goal);
}

// Event count down
let year = 2022;
const daysContainer = document.querySelector(".latest-events .days");
const hoursContainer = document.querySelector(".latest-events .hours");
const minutesContainer = document.querySelector(".latest-events .minutes");
const secondsContainer = document.querySelector(".latest-events .seconds");
const countDownDate = new Date(`Dec 31, ${year} 23:59:59`).getTime();

const counter = setInterval(() => {
  const nowDate = new Date().getTime();
  const diffDate = countDownDate - nowDate;

  const days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffDate % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
  const minutes = Math.floor((diffDate % (1000 * 60 * 60)) / 1000 / 60);
  const seconds = Math.floor((diffDate % (1000 * 60)) / 1000);

  daysContainer.innerHTML = days < 10 ? `0${days}` : days;
  hoursContainer.innerHTML = hours < 10 ? `0${hours}` : hours;
  minutesContainer.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  secondsContainer.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  diffDate === 0 && year++;
}, 1000);

// Our skills progress bar animation
const skillsSection = document.getElementById("our-skills");
const progressSpans = document.querySelectorAll(".our-skills .skill span");

window.onscroll = function() {
  if (window.scrollY >= skillsSection.offsetTop) {
    progressSpans.forEach(span => (span.style.width = span.dataset.progress));
  }
};
