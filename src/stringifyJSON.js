// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var stringifiedObject = '';
  
  if (typeof obj === 'number') {
    stringifiedObject += parseFloat(obj);  
  } else if (obj === null) {
    stringifiedObject += 'null';  
  } else if (obj === true) {
    stringifiedObject += 'true'; 
  } else if (obj === false) {
    stringifiedObject += 'false';
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj) && obj.length === 0) {
    return '[]';
  } else if (Array.isArray(obj)) {
    var newArr = [];
    obj.forEach(function(val) {
      console.log(val);
      newArr.push(stringifyJSON(val));
    });
    return '[' + newArr + ']';
  } else if (typeof obj === 'object') {
    stringifiedObject += '{';
    for (var key in obj) {
      if (typeof obj[key] !== 'function') {
        stringifiedObject += '"' + key + '"' + ':' + stringifyJSON(obj[key]) + ',';
      } else {
        return '{}';
      }  
    }
    stringifiedObject += '}';
  }

 

  if (stringifiedObject[stringifiedObject.length - 2] === ',') {
    stringifiedObject = stringifiedObject.substring(0, stringifiedObject.length - 2) + '}';
  }
   
  return stringifiedObject;
};
