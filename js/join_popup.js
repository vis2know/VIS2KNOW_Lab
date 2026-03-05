// (function () {
//   // Change this key if you want to reset behavior later
//   var STORAGE_KEY = "vis2know_join_popup_hidden_v1";

//   function ready(fn) {
//     if (document.readyState !== "loading") fn();
//     else document.addEventListener("DOMContentLoaded", fn);
//   }

//   ready(function () {
//     // If user previously hid it, do nothing
//     if (localStorage.getItem(STORAGE_KEY) === "1") return;

//     // Only show on homepage (optional)
//     // Comment this block if you want it on every page.
//     if (window.location.pathname !== "/" && !window.location.pathname.endsWith("/index.html")) return;

//     // Requires Bootstrap + jQuery (your site likely already has it)
//     if (typeof window.jQuery === "undefined" || typeof jQuery.fn.modal === "undefined") return;

//     // Show after a short delay (feels nicer)
//     setTimeout(function () {
//       jQuery("#joinLabModal").modal("show");
//     }, 800);

//     // If user checks "Don't show again", store preference
//     var checkbox = document.getElementById("dontShowAgain");
//     if (checkbox) {
//       checkbox.addEventListener("change", function () {
//         if (checkbox.checked) localStorage.setItem(STORAGE_KEY, "1");
//       });
//     }

//     // Also hide permanently if they close the modal (optional)
//     jQuery("#joinLabModal").on("hidden.bs.modal", function () {
//       // Uncomment if you want closing to count as "don't show again"
//       // localStorage.setItem(STORAGE_KEY, "1");
//     });
//   });
// })();

(function () {
  var STORAGE_KEY = "vis2know_join_popup_hidden_v1";

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    if (localStorage.getItem(STORAGE_KEY) === "1") return;

    var path = window.location.pathname.replace(/\/+$/, "");
    var base = "/VIS2KNOW_Lab";

    var isHome =
      path === "" ||
      path === "/" ||
      path === base ||
      path === base + "/index.html";

    if (!isHome) return;

    if (typeof window.jQuery === "undefined" || typeof jQuery.fn.modal === "undefined") return;

    setTimeout(function () {
      jQuery("#joinLabModal").modal("show");
    }, 700);

    var checkbox = document.getElementById("dontShowAgain");
    if (checkbox) {
      checkbox.addEventListener("change", function () {
        if (checkbox.checked) localStorage.setItem(STORAGE_KEY, "1");
      });
    }
  });
})();
