(function() {
  window.addEventListener("load", init);

  function init() {
    const contentContainer = document.querySelector('.content-container');
    const footer = document.querySelector('.site-footer');
    const hamburger = document.querySelector('.hamburger');

    contentContainer.addEventListener('scroll', () => {
      const scrollPosition = contentContainer.scrollTop + contentContainer.clientHeight;
      const bottomPosition = contentContainer.scrollHeight;

      if (scrollPosition >= bottomPosition - 20) {
        footer.classList.add('show-footer');
      } else {
        footer.classList.remove('show-footer');
      }
    });

    hamburger.addEventListener('click', () => {
      const navbar = document.querySelector('.nav-bar');
      navbar.classList.toggle('active');
    });

    document.querySelectorAll('.nav-bar a').forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        smoothScroll(targetId);
      });
    });
  }

  function smoothScroll(targetId) {
    const contentContainer = document.querySelector('.content-container');
    let targetElement;

    if (targetId === 'home') {
      targetElement = document.querySelector('#home');
    } else {
      targetElement = contentContainer.querySelector(`#${targetId}`);
    }

    if (!targetElement) return;

    const startPosition = contentContainer.scrollTop;
    const targetPosition = targetId === 'home' ? 0 : targetElement.offsetTop - contentContainer.offsetTop + 70; // 70 is the height of the fixed header roughly
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      const easing = easeInOutQuad(progress);
      contentContainer.scrollTop = startPosition + (distance * easing);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
  }
})();