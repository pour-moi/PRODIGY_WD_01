const sections = document.querySelectorAll(
  ".aboutPage, .serviceSection, .paycontainer, .casestudy"
);

const options = {
  root: null, // viewport
  threshold: 0.1, // 10% of the target is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    } else {
      entry.target.classList.remove("fade-in");
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});
