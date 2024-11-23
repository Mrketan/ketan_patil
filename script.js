const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
});


document.querySelectorAll('.faq-question').forEach(question => {
question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    faqItem.classList.toggle('open');
});
}); 

// Home section Script
const typedText = document.querySelector('.typing-text');
const phrases = ["Web Development", "UI/UX Design", "Digital Marketing", "App Development"];
let phraseIndex = 0;
let letterIndex = 0;

function type() {
  if (letterIndex < phrases[phraseIndex].length) {
    typedText.textContent += phrases[phraseIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000); // Wait before erasing
  }
}

function erase() {
  if (letterIndex > 0) {
    typedText.textContent = phrases[phraseIndex].substring(0, letterIndex - 1);
    letterIndex--;
    setTimeout(erase, 50);
  } else {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  type();
});
// Skills

// Array of skills with their icons
const skills = [
    { "name": "ReactJS", "icon": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" },
    { "name": "Firebase", "icon": "https://img.icons8.com/color/48/000000/firebase.png" },
    { "name": "Android", "icon": "https://img.icons8.com/fluency/48/000000/android-os.png" },
    { "name": "MaterialUI", "icon": "https://img.icons8.com/color/48/000000/material-ui.png" },
    { "name": "Bootstrap", "icon": "https://img.icons8.com/color/48/000000/bootstrap.png" },
    { "name": "Sass", "icon": "https://img.icons8.com/color/48/000000/sass.png" },
    { "name": "HTML5", "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png" },
    { "name": "CSS3", "icon": "https://img.icons8.com/color/48/000000/css3.png" },
    { "name": "JavaScript", "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png" },
    { "name": "Java", "icon": "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" },
    { "name": "PHP", "icon": "https://img.icons8.com/offices/48/000000/php-logo.png" },
    { "name": "C++", "icon": "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" },
    { "name": "MongoDB", "icon": "https://img.icons8.com/color/48/000000/mongodb.png" },
    { "name": "MySQL", "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png" },
    { "name": "jQuery", "icon": "https://img.icons8.com/ios-filled/48/1169ae/jquery.png" },
    { "name": "Git VCS", "icon": "https://img.icons8.com/color/48/000000/git.png" },
    { "name": "GitHub", "icon": "https://img.icons8.com/glyph-neue/48/ffffff/github.png" },
    { "name": "WordPress", "icon": "https://img.icons8.com/color/48/000000/wordpress.png" }
];

// Function to render skills
const renderSkills = () => {
    const skillsContainer = document.querySelector('.skills-container');
    skills.forEach(skill => {
        // Create skill element
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('skill');

        // Create image element for the skill icon
        const skillImg = document.createElement('img');
        skillImg.src = skill.icon;
        skillImg.alt = skill.name;

        // Create paragraph element for the skill name
        const skillName = document.createElement('p');
        skillName.textContent = skill.name;

        // Append image and text to skill div
        skillDiv.appendChild(skillImg);
        skillDiv.appendChild(skillName);

        // Append the skill div to the container
        skillsContainer.appendChild(skillDiv);
    });
};

// Call the function to render skills
renderSkills();

// Education 
// JavaScript to animate education items on scroll
document.addEventListener("DOMContentLoaded", function() {
  const educationItems = document.querySelectorAll(".education-item");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("animate");
              observer.unobserve(entry.target); // Stop observing once animated
          }
      });
  }, { threshold: 0.2 }); // Trigger when 20% of the item is in view

  educationItems.forEach(item => observer.observe(item));
});


