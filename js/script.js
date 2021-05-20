var rawArray = document.getElementById("rawArray");
var array = document.getElementById("array");
var num = document.getElementById("num");

var arr;

document.getElementById("btnInsertArr").onclick = function () {
  arr = strToNumArr(rawArray.value);
  array.innerHTML = arr;
};

document.getElementById("handleBtn").onclick = function () {
  let _num = Number(num.value);


};
