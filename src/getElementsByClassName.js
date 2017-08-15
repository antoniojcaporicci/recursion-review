// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
 // create an empty array
  var classNameArray = [];

  var body = document.body;
  
  function classNameIterator(element) {
    if (element.classList && element.classList.contains(className)) {
      classNameArray.push(element);
    }  

    for (var i = 0; i < element.childNodes.length; i++) {
      //console.log(element);
      classNameIterator(element.childNodes[i]);
    }
  }
  
  classNameIterator(body);

  return classNameArray; 
 // return all of the elements matching the classname given
};


