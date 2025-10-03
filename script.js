// var a = document.querySelector("#first");
// var b = document.querySelector("#second");
// let array1 = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
//   "",
// ];
// let array2 = [
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "0",
//   "@",
//   "#",
//   "*",
//   "<",
//   ">",
//   "(",
//   ")",
//   "{",
//   "}",
//   "[",
//   "]",
//   "+",
//   "-",
//   "/",
//   "%",
//   "$",
//   "^",
// ];
// var excahnge = [];
// //inner[0].innerText="hyeee";
// function codeTosimple(msgg, simple) {
//   for (let i = 0; i < msgg.length; i++) {
//     const index = array2.indexOf(msgg[i]);
//     if (index !== -1) {
//       excahnge[i] = array1[index];
//       simple.innerHTML += excahnge[i];
//     } else {
//       simple.innerHTML += msgg[i];
//     }
//   }
//   return simple.innerHTML;
// }
// b.addEventListener("click", function () {
//   // inner.innerHTML = '';
//   var inner = document.querySelector("#aftertext");
//   const msg = document.getElementsByTagName("textarea")[0].value;
//   const decryptedText = codeTosimple(msg, inner);
//   console.log(decryptedText);
// });

var a = document.querySelector("#first");
var b = document.querySelector("#second");
let array1 = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  " ",
];
let array2 = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "@",
  "#",
  "*",
  "<",
  ">",
  "(",
  ")",
  "{",
  "}",
  "[",
  "]",
  "+",
  "-",
  "/",
  "%",
  "$",
  "^",
];
var excahnge = [];
var excahngee = [];
//inner[0].innerText="hyeee";
function codeTosimple(msgg, simple) {
  for (let i = 0; i < msgg.length; i++) {
    const index = array2.indexOf(msgg[i]);
    if (index !== -1) {
      excahnge[i] = array1[index];
      simple.innerHTML += excahnge[i];
    } //else {
    //  simple.innerHTML += msgg[i];
    //}
  }
  return simple.innerHTML;
}
b.addEventListener("click", function () {
  // inner.innerHTML = '';
  var inner = document.querySelector("#aftertext");
  inner.innerHTML = "";
  var msg = document.getElementsByTagName("textarea")[0].value;
  const decryptedText = codeTosimple(msg, inner);
});
function simpleTocode(msgg, encrypt) {
  for (let i = 0; i < msgg.length; i++) {
    const index2 = array1.indexOf(msgg[i]);
    if (msgg[i] == " ") {
      excahngee[i] = "^";
      encrypt.innerHTML += excahngee[i];
    } else if (index2 !== -1) {
      excahngee[i] = array2[index2];
      encrypt.innerHTML += excahngee[i];
    }
  }
  return encrypt.innerHTML;
}
a.addEventListener("click", function enn() {
  var inner = document.querySelector("#aftertext");
  inner.innerHTML = "";
  var msg = document.getElementsByTagName("textarea")[0].value;
  const encryptedcode = simpleTocode(msg, inner);
});
