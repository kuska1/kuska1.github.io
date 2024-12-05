console.log(
  '%cWhat are you looking here?',
  `
    margin: 30px 0px 30px 30px;
    padding: 12px 12px 12px 12px;
    font-family: 'Comic Sans MS';
    font-size: 24px;
    color: pink;
    background-color: transparent;
    border-radius: 16px;
    border: 4px solid black;
  `
)

function randomizePathAnimation() {
  document.querySelectorAll('.background.active svg path').forEach((path) => {
      const totalLength = path.getTotalLength();
      const randomDashArray = Math.random() * totalLength;
      const randomDashOffset = Math.random() * totalLength;
      path.style.setProperty('--dasharray', randomDashArray);
      // path.style.setProperty('--dashoffset', randomDashOffset);
      // console.log("Array: "+randomDashArray)
      // console.log("Offset: "+randomDashOffset)
  });
}
setInterval(randomizePathAnimation, 3000);
function alertInfo() {
  let i;
  let alert_element = document.getElementsByClassName("alert-info")[0];
  alert_element.style.opacity = 100;
  setTimeout(function(){alert_element.style.opacity = 0}, 2500)
}
function copyText(tocopy) {
  navigator.clipboard.writeText(tocopy).then(() => {
      alertInfo();
  }).catch(err => {
      console.error("Failed to copy text: ", err);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const words = ["kuska1",  "kusaka", "flowird"];
  const titleElement = document.getElementById("title");

  let wordIndex = 0;
  let letterIndex = 0;
  let typingDelay = 150; // Delay between letters
  let wordDelay = 1000;  // Delay after completing a word
  let erasingDelay = 100; // Delay between letters while erasing

  function typeWord() {
      if (letterIndex < words[wordIndex].length) {
          titleElement.textContent += words[wordIndex][letterIndex];
          letterIndex++;
          setTimeout(typeWord, typingDelay);
      } else {
          setTimeout(eraseWord, wordDelay);
      }
  }

  function eraseWord() {
      if (letterIndex > 0) {
          titleElement.textContent = titleElement.textContent.slice(0, -1);
          letterIndex--;
          setTimeout(eraseWord, erasingDelay);
      } else {
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(typeWord, typingDelay);
      }
  }

  typeWord();
});
document.addEventListener('DOMContentLoaded', () => {
  const backgrounds = document.querySelectorAll('.background');
  function setRandomActive() {
      backgrounds.forEach(bg => bg.classList.remove('active'));
      const randomIndex = Math.floor(Math.random() * backgrounds.length);
      backgrounds[randomIndex].classList.add('active');
  }
  setRandomActive();
});
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.background.active svg path').forEach((path) => {
      const totalLength = path.getTotalLength();
      const randomDashOffset = Math.random() * totalLength;
      path.style.setProperty('--dashoffset', randomDashOffset);
      console.log("Background offset set to: "+randomDashOffset)
  });
  setInterval(randomizePathAnimation, 3000);
  randomizePathAnimation();
});