document.addEventListener('DOMContentLoaded', () => {
  const roles = [
    'Software Engineer',
    'Mobile App Developer',
    'Full-Stack Developer'
  ];

  const textElement = document.getElementById('typingText');
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  // Speeds (in milliseconds)
  const typingSpeed = 80;
  const deletingSpeed = 40;
  const holdTime = 3000; // 3 seconds pause after full phrase is typed

  function typeEffect() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      // Erase text
      textElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      // Type text
      textElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    // Determine timing for next frame
    let currentDelay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause for 3 seconds once phrase is fully typed
      currentDelay = holdTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Switch to next phrase once erased
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      currentDelay = 300; // Brief pause before typing next word
    }

    setTimeout(typeEffect, currentDelay);
  }

  // Start typewriter loop
  typeEffect();
});