// code idea but does not work
// var clock = function(){
//   var hour = document.getElementById('hour');
//   hour.style.transform = "rotateZ(90deg)"
// }
// clock();

// clock angles
var timeAngles = function(){
  var now = new Date();
  var minutes = now.getMinutes();
  var hours = now.getHours();
  var sec = now.getSeconds();
  if(hours > 12){
    hours -= 12;
  } else if (hours == 0){
    hours = 12;
  };
  var minAngle = (minutes/60) * 360;
  var hrAngle = ((hours/12) * 360) + ((minutes/60) * (1/12) * 360);
  var secAngle = (sec/60) * 360;
  // return "hour angle :" + hrAngle + "deg, minute angle :"+minAngle+"deg";
  return {
    hour: hrAngle,
    minute: minAngle,
    seconds: secAngle
  }};

console.log(timeAngles());

setInterval(function clock(){
  var hour = document.querySelector("line");
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  min.setAttribute("transform-origin","50% 100%");
  hour.setAttribute("transform-origin","50% 100%");
  sec.setAttribute("transform-origin","50% 100%");
  hour.style.transform = 'rotate('+timeAngles().hour+'deg)';
  min.style.transform = 'rotate('+timeAngles().minute+'deg)';
  sec.style.transform = 'rotate('+timeAngles().seconds+'deg)';
},500);

// function returning volume of a cylinder
// var volume = function(d,l){
//   return (Math.PI*d*d*l)/4;
// };
// console.log(volume(10,20));

// function the returns pi in progressive specificity
// var pie = function(){
//   for(var i = 1; i < 23; i++)
//   console.log(Math.PI.toPrecision(i));
// };
// console.log(pie());

// powerball function
// it has a bug
// var powerball = function(){
//   var power = [];
//     for(var i = 1; i < 6; i++){
//       var num1 = Math.round(Math.random() * 69);
//       power.push(num1);
//     };
//     if(i == 6){
//       var num2 = Math.round(Math.random() * 26);
//       power.push(num2);
//     }
//   var looper = setInterval(function(){
//       var i = 1;
//       console.log("powerball #"+i+" is "+powerball().pow[i]);
//       // console.log("winning numbers "+power);
//       i++;
//     },2000);
// };

// morse code conversion app
// var code = function(string){
//  // string = string.split("");
//  // string = string.toLowerCase();
//  var alphabet = {
//    'a': '.-',    'b': '-...',  'c': '-.-.', 'd': '-..',
//    'e': '.',     'f': '..-.',  'g': '--.',  'h': '....',
//    'i': '..',    'j': '.---',  'k': '-.-',  'l': '.-..',
//    'm': '--',    'n': '-.',    'o': '---',  'p': '.--.',
//    'q': '--.-',  'r': '.-.',   's': '...',  't': '-',
//    'u': '..-',   'v': '...-',  'w': '.--',  'x': '-..-',
//    'y': '-.--',  'z': '--..',  ' ': '/',
//    '1': '.----', '2': '..---', '3': '...--', '4': '....-',
//    '5': '.....', '6': '-....', '7': '--...', '8': '---..',
//    '9': '----.', '0': '-----',
// }
//
//  for(var i = 0; i < string.length; i++){
//    var char = string.charAt(i);
//    temp = string.split(string.charAt(i)).join(alphabet[i]);
//    console.log(char);
//  };
//  console.log(temp);
// }
// console.log(code("this is a string"));

// closure function practice
// Joshua Harris [7:13 PM]
// var closure = function(){
//  var balance = 0;
//  return function(trn){
//    balance = balance + trn;
//    return balance;
//  }
// }
// var account = closure();
// console.log(account(20));
// console.log(account(-30));

var vanilla = function(){
  console.log('click');
  body = $('body');
  body.css('backgroundColor','yellow')
}
var colorChanger = function(){
  document.body.addEventListener('click',function(){
    var color = 'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')';
    console.log(color);
    document.body.style.backgroundColor = color;
  });
}
colorChanger();
