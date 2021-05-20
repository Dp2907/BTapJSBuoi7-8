function strToNumArr(str) {
  let rawArr = str.split(" ");
  let changedArr = new Array(0);

  // xóa các phần tử do khoảng trống thừa tạo ra
  for (let i = 0; i < rawArr.length; i++) {
    if (rawArr[i] === "") {
      rawArr.splice(i, 1);
      i--;
    } else rawArr[i] = Number(rawArr[i]);
  }

  if (rawArr.length === 1) changedArr.push(Number(str));
  else {
    rawArr.forEach((element) => {
      changedArr.push(element);
    });
  }

  //đổi kiểu dữ liệu trong mảng str=>number
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

  // Insert data
  add(key, value) {
    let index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    this.buckets[index].push([key, value]);
    return index;
  }

  // Search data
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
