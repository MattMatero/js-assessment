exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null,arr);
  },

  speak : function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction : function(str) {
    return function(place){
      return str +', '+place;
    }
  },

  makeClosures : function(arr, fn) {
    var closures = [];

    var func = function(val){
      return function(){return fn(val);}
    };

    for(var i = 0; i < arr.length; i++){
      closures.push(func(arr[i]));
    }

    return closures;
  },

  partial : function(fn, str1, str2) {
    return function(str3){
      return fn.call(null,str1,str2,str3);
    }
  },

  useArguments : function() {
    return [].reduce.call(arguments,function(a,b){return a+b;});
  },

  callIt : function(fn) {
    var arguments = [].slice.call(arguments,1,arguments.length);
    fn.apply(null,arguments);
  },

  partialUsingArguments : function(fn) {
    var args = Array.prototype.slice.call(arguments,1,arguments.length);
    return function(){
      var innerArgs = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, innerArgs);
    };
  },

  curryIt : function(fn) {
    function applyFn(fn,args){
      return fn.apply(null,args);
    }

    function getArgs(args,count){
      return function(current){
        args.push(current);

        var done = args.length === count;

        if(done){
          return applyFn(fn,args);
        }else{
          return getArgs(args,count);
        }
      };
    }

    return getArgs([],fn.length);
  }
};
