const reveals = document.querySelectorAll(".reveal");

const revealFunc = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("reveal");
    observer.unobserve(entry.target);
  });
};
const revealObs = new IntersectionObserver(revealFunc, {
  root: null,
  threshold: 0.1,
});
reveals.forEach((re) => revealObs.observe(re));
