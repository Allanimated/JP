document.addEventListener("DOMContentLoaded", () => {
  const navMenuIcon = document.querySelector(".w-icon-nav-menu");
  const nav = document.querySelector(".nav-menu-two");
  const icon = document.getElementById("menu-icon");
  const navDropdown = document.querySelector(".nav-dropdown-icon");
  const resourcesNav = document.querySelector(".nav-dropdown-list");


  const toggleNav = (event) => {
    if (nav.style.display === "none" || nav.style.display === "") {
      nav.style.display = "flex";
      icon.innerText = "close"

    } else {
      nav.style.display = "none";
      icon.innerText = "menu";
    }
  };

  const toggleResources = (event) => {
    if (resourcesNav.style.display === "none" || resourcesNav.style.display === "") {
      resourcesNav.style.display = "flex";
    } else {
      resourcesNav.style.display = "none";
    }
  }

  navMenuIcon.addEventListener("click", toggleNav);
  navDropdown.addEventListener("click", toggleResources)

});

