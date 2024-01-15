// Load Styles
import '../scss/main.scss';

// Load Bootstrap init
import {initBootstrap} from "./bootstrap.js";

// Loading bootstrap with optional features
initBootstrap({
  tooltip: true,
  popover: true,
  toasts: true,
});

// Update active menu item
$(function () {
  var url = window.location;
  $('ul.navbar-nav a').filter(function() {
      return this.href == url;
  }).addClass('active').attr("aria-current","page").append(' <span class="visually-hidden">(Current)</span>');
});

// Your app code
console.log(`Hello ${process.env.HELLO}`);

// Add additional js files
import './custom.js';