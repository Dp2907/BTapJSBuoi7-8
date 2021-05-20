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


class HashTable{

}