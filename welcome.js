document.addEventListener('DOMContentLoaded', function () {
  const textElement = document.getElementById('typewriter-text');
  const textContent = 'Sam Abderholden';
  let index = 0;

  function typeWriter() {
    if (index < textContent.length) {
      textElement.innerHTML += textContent.charAt(index);
      index++;
      setTimeout(typeWriter, 150); // Adjust the typing speed (in milliseconds)
    } else {
      blinkBorder(3, 450, function () {
        eraseText();
      });
    }
  }

  function blinkBorder(iterations, interval, callback) {
    if (iterations > 0) {
      setTimeout(function () {
        textElement.style.borderRightColor = 'transparent'; // Set border color to transparent
        setTimeout(function () {
          textElement.style.borderRightColor = 'white'; // Restore border color
          blinkBorder(iterations - 1, interval, callback);
        }, interval);
      }, interval);
    } else {
      // Call the callback function after the blinking is finished
      if (typeof callback === 'function') {
        callback();
      }
    }
  }

  function eraseText() {
    setTimeout(function () {
      eraseNextLetter();
    }, 500); // Adjust the delay before starting erasing
  }

  function eraseNextLetter() {
    if (index > 0) {
      textElement.innerHTML = textContent.substring(0, index - 1);
      index--;
      setTimeout(eraseNextLetter, 75); // Adjust the erasing speed (in milliseconds)
    } else {
      textElement.style.borderRight = 'none';
      // Redirect to a different HTML page after erasing is finished
      window.location.href = 'about.html';
    }
  }

  typeWriter();
});
