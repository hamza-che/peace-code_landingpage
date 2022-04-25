const daysContainer = document.querySelector(".latest-events .days");
const hoursContainer = document.querySelector(".latest-events .hours");
const minutesContainer = document.querySelector(".latest-events .minutes");
const secondsContainer = document.querySelector(".latest-events .seconds");
const countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

function countDown() {
  const nowDate = new Date().getTime();
  const diffDate = countDownDate - nowDate;

  const days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffDate % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
  const minutes = Math.floor((diffDate % (1000 * 60 * 60)) / 1000 / 60);
  const seconds = Math.floor((diffDate % (1000 * 60)) / 1000);

  days >= 10
    ? (daysContainer.innerHTML = days)
    : (daysContainer.innerHTML = `0${days}`);
  hours >= 10
    ? (hoursContainer.innerHTML = hours)
    : (hoursContainer.innerHTML = `0${hours}`);
  minutes >= 10
    ? (minutesContainer.innerHTML = minutes)
    : (minutesContainer.innerHTML = `0${minutes}`);
  seconds >= 10
    ? (secondsContainer.innerHTML = seconds)
    : (secondsContainer.innerHTML = `0${seconds}`);
}

export default countDown;
