function $(id) {
  return document.getElementById(id);
}

//Function bai 1
function repeatElements(str, timesOfRepeat) {
  let result = "";
  for (let i = 0; i < timesOfRepeat; i++) result += str;
  return result;
}

//Insert number Array from keyboard
function strToNumArr(str) {
  let rawArr = str.split(" ");
  let changedArr = new Array(0);

  // remove extra spaces
  for (let i = 0; i < rawArr.length; i++) {
    if (rawArr[i] === "") {
      rawArr.splice(i, 1);
      i--;
    } else rawArr[i] = Number(rawArr[i]);
  }

  //String Array to Number Array
  if (rawArr.length === 1) changedArr.push(Number(str));
  else {
    rawArr.forEach((element) => {
      changedArr.push(element);
    });
  }

  for (let i = 0; i < changedArr.length; i++)
    changedArr[i] = Number(changedArr[i]);
  return changedArr;
}

// Hash table
class HashTable {
  constructor() {
    this.buckets = new Array();
    this.size = 0;
  }

  hash(key) {
    return key.toString().length % this.size;
  }

  add(key, value) {
    let index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    this.buckets[index].push([key, value]);
    return index;
  }

  search(key) {
    let index = this.hash(key);

    if (!this.buckets[index]) return null;

    for (let bucket of this.buckets[index]) {
      // key
      if (bucket[0] === key) {
        // value
        return bucket[1];
      }
    }
  }

  changeValue(key, newValue) {
    let index = this.hash(key);

    if (!this.buckets[index]) return null;

    for (let bucket of this.buckets[index]) {
      // key
      if (bucket[0] === key) {
        bucket[1] = newValue;
        return bucket[1];
      }
    }
  }
  remove(key) {
    let index = this.hash(key);

    for (let i = 0; i < this.buckets[index].length; i++) {
      // Find the element in the chain
      if (this.buckets[index][i][0] === key) {
        this.buckets[index].splice(i, 1);
      }
    }
    return;
  }
}
//Function Bai 2
// Dùng HashTable và Set để đếm số lần lặp lại của các phần tử trong mảng
function deleteOldHashTable(set) {
  set.forEach((element) => {
    hashTable.remove(element);
    set.delete(element);
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
