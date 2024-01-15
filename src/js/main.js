// Load Styles
import '../scss/main.scss';

// Load Bootstrap init
import {initBootstrap} from "./bootstrap.js";

// Loading bootstrap with optional features
initBootstrap({
  tooltip: false,
  popover: false,
  toasts: false,
});

// Your app code
// console.log(`Hello ${process.env.HELLO}`);

// Add additional js files
// import './custom.js';

// Update active menu item
$(document).ready(function () {
  var url = window.location;
  $('ul.navbar-nav a').filter(function() {
      return this.href == url;
  }).addClass('active');
});
