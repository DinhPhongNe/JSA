let n = 10; // thay đổi số n = 5 thành n = ... để in ra tam giác nha thầy em dùng prompt nó nuốt phần đáy tam giác em ròi=))
let string = "";

// vòng lặp
for (let i = 1; i <= n; i++) {
  // nhét khoảng trống thay cho dấu *
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // in *
  for (let k = 0; k < 2 * i - 1; k++) {
    if(i === 1 || i === n) {
      string += "*";
    }
    else {
      if(k === 0 || k === 2 * i - 2) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  string += "\n";
}
console.log(string);
