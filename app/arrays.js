exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {
 /*
  * I tried to use the standard library as little as possible. 
  * Mostly for functions that I felt it would be cheap to simply create a wrapper around a STL function.
  * For example: append vs array.prototype.push
  */
  indexOf : function(arr, item) {
    var index = -1;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        index = i;
        break;
      }
    }
    return index;
  },

  sum : function(arr) {
    return arr.reduce(function(a,b){return a+b});
  },

  remove : function(arr, item) {
    return arr.filter(function(x){return x !== item});
  },

  removeWithoutCopy : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        arr.splice(i,1);
        i =  i -1;
      }
    }

    return arr;
  },

  append : function(arr, item) {
    arr[arr.length] = item;
    return arr;
  },

  truncate : function(arr) {
    arr.splice(arr.length-1,1);
    return arr;
  },

  prepend : function(arr, item) {
    for(var i = arr.length; i >= 0; i--){
      if(i === 0){
        arr[i] = item;
        break;
      }

      arr[i] = arr[i-1];
    }
    return arr;
  },

  curtail : function(arr) {
    arr[0] = undefined;
    for(var i = 0; i < arr.length - 1; i++){
      if(arr[i+1]){
        arr[i] = arr[i+1];
      }
    }
    arr.pop();
    return arr;
  },

  concat : function(arr1, arr2) {
    Array.prototype.push.apply(arr1,arr2);
    return arr1;
  },

  insert : function(arr, item, index) {
    if(arr[index] === undefined){
      arr[index] = item;
    }else{
      for(var i = arr.length; i >= index; i--){
        if(i === index){
           arr[i] = item;
           break;
        }
        arr[i] = arr[i-1];
      }
    }
    return arr;
  },

  count : function(arr, item) {
    return arr.filter(function(x){return x === item;}).length;
  },

  duplicates : function(arr) {
    var unique = [];
    var dupes = [];
    arr.forEach(function(item){
      if(unique.indexOf(item) === -1){
        unique.push(item);
      }else if(dupes.indexOf(item) === -1){ // don't add dupes in the dupe list
        dupes.push(item);
      }
    });
    return dupes;
  },

  square : function(arr) {
    return arr.map(function(x){return x*x;});
  },

  findAllOccurrences : function(arr, target) {
    var indexes = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === target){
        indexes.push(i);
      }
    }
    return indexes;
  }
};
