// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
 // create an empty array
  var classNameArray = [];
  
  //Iterate through the DOM
  
  for (var i = 0; i < document.body.childNodes.length; i++) {
  //  console.log(document.childNodes[i]);
    if (document.childNodes[i] > 0) {
      getElementsByClassName(document.childNodes[i]);
    } else if (document.childNodes[i].classList) {
      console.log(document.childNodes[i].classList);
       
    }   
  }                            


  return classNameArray; 
 // return all of the elements matching the classname given
};


getElementsByClassName('cats');