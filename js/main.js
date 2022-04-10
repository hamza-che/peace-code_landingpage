const statsSection = document.getElementById("statistics");
const statNumbers = document.querySelectorAll("#statistics .stat .number");
let functionStarted = false;

window.onscroll = function() {
  if (window.scrollY >= statsSection.offsetTop) {
    !functionStarted && statNumbers.forEach(number => startCounting(number));
  }
  functionStarted = true;
};

function startCounting(element) {
  let goal = element.dataset.goal;
  let count = setInterval(() => {
    element.textContent++;
    element.textContent == goal && clearInterval(count);
  }, 1500 / goal);
}
