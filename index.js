function showSidebarfuntion() {
  var x = document.getElementsByClassName("sidebar")[0];
  x.style.display = "block";
  x.classList.add("sidebar-small-screen");
  var y = document.getElementsByClassName("hamburger-container")[0];
  y.style.display = "none";
  var z = document.getElementsByClassName("cross-container")[0];
  z.style.display = "block";
}
function crossHandler() {
  var x = document.getElementsByClassName("sidebar")[0];
  x.style.display = "none";
  x.classList.add("sidebar-small-screen");
  var y = document.getElementsByClassName("hamburger-container")[0];
  y.style.display = "block";
  var z = document.getElementsByClassName("cross-container")[0];
  z.style.display = "none";
}
