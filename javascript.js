var counter = function(){
  var start = 1;
  var count = count;
  if(count == NaN){
    console.log(start);
    count = start;
  }else{
    console.log(count);
  }
  count++;
  alert("counter was clicked");
};
$(".box").click(counter);
