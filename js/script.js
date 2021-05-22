var rawArray = document.getElementById("rawArray");
var array = document.getElementById("array");
var num = document.getElementById("num");
var occurrencesOfNumber = document.getElementById("occurrencesOfNumber");
var minOdd = document.getElementById("minOdd");
var sumArr = document.getElementById("sumArr");
var occurrencesOfNumbers = document.getElementById("occurrencesOfNumbers");

// arr: mảng chứa tất cả các phần tử đã nhập
// set: từ arr bỏ đi các phần tử giống nhau
var arr;
var hashTable = new HashTable();
var set = new Set();

// Create Array
$("btnInsertArr").onclick = function () {
  arr = strToNumArr(rawArray.value);
  array.innerHTML = arr;
};

$("handleBtn").onclick = function () {
  let _num = Number(num.value);
  deleteOldHashTable(set);
  createHashTable(arr);
  countRepeatNum(set);
  if (hashTable.search(_num) === undefined) occurrencesOfNumber.innerHTML = 0;
  else occurrencesOfNumber.innerHTML = hashTable.search(_num);
  minOdd.innerHTML = findMinOdd(arr);
  sumArr.innerHTML = calcSumArr(arr);
  if (countRepeatNum(set) === "")
    occurrencesOfNumbers.innerHTML = "Không có phần tử nào lặp lại trong mảng";
  else occurrencesOfNumbers.innerHTML = countRepeatNum(set);
};

// Bai 1:
var productQuantity = $("productQuantity");
var content = $("content");

$("btnPrintProduct").onclick = function () {
  let str =
    '<div class="col-lg-4 col-md-6 product__item"><div class="item__top"><img src="https://c.pxhere.com/photos/21/e0/cafe_man_sitting_people_male_coffee_restaurant_lifestyle-1087238.jpg!d" srcset="https://c.pxhere.com/photos/21/e0/cafe_man_sitting_people_male_coffee_restaurant_lifestyle-1087238.jpg!d" class = "w-100"/></div><div class="item__bottom"><h4>Product Name</h4><p>Product price</p></div></div>';
  content.innerHTML = repeatElements(str, Number(productQuantity.value));
};
