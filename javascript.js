var closure = function(){
  var balance = 0;
  return function(trn){
    balance = balance + trn;
    return balance;
  }
}
var account = closure();
console.log(account(20));
console.log(account(-30));
