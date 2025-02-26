// Theme Toggle
const themeToggle = document.querySelector(".theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.setAttribute(
    "data-theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

// Dynamic Year in Footer
document.getElementById("year").textContent = new Date().getFullYear();


// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Intersection Observer for Scroll Animations
const sections = document.querySelectorAll('section');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
};

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});

// Replay Typewriter Animation on Scroll
const header = document.querySelector("header");

const replayTypewriter = () => {
  const typewriter = document.querySelector(".typewriter");
  typewriter.style.animation = "none"; 
  setTimeout(() => {
    typewriter.style.animation = ""; 
  }, 10);
};

window.addEventListener("scroll", () => {
  const headerPosition = header.getBoundingClientRect().top;
  if (headerPosition < window.innerHeight && headerPosition >= 0) {
    replayTypewriter();
  }
});


