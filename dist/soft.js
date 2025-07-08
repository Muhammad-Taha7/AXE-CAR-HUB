 const hamberg = document.querySelector('.hamberg');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');

    hamberg.addEventListener('click', () => {
      mobileMenu.classList.remove('-translate-x-full');
    });

    closeMenu.addEventListener('click', () => {
      mobileMenu.classList.add('-translate-x-full');
    });








      function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.classList.toggle('hidden');
  }

  // Optional: Close Menu Button
  document.getElementById("closeMenu").addEventListener("click", function () {
    document.getElementById("mobileMenu").classList.add("-translate-x-full");
  });






const percentageEl = document.getElementById("percentage");
  let started = false;

  function startCounting() {
    if (started) return;
    started = true;

    let counter = 0;
    const duration = 1300;
    const target = 90;
    const increment = target / (duration / 10);

    const interval = setInterval(() => {
      counter += increment;
      if (counter >= target) {
        counter = target;
        clearInterval(interval);
      }
      percentageEl.textContent = Math.round(counter) + "%";
    }, 10);
  }

  // Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounting();
      }
    });
  }, {
    threshold: 0.5 // Start when 50% visible
  });

  observer.observe(percentageEl);