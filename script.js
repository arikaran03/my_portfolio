window.onload = function() {
  // Wait for the "Hello there" animation to finish
  setTimeout(() => {
    // Scroll to the third section after the animation ends
    const nextSection = document.querySelector('.third-section');
    nextSection.scrollIntoView({
      behavior: 'smooth'
    });

    // After the scroll, make the navigation bar visible
    setTimeout(() => {
      const nav = document.querySelector('#desktop-nav');
      nav.style.display = 'flex';  // Change display to 'flex' after scroll
    }, 500);  // Delay before showing the nav bar after scroll
  }, 2700);  // Duration for the "Hello there" animation
};
