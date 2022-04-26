import countDown from "./modules/countDown.js";
import progressBarAnim from "./modules/progressBarAnim.js";
import statisticsCounter from "./modules/statisticsCounter.js";

window.addEventListener("scroll", () => {
  progressBarAnim();
  statisticsCounter();
});

window.setInterval(countDown, 1000);
