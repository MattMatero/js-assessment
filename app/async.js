exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
  	var promise = new Promise(function(resolve, reject){
  		resolve(value);
  	});
  	return promise;
  },

  manipulateRemoteData : function(url) {
  	var result = $.Deferred();

  	$.getJSON(url).then(function(data){
  		var people = data.people.map(function(p){return p.name;});
  		result.resolve(people.sort());
  	});

  	return result;
  }
};
