document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById('scrollToTop');
  
    scrollToTopButton.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });