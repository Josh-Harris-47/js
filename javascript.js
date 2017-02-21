// var counter = function(){
//   var start = 1;
//   var count = count;
//   if(count == NaN){
//     console.log(start);
//     count = start;
//   }else{
//     console.log(count);
//   }
//   count++;
//   alert("counter was clicked");
// };
// $(".box").click(counter);
///////////////////////////////////
var outer = function(){
  counter = 0;
  return function(){
    counter++;
    console.log(counter);
  };
};
var countUp = outer();
countUp();-->1
countUp();-->2
countUp();-->3
