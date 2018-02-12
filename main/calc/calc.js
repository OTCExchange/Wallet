// Generated by LiveScript 1.5.0
(function(){
  var big, p, iserror;
  big = require('big.js');
  p = require('prelude-ls');
  iserror = require('../iserror.js')('calc_module');
  module.exports = function(getAmount){
    var amounts, zero, state, total, interval, nextIndex, collect, start, stop, status, getAddress, addAddress, removeAddress, sum, calcTotal;
    amounts = [];
    zero = function(){
      return big(0);
    };
    state = {
      paused: true,
      current: 0,
      total: zero()
    };
    total = function(){
      return state.total;
    };
    interval = function(){
      switch (false) {
      case !(amounts.length > 100):
        return 1000;
      case !(amounts.length < 10):
        return 5000;
      default:
        return 3000;
      }
    };
    nextIndex = function(){
      var maxIndex;
      maxIndex = amounts.length - 1;
      return state.current = (function(){
        switch (false) {
        case !(state.current >= maxIndex):
          return 0;
        default:
          return state.current + 1;
        }
      }());
    };
    collect = function(){
      var item;
      if (amounts.length === 0) {
        return;
      }
      if (state.paused) {
        return;
      }
      item = amounts[state.current];
      return getAmount(item[0], function(err, amount){
        iserror(err);
        if (amount != null) {
          item[1] = amount;
        }
        nextIndex();
        calcTotal();
        setTimeout(collect, interval());
      });
    };
    start = function(){
      state.paused = false;
      return collect();
    };
    stop = function(){
      return state.paused = true;
    };
    status = function(){
      if (state.paused) {
        return 'paused';
      } else {
        return 'running';
      }
    };
    getAddress = function(address){
      var this$ = this;
      return p.find(function(it){
        return it[0] === address;
      })(
      amounts);
    };
    addAddress = function(address){
      if (getAddress(address) != null) {
        return;
      }
      return amounts.push([address, zero()]);
    };
    removeAddress = function(address){
      var item, index;
      item = getAddress(address);
      if (item == null) {
        return;
      }
      index = amounts.indexOf(item);
      if (index > -1) {
        return amounts.splice(index, 1);
      }
    };
    sum = function(first, second){
      return first.plus(second);
    };
    calcTotal = function(){
      var this$ = this;
      return state.total = p.foldl(sum, zero())(
      p.filter(function(it){
        return it != null;
      })(
      p.map(function(it){
        return it[1];
      })(
      amounts)));
    };
    return {
      amounts: amounts,
      start: start,
      stop: stop,
      status: status,
      addAddress: addAddress,
      removeAddress: removeAddress,
      total: total
    };
  };
}).call(this);