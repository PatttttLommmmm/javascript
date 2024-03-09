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
    let answer = i**2;
    console.log(answer);
}
console.log('เมื่อมี continue ใน Loop');
// continue คำสั่งที่ใช้แค่ในลูป เมื่อเจอในลูป โปรแกรมจะข้ามลูปนั้นทันที โดยไม่ทำคสั่งด้านล่าง
for (let i = 1; i<=12; i++) {
    if(i%2 === 0){
        continue;
    }
    let answer = i**2;
    console.log(answer);
}
console.log('เมื่อมี break ใน Loop');
// break คำสั่งที่ใช้ได้แค่ในลูป เมื่อเจอในลูป โปรแกรมจะออกจากลูปนั้นทันที
for (let i = 1; i<=12; i++) {
    if(i%10 === 0){
        break;
    }
    let answer = i**2;
    console.log(answer);
}

console.log("--------------------------------------");
console.log('Function');
// function ชื่อฟังก์ชั่น (parameter1,...) {คำสั่งต่างๆ}
function getPyramidArea (length , width , height) {
    // การใช้ Parameter ถ้าไม่มีพารามิเตอร์ จะไม่สามาารถใส่ค่าอื่นได้ 
    // จะต้องใช้ค่าที่เรากรอกให้โปรแกรมของเราไปตลอด ดั่งด้านล่าง
    // let length = 2;
    // let width = 2;
    // let height = 3;
    let baseArea = length * width;
    let pyramidVolume = 1/3 * baseArea * height;
    // คืนค่าไปยัง pyramidVolume
    return pyramidVolume;
    // console.log('ปริมาตรรูปสามเหลี่ยม = ' + pyramidVolume);
}
// วิธีเรียกใช้คำสั่ง
let area1 = getPyramidArea(2 , 2 , 3);
let area2 = getPyramidArea(4 , 4 , 3);
console.log('area1 = ' + area1 + ' Area2 = ' + area2);
let area3 = area1 + area2;
console.log('area3 = ' + area3);
console.log("--------------------------------------");
// document คือตัวแทนเรียกของหน้า HTML
// ('id' ที่กำหนดในหน้า HTML)
let content2 = document.getElementById('content-2');
let textHtml = '<b>สวัสดีจ้า</b>';
textHtml += '<i> อิอิ </i>';
content2.innerHTML = textHtml;
console.log("--------------------------------------");
let discountButton = document.getElementById('discount-button');
let message = document.getElementById('message');

function showMessage(){
    message.innerHTML = 'หมดเวลาสนุกละสิ';
}

// addEventListener(เหตุการณ์ , คำสั่ง);
discountButton.addEventListener('click' , showMessage);
console.log("--------------------------------------");

let numberInput = document.getElementById('number-input');
let runButton = document.getElementById('run-button');
let output = document.getElementById('output');

function printMultiply() {
    let number = Number(numberInput.value);
    let outputHtml = '';

    if (number === 0 ){
        output.innerHTML = 'ไม่คำนวณให้โว้ยยยยยยยยย';
        return;
    }

    for(let i = 1; i <= 12; i++) {
        outputHtml += '<p>'
        outputHtml += number + ' x ' + i + ' = ' + (number * i);
        outputHtml += '</p>';
    }

    output.innerHTML = outputHtml;
}

runButton.addEventListener('click' , printMultiply);

console.log("--------------------------------------");
console.log('Arrow Function');

function saySomething1(){
    console.log('สวัสดีชาวโลก 1');
}

// => 
let saySomething2 = () => {
    console.log('สวัสดีชาวโลก 2');
}

console.log('Arrow Function');
saySomething1();
saySomething2();

let sayButton = document.getElementById('say-button');
let mes = document.getElementById('arrowmes');

sayButton.addEventListener('click' , () => {
    mes.innerHTML = 'หมดเวลาแล้วสิ';
});
console.log("--------------------------------------");