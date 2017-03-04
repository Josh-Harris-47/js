setInterval(function(){
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  var time = d.toLocaleTimeString();
  console.log(time);
  document.getElementsByClassName('circle').innerText = time;
}, 1000);
