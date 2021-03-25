function c(val) {
  document.getElementById("ro").value = val;
}
function v(val) {
  document.getElementById("ro").value += val;
}
function b() {
  var div=document.getElementById("ro");
  div.value=div.value.substring(0,div.value.length-1);
}
function t() {
  c(-1*document.getElementById("ro").value)
}
function e() {
  try {
    c(eval(document.getElementById("ro").value))
  } catch (e) {
    c('Error')
  }
}
