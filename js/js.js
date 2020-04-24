/* exported Function */
/*switch pages*/
function show__homepage() {
  document.getElementById("recipes__layer").style.display = "none";
  document.getElementById("techniques__layer").style.display = "none";
  document.getElementById("materials__layer").style.display = "none";
  document.getElementById("start__layer").style.display = "none";
  document.getElementById("homepage__layer").style.display = "block";
}
function show__recipes() {
  document.getElementById("homepage__layer").style.display = "none";
  document.getElementById("techniques__layer").style.display = "none";
  document.getElementById("materials__layer").style.display = "none";
  document.getElementById("start__layer").style.display = "none";
  document.getElementById("recipes__layer").style.display = "block";
}
function show__techniques() {
  document.getElementById("homepage__layer").style.display = "none";
  document.getElementById("recipes__layer").style.display = "none";
  document.getElementById("materials__layer").style.display = "none";
  document.getElementById("start__layer").style.display = "none";
  document.getElementById("techniques__layer").style.display = "block";
}
function show__materials() {
  document.getElementById("homepage__layer").style.display = "none";
  document.getElementById("recipes__layer").style.display = "none";
  document.getElementById("techniques__layer").style.display = "none";
  document.getElementById("start__layer").style.display = "none";
  document.getElementById("materials__layer").style.display = "block";
}
function show__start() {
  document.getElementById("homepage__layer").style.display = "none";
  document.getElementById("recipes__layer").style.display = "none";
  document.getElementById("techniques__layer").style.display = "none";
  document.getElementById("materials__layer").style.display = "none";
  document.getElementById("start__layer").style.display = "block";
}
function openwin() {
window.open ("Cut_fish_pic.html", "height=100, width=400, toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
}
