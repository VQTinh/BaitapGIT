//global
var age = 18;

/**
 * Function (hàm)
 *  - Hàm không có tham số
 *  - Hàm có tham số
 *  - Hàm không có giá trị trả về
 *  - Hàm có giá trị trả về (return)
 */

//khai báo hàm
// function xuatThongTin() {
//   //thân hàm
//   //variable scope local
//   var user = "Cybersoft";
//   console.log("Hello " + user);
// }

//gọi hàm
// xuatThongTin();

function xuatThongTin(a) {
  //thân hàm
  //variable scope local
  var user = a;
  console.log("Hello " + user);
}

xuatThongTin("Hieu");

function tinhTong(a, b) {
  var num_1 = a;
  var num_2 = b;

  var tong = num_1 + num_2;

  return tong; //trả về giá trị
}

var sum = tinhTong(10, 5);

console.log(sum * 2);

/**
 * Literal
 */
var demoFncLiteral = function () {
  console.log("Hello");
};

demoFncLiteral();

/**
 * DOM
 */

function demoClick() {
  var user = document.getElementById("txtUser").value;
  console.log(user);
}

/**
 * Tinh tong
 */
function tinhTong2So() {
  //Đầu vào: lấy thông tin từ user
  var soThu1 = document.getElementById("soThu1").value * 1;
  var soThu2 = document.getElementById("soThu2").value * 1;

  //Xu ly
  //convert string => number
  //   soThu1 = parseInt(soThu1);
  //   soThu2 = parseInt(soThu2);

  var tong = tinhTong(soThu1, soThu2);

  var ketQua = "Tổng 2 số là: " + tong;

  //Dau ra
  document.getElementById("divInfo").innerHTML = ketQua;

  //style cho the div#divInfo - inline
  //   document.getElementById("divInfo").style.backgroundColor = "red";
  //   document.getElementById("divInfo").style.color = "white";
  //   document.getElementById("divInfo").style.textAlign = "center";
  //   document.getElementById("divInfo").style.fontSize = "30px";

  //style cho the div#divInfo - className
  //   document.getElementById("divInfo").className = "demo info";

  //style cho the div#divInfo - classList
  document.getElementById("divInfo").classList.add("info");
}

/**
 * Kiem tra so chan/le
 */
function kiemTraSo() {
  //Dau vao
  var number = document.getElementById("number").value * 1;
  var content = "";

  //Xu ly
  if (number % 2 === 0) {
    //chan
    content = "So: " + number + " la so chan";
  } else {
    //le
    content = "So: " + number + " la so le";
  }

  //Dau ra
  document.getElementById("infoCheckNumber").innerHTML = content;
}

// sắp xếp 3 số
function sapxep() {
  var st1 = document.getElementById("st1").value * 1;
  var st2 = document.getElementById("st2").value * 1;
  var st3 = document.getElementById("st3").value * 1;
  var ketqua = "";
  if (st1 < st2 && st1 < st3) {
    if (st2 < st3) {
      ketqua = st1 + ", " + st2 + ", " + st3;
    } else {
      ketqua = st1 + ", " + st3 + ", " + st2;
    }
  } else if (st2 < st1 && st2 < st3) {
    if (st1 < st3) {
      ketqua = st2 + ", " + st1 + ", " + st3;
    } else {
      ketqua = st2 + ", " + st3 + ", " + st1;
    }
  } else if (st3 < st1 && st3 < st2) {
    if (st1 < st2) {
      ketqua = st3 + ", " + st1 + ", " + st2;
    } else {
      ketqua = st3 + ", " + st2 + ", " + st1;
    }
  }

  document.getElementById("ketqua").innerHTML = ketqua;
}

function loichao() {
  var b = document.getElementById("select").value;
  var hi = "";
  if (b == "B") {
    hi = "xin chào Bố";
  } else if (b == "M") {
    hi = "xin chào Mẹ";
  } else if (b == "A") {
    hi = "xin chào Anh trai";
  } else if (b == "E") {
    hi = "xin chào Em gái";
  }

  document.getElementById("resultofop").innerHTML = hi;
}

function dem() {
  var c = document.getElementById("so1").value * 1;
  var l = document.getElementById("so2").value * 1;
  var m = document.getElementById("so3").value * 1;
  var tc = 0;
  var tl = 0;
  h = "";
  if (c % 2 === 0) {
    tc++;
  } else {
    tl++;
  }
  if (l % 2 === 0) {
    tc++;
  } else {
    tl++;
  }
  if (m % 2 === 0) {
    tc++;
  } else {
    tl++;
  }
  h = "co " + tc + " so chan " + "co " + tl + " so le";

  document.getElementById("resultofdem").innerHTML = h;
}

function xd() {
  var c1 = document.getElementById("c1").value * 1;
  var c2 = document.getElementById("c2").value * 1;
  var c3 = document.getElementById("c3").value * 1;
  var tg = "";
  if (c1 + c2 > c3 && c1 + c3 > c2 && c2 + c3 > c1) {
    if (c1 == c2 && c1 == c3) {
      tg = "tam giác đều";
    } else if (c1 == c2 || c2 == c3 || c1 == c3) {
      tg = "tam giác cân";
    } else if (
      c1 ^ (2 == c2) ^ (2 + c3) ^ 2 ||
      c2 ^ (2 == c1) ^ (2 + c3) ^ 2 ||
      c3 ^ (2 == c1) ^ (2 + c2) ^ 2
    ) {
      tg = "tam giác vuông";
    } else {
      tg = "tam giác khác";
    }
  }
  document.getElementById("tamgiac").innerHTML = tg;
}
// Tìm ngày tháng năm

function tang() {
  var t = new Date(document.getElementById("date").value);
  var nm = t.getDate() + 1;
  t.setDate(nm);
  console.log(t);
  document.getElementById("ngay").innerHTML = t;
}
function giam() {
  var t = new Date(document.getElementById("date").value);
  var nm = t.getDate() - 1;
  t.setDate(nm);
  console.log(t);
  document.getElementById("ngay").innerHTML = t;
}
// cho bíet tháng có bao nhiêu ngày
function results() {
  var t1 = document.getElementById("t1").value * 1;
  var n1 = document.getElementById("n1").value * 1;
  var kqt;
  if (t1==1 || t1==3 || t1==5 || t1==7 || t1==8 || t1==10 || t1==12 ) {
    kqt = "tháng có 31 ngày";
  } else if (t1 === 4 || t1=== 6 || t1=== 9|| t1=== 11) {
    kqt = "tháng có 30 ngày";
  } else if (t1 === 2) {
    if ((n1 % 4 === 0) & (n1 % 100 === 1)) {
      kqt = "tháng có 29 ngày";
    } else {
      kqt = "tháng có 28 ngày";
    }
  }
  document.getElementById("kqt").innerHTML = kqt;
}

// đọc số 
function k(){
  var k = document.getElementById("k").value*1;
  var hangt =Math.floor(k/100);
  var hangc = Math.floor(k%100/10);
  var hangd =k%100%10
  var goi;
  if(k>99){

  }else{
    alert("nhâp số có 3 chữ số")
    return;
  }
  if(hangc===0){
    goi = hangt + "trăm" + "lẻ" + hangd
  }else{
    goi = hangt + "trăm" + hangc + "mươi" + hangd
  }
  document.getElementById("dk").innerHTML = goi;
}

// sinh viên xa trường
function d(){
  var sv1 = document.getElementById("sv1").value*1;
  var x1 = document.getElementById("x1").value*1;
  var y1= document.getElementById("y1").value*1;
  var sv2 = document.getElementById("sv2").value*1;
  var x2 = document.getElementById("x2").value*1;
  var y2 = document.getElementById("y2").value*1;
  var sv3 = document.getElementById("sv3").value*1;
  var x3 = document.getElementById("x3").value*1;
  var y3 = document.getElementById("y3").value*1;
  var x4 = document.getElementById("x4").value*1;
  var y4 = document.getElementById("y4").value*1;
  var ket;
  var d1 = Math.sqrt((x4-x1)^2 + (y4 - y1)^2);
  var d2 = Math.sqrt((x4-x2)^2 + (y4 - y2)^2);
  var d3 = Math.sqrt((x4-x3)^2 + (y4 - y3)^2);
  if (d1>d2 && d1>d3){
    ket = sv1 + "xa trường nhất";
  }else if(d2>d1 &&d2>d3){
    ket = sv2 + "xa trường nhất";

  }else{
    ket= sv3 + "xa trường nhất";
  }
  document.getElementById("ai").innerHTML = ket;
}
