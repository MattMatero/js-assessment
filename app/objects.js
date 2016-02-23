exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
  	return fn.apply(obj);
  },

  alterObjects : function(constructor, greeting) {
  	constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
  	var props = [];
  	for(var prop in obj){
  		if(obj.hasOwnProperty(prop)){
  			props.push(prop + ': ' + obj[prop]);
  		}
  	}
  	return props;
  }
};
