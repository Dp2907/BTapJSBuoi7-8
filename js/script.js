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
document.getElementById("btnInsertArr").onclick = function () {
  arr = strToNumArr(rawArray.value);
  array.innerHTML = arr;
};
// Dùng HashTable và Set để đếm số lần lặp lại của các phần tử trong mảng
function deleteOldHashTable(set) {
  set.forEach((element) => {
    hashTable.remove(element);
    set.delete(element);
  });
}
function createHashTable(arr) {
  if (arr === undefined) alert("Mang chua duoc tao");
  else
    arr.forEach((element) => {
      if (!set.has(element)) {
        set.add(element);
        hashTable.add(element, 1);
      } else hashTable.changeValue(element, hashTable.search(element) + 1);
    });
}

function countRepeatNum(set) {
  let result = "";
  set.forEach((element) => {
    var count = hashTable.search(element);
    if (count > 1) {
      result += " - " + element + " (" + count + " lần) ";
    }
  });
  if (result !== "") result = result.substring(3);
  return result;
}

function findMinOdd(arr) {
  let min;
  let i = 0;
  for (i = 0; i < arr.length; i++)
    if (arr[i] % 2 !== 0) {
      min = arr[i];
      break;
    }
  if (i === arr.length) return "Mảng không có số lẻ";
  arr.forEach((element) => {
    if (element % 2 !== 0 && element < min) min = element;
  });
  return min;
}

function calcSumArr(arr) {
  let result = 0;
  arr.forEach((element) => {
    result += element;
  });
  return result;
}

document.getElementById("handleBtn").onclick = function () {
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
