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