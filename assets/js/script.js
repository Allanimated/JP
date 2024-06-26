"use strict";

const loader = document.getElementById("loader");

document.addEventListener("DOMContentLoaded", () => {
  const navMenuIcon = document.querySelector(".w-icon-nav-menu");
  const nav = document.querySelector(".nav-menu-two");
  const icon = document.getElementById("menu-icon");
  const navDropdown = document.querySelector(".nav-dropdown-icon");
  const resourcesNav = document.querySelector(".nav-dropdown-list");
  const navBarLinks = document.querySelectorAll(".navbar-links");
  const eventsButton = document.getElementById("events-button");
  const accountingButton = document.getElementById("accounting-button");
  const eventsPortfolio = document.getElementById("events-portfolio");
  const accountingPortfolio = document.getElementById("accounting-portfolio")
  const portfolio = document.getElementById("portfolio")

  //set default view to events
  eventsPortfolio.classList.add("visible")
  accountingPortfolio.classList.remove("visible");
  portfolio.style.height = eventsPortfolio.clientHeight + 'px'

  eventsButton.addEventListener("click", changeView)
  accountingButton.addEventListener("click", changeView)

  function changeView(e) {
    const id = e.target.id;
    if (id === "events-button") {
      eventsPortfolio.classList.add("visible")
      accountingPortfolio.classList.remove("visible")
      portfolio.style.height = eventsPortfolio.clientHeight + "px";

    } else {
      eventsPortfolio.classList.remove("visible");
      accountingPortfolio.classList.add("visible");
      portfolio.style.height = accountingPortfolio.clientHeight + "px";

    }
  }

  //loader
  loader.classList.add("loaded");
  document.body.classList.remove("active");

  const toggleNav = (event) => {
    if (nav.style.display === "none" || nav.style.display === "") {
      nav.style.display = "flex";
      icon.innerText = "close";
    } else {
      nav.style.display = "none";
      icon.innerText = "menu";
    }
  };

  const toggleResources = (event) => {
    if (
      resourcesNav.style.display === "none" ||
      resourcesNav.style.display === ""
    ) {
      resourcesNav.style.display = "flex";
    } else {
      resourcesNav.style.display = "none";
    }
  };

  navMenuIcon.addEventListener("click", toggleNav);
  navDropdown.addEventListener("click", toggleResources);
  navBarLinks.forEach((navLink) =>
    navLink.addEventListener("click", (event) => {
      console.log(window.innerWidth);
      if (window.innerWidth <= 991) {
        toggleNav(event);
      }
    })
  ); // close navbar when link is clicked only in tablet and phone view

  /**
   * SCROLL REVEAL
   */

  const revealElements = document.querySelectorAll("[data-reveal]");

  const scrollReveal = function () {
    for (let i = 0; i < revealElements.length; i++) {
      const elementIsInScreen =
        revealElements[i].getBoundingClientRect().top <
        window.innerHeight / 1.15;

      if (elementIsInScreen) {
        revealElements[i].classList.add("revealed");
      } else {
        revealElements[i].classList.remove("revealed");
      }
    }
  };

  window.addEventListener("scroll", scrollReveal);

  scrollReveal();
});
