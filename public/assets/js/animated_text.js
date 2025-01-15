const phrases = [
  "Developer",
  "UX/UI Designer",
  "Web Enthusiast",
  "Creative Coder",
];
let currentPhrase = 0;
let currentText = "";
let isDeleting = false;
let charIndex = 0;
const spanElement = document.querySelector(".text-animation span");

function typeText() {
  if (isDeleting) {
    currentText = phrases[currentPhrase].substring(0, charIndex - 1);
    charIndex--;
  } else {
    currentText = phrases[currentPhrase].substring(0, charIndex + 1);
    charIndex++;
  }

  spanElement.textContent = currentText;

  if (!isDeleting && charIndex === phrases[currentPhrase].length) {
    setTimeout(() => {
      isDeleting = true;
    }, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentPhrase = (currentPhrase + 1) % phrases.length;
  }

  const typingSpeed = isDeleting ? 50 : 150;
  setTimeout(typeText, typingSpeed);
}

typeText();
