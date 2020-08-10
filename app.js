'use strict'; //JavaScript を Strict モードで利用するための記述
const number = process.argv[2] || 0;  // number  という定数に、 process.argv[2]  (フォルシーなら０を）の値を代入
let sum = 0;　　　　　　　//1 から number までの数字までを順に足して合計し、最後に sum の値を出
for (let i = 1; i <= number; i++) {
  sum = sum + i; //0,1,3,6,10...
}
console.log(sum);