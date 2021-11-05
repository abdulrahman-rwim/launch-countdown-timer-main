const countDownTiner = new Date("Nov 19, 2021 23:59:59").getTime();
const counter = setInterval(() => {
  const dateNow = new Date().getTime();
  const dateDifference = countDownTiner - dateNow;
  const days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60));
  const secondes = Math.floor((dateDifference % (1000 * 60)) / 1000);
  document.querySelector("[data-days]").innerHTML = days;
  document.querySelector("[data-hours]").innerHTML = hours;
  document.querySelector("[data-minutes]").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector("[data-secondes]").innerHTML =
    secondes < 10 ? `0${secondes}` : secondes;
  if (dateDifference < 0) {
    clearInterval(counter);
  }
}, 1000);
