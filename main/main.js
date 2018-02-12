// Generated by LiveScript 1.5.0
(function(){
  var balance, calc, rate, rateHistory, sign, newAddr, newAddrHide, encryptPrivateKey, total, ref$, out$ = typeof exports != 'undefined' && exports || this;
  balance = {
    ltc: require('./balance/balance-ltc.js'),
    btc: require('./balance/balance-btc.js'),
    eth: require('./balance/balance-eth/balance-eth.js')
  };
  calc = function(){
    return {
      ltc: require('./calc/calc.js')(bind$(balance, 'ltc')),
      btc: require('./calc/calc.js')(bind$(balance, 'btc')),
      eth: require('./calc/calc.js')(bind$(balance, 'eth'))
    };
  };
  rate = {
    ltc: require('./rate/rate.js')('LTC'),
    btc: require('./rate/rate.js')('BTC'),
    eth: require('./rate/rate.js')('ETH')
  };
  rateHistory = require('./rate/rate-history.js');
  sign = {
    eth: require('./sign/sign-eth.js'),
    btc: require('./sign/sign-btc.js'),
    ltc: require('./sign/sign-ltc.js')
  };
  newAddr = {
    eth: require('./new-addr/new-addr-eth.js'),
    btc: require('./new-addr/new-addr-btc.js'),
    ltc: require('./new-addr/new-addr-ltc.js')
  };
  newAddrHide = require('./new-addr-hide/new-addr-hide.js');
  encryptPrivateKey = require('./encrypt-private-key.js');
  total = require('./total/total.js')(calc);
  ref$ = out$;
  ref$.encryptPrivateKey = encryptPrivateKey;
  ref$.newAddr = newAddr;
  ref$.sign = sign;
  ref$.balance = balance;
  ref$.rate = rate;
  ref$.calc = calc;
  ref$.total = total;
  ref$.newAddrHide = newAddrHide;
  ref$.rateHistory = rateHistory;
  function bind$(obj, key, target){
    return function(){ return (target || obj)[key].apply(obj, arguments) };
  }
}).call(this);
