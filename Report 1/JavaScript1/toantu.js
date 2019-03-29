// Toán tử ++ --
var a = 3;
var b = 4;
var c = a++ - --b + ++a + b--;
// var c = 3 - --b + ++a + b--;     a = 4;
// var c = 3 - 3 + ++a + b--;       b = 3;
// var c = 3 - 3 + 5 + b--;         a = 5;
// var c = 3 - 3 + 5 + 3;           b=3;
// var c = 8
console.log(a);                     //a=5;      
console.log(b);                     //b=2;
console.log(c);    


// Toán tử gán
var a = 100;
a %= 50;    // a = a % 50;
// a = 0;
console.log(a);

// Toán tử so sánh
var rs1 = 5 > 6;
console.log(rs1);
var rs2 = 6 <= 6;
console.log(rs2);

// Toán tử logic
var result = false || false && false || true;
// var result = false && false || true;
// var result = false || true;
// var result = true;
console.log(result);
