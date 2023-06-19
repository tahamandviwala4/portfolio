"use strict";

// Add eventListener on multiple elemets
const addEventOnElement = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

// Preloader
const preloader = document.querySelector("[data-preloader]");
window.addEventListener("load", function () {
  // Adds classes to html elements
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

// Mobile nav toggle
const navbar = document.getElementById("data-navbar");
const navToggler = document.getElementById("data-nav-toggler");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
};

navToggler.addEventListener("click", toggleNavbar);

// Header : add bottom shadow to header when scrolled more than 50px

const header = document.getElementById("data-header");
const activeHeader = function () {
  window.scrollY > 100
    ? header.classList.add("active")
    : header.classList.remove("active");
};

window.addEventListener("scroll", activeHeader);
