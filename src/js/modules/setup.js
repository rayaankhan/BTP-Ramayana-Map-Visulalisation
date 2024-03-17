// Sidebar and toggle button module
export const setupSidebar = (map) => {
  const sidebar = document.getElementById("sidebar");
  const sidebarToggle = document.getElementById("sidebar-toggle");

  sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("closed");
    map.invalidateSize();
  });
};

// Navbar links event listener module
export const setupNavbarLinks = () => {
  const navbarLinks = document.querySelectorAll("#menu a");

  navbarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");

      $.ajax({
        url: href,
        success: function (data) {
          $("#content").html(data);
        },
      });
    });
  });
};

// Modal functionality module
export const setupModals = () => {
  const modalBtns = document.querySelectorAll(".modal-open");

  modalBtns.forEach((btn) => {
    btn.onclick = function () {
      const modal = btn.getAttribute("data-modal");
      document.getElementById(modal).style.display = "block";
    };
  });

  const closeBtns = document.querySelectorAll(".modal-close");

  closeBtns.forEach((btn) => {
    btn.onclick = function () {
      const modal = btn.closest(".modal");
      modal.style.display = "none";
    };
  });
};
