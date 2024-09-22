(function() {
  window.addEventListener("load", init);

  function init() {
    const contentContainer = document.querySelector('.content-container');
    const footer = document.querySelector('.site-footer');
    const hamburger = document.querySelector('.hamburger');

    contentContainer.addEventListener('scroll', () => {
      const scrollPosition = contentContainer.scrollTop + contentContainer.clientHeight;
      const bottomPosition = contentContainer.scrollHeight;

      if (scrollPosition >= bottomPosition - 20) { // Adjust threshold as needed
        footer.classList.add('show-footer');
      } else {
        footer.classList.remove('show-footer');
      }
    });

    hamburger.addEventListener('click', () => {
      const navbar = document.querySelector('.nav-bar');
      navbar.classList.toggle('active');
    });
  }
 })();