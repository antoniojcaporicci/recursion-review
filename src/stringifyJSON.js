// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var stringifiedObject = '';
  
  if (typeof obj === 'number') {
    stringifiedObject += parseInt(obj);  
  } else if (obj === null) {
    stringifiedObject += 'null';  
  } else if (obj === true) {
    stringifiedObject += 'true'; 
  } else if (obj === false) {
    stringifiedObject += 'false';
  } else if (typeof obj === 'string') {
      
}
  
  return stringifiedObject;
};
