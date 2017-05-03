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


// color changing background color on click function


// var vanilla = function(){
//   console.log('click');
//   body = $('body');
//   body.css('backgroundColor','yellow')
// }

//random background color function
//currently configured for a dom button
// var colorChanger = function(){
//   document.body.getElementsByClassName('scamButton')[0].addEventListener('mouseenter',function(e){
//     var color = 'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')';
//     console.log(color);
//     document.body.getElementsByClassName('scamButton')[0].style.backgroundColor = color;
//   });
// }
// colorChanger();


//keydown event listener
// function move(){
//   document.body.addEventListener('keydown',function(e){
//     if(e.key == "w"){
//       console.log("up");
//     }
//   })
// }
// move();

//scam button template
// var scam = function(){
//   var button = document.body.getElementsByClassName('scamButton')[0];
//   button.addEventListener('mouseenter',function(e){
//   console.log(e);
//   console.log(e.fromElement.style)
//   console.log("SCAM");
//   button.style.position = "absolute";
//   button.style.top = Math.floor(Math.random()*100)+"vh";
//   button.style.left = Math.floor(Math.random()*100)+"vh";
//
//   });
// }
// scam();
//
// var pageInfo = {
//   url: "http://www.kidsplay.com/funkytown",
//   device: "desktop",
//   pageName: "Funky Town",
//   items: [
//     {
//       name: "DodgyBall",
//       idNum: "345890",
//       description: "this is a super dodgy ball",
//       color: "purple",
//       material: "rubber",
//       price: 34.29
//     },
//     {
//       name: "Moon Boots",
//       idNum: "789437/-9",
//       description: "walk on the moon",
//       color: "black",
//       material: "synthetic acrylic",
//       price: 109.24
//     },
//     {
//       name: "Stick",
//       idNum: "091283-stick",
//       description: "this is literally a stick",
//       color: "brown",
//       material: "wood",
//       price: 4.99
//     },
//     {
//       name: "Calipso Frizbee",
//       idNum: "923791",
//       description: "round disc for throwing",
//       color: "rainbow",
//       material: "plastic",
//       price: 34.29
//     }
//   ]
// };
//
// var converter = function(){
//   var target = pageInfo.items;
//   var fancyItems = [];
//
//   for(var i = 0; i < target.length; i++){
//     var accepted = [0,1,2,3,4,5,6,7,8,9];
//
//     for(var j = 0; j < target[i].idNum.length; j++){
//       var counter = 0;
//         for(var n = 0; n < accepted.length; n++){
//           if(target[i].idNum[j] == accepted[n]){
//             // console.log(target[i].idNum[j]);
//           }else {
//             counter += 1;
//               if(counter == 10){
//                 var newnumber = target[i].idNum;
//                 newnumber.slice(j,j+1);
//                 console.log(newnumber)
//
//               }
//           }
//         }
//       }
//
//     // console.log(target[i].idNum)
//
//     var newObject = {
//       idNum: target[i].idNum,
//       color: target[i].color,
//       price: target[i].price
//     }
//
//     fancyItems.push(newObject);
//   }
//   console.log(fancyItems);
// }
// converter();
//

//creat a function that takes in an array of numbers and returns a count of
//even and odd numbers
var oddoreven = function(){
  var list = [1,3,2,6,23,7,4,35,6,72,5,36,4,52,7,27,2,26,456,74,3456,2,34,5,3];
  var even = 0;
  var odd = 0;
  for(var i = 0; i < list.length; i++){
    if(list[i]%2 == 0){
      even += 1;
    }else{
      odd += 1;
    }
  }
  console.log("even numbers: "+even+" odd numbers: "+odd);
}
oddoreven();

var inputcheck = function(){

};
var number = document.getElementsByClassName('input')[0].value;
