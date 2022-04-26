const skillsSection = document.getElementById("our-skills");
const progressSpans = document.querySelectorAll(".our-skills .skill span");

function progressBarAnim() {
  if (window.scrollY >= skillsSection.offsetTop) {
    progressSpans.forEach(span => (span.style.width = span.dataset.progress));
  }
}

export default progressBarAnim;
