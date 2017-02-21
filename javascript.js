function(num1,num2){
 var val = [];
 var small = 0;
 // var one = 0;
 // var two = 0;
 if(num1 < num2){
   small = num1;
 }else{
   small = num2;
 }
 for(var i = 0; i <= small; i++){
   if(num1%i == num2%i){
   val.push(i);
 }
 }
 return val;
};
console.log(commondenominator(9,18));
