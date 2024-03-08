//คำสั่งใช้แสดงผล
console.log('คำสั่งใช้แสดงผล'); 
console.log('Phokao kabibara eiei');

console.log('--------------------------------------');
// ---------------------------------------------------

console.log('คำสั่งสร้างตัวแปร กำหนดค่าตัวแปร การแสดงผลค่าตัวแปร');
// คำสั่งสร้างตัวแปร
let x = 2;
// เมื่อต้องการเปลี่ยนค่า
// x = 10;
let y = 10;
// สร้างตัวแปรเก็บผลลัพธ์ของตัวแปรที่มีการ process การบวกตัวเลขกับตัวเลข
let z = x + y ;
console.log(z);
// หลักการสร้างตัวแปร 1.ตัวแปรเป็นภาษาอังกฤษ

// ชนิดข้อมูล
// ตัวเลข 
let myDataI = 5;
// String คำสั่งแปลงตัวเลขเป็นข้อความ
let myDataTI = String(12);
// ทศนิยม
let myDataF = 5.5;
// ข้อความ
let myDataT = 'ข้อมูลข้อความ';
let myDataP = 'ข้อความที่เพิ่มเข้ามา';
// Number คำสั่งแปลงข้อความเป็นตัวเลข
let myDataIT = Number('10');
// Boolean
let myDataTT = true;
let myDataFF = false;
console.log(myDataI,myDataF,myDataT,myDataTT,myDataFF);

// การบวกข้อความกับข้อความ
console.log(myDataT + ' + ' + myDataP);

// การบวกตัวเลขกับข้อความ
console.log(myDataI + myDataIT);

console.log(myDataTI + myDataI);

console.log('--------------------------------------');
// ---------------------------------------------------
console.log('Operator');
a1 = 3+2;
console.log('3+2 = ' + a1);
a2 = 3-2;
console.log('3-2 = ' + a2);
a3 = 3*2;
console.log('3*2 = ' + a3);
a4 = 3/2;
console.log('3/2 = ' + a4);
a5 = 3**2;
console.log('3**2 = ' + a5);
a6 = 3%2;
console.log('3%2 = ' + a6);

// การบวกค่าเพิ่ม การลบค่าเพิ่ม
a = 5;
console.log('a = ' + a);
a++;
console.log('a++ = ' + a);
a--;
console.log('a-- = ' + a);
a+=5;
console.log('a+=5 = ' + a);

// เครื่องหมายเชิงเปรียบเทียบ
let s = 7;
let d = 5;
console.log('s = ' + s + ' y = ' + y);

let f1 = s > d;
console.log('a1 = s > d = ' + f1);
let f2 = s >= d;
console.log('a1 = s >= d = ' + f2);

console.log('--------------------------------------');

let f3 = s < d;
console.log('a1 = s < d = ' + f3);
let f4 = s <= d;
console.log('a1 = s <= d = ' + f4);

console.log('--------------------------------------');

let f5 = s == d;
console.log('a1 = s == d = ' + f5);
let f6 = s != d;
console.log('a1 = s != d = ' + f6);

console.log('--------------------------------------');


let p = true;
let q = false;

let g1 = p && q;
let g2 = p || q;
let g3 = !p;

console.log('p = ' + p);
console.log('q = ' + q);
console.log('p&&q = ' + g1);
console.log('p||q = ' + g2);
console.log('!p = ' + g3);

console.log('--------------------------------------');

console.log('condition');
let score = 69;
// if (เงื่อนไข) {คำสั่งต่างๆ}
if (score >= 80) {
    console.log('Grade A');
}
// else if (เงื่อนไข) {คำสั่งต่างๆ}
else if (score >= 70) {
    console.log('Grade B');
}
else{
    console.log('score = ' + score + ' (Grade F) ');
}
console.log("--------------------------------------");

console.log('Loop');
// for (ค่าเริ่มต้น; เงื่อนไขที่ต้องการตรวจสอบ; การเปี่ยนแปลง) {คำสั่งต่างๆ}
for (let i = 1; i<=12; i++) {
    console.log(i);
}