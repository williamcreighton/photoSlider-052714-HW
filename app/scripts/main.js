'use strict';

// $(function(){
//     $('.fadein img:gt(0)').hide();
//     setInterval(function(){
//       $('.fadein :first-child').fadeOut()
//          .next('img').fadeIn()
//          .end().appendTo('.fadein');}, 
//       3000);
// });

var imageArray = [
	'u', 
	'/images/five-stages-inebriation-01.jpg', 
	'/images/five-stages-inebriation-02.jpg', 
	'/images/five-stages-inebriation-03.jpg', 
	'/images/five-stages-inebriation-04.jpg', 
	'/images/five-stages-inebriation-05.jpg'
]

var imageArray = list[
	'u',
	'/images/five-stages-inebriation-01.jpg', 
	'/images/five-stages-inebriation-02.jpg', 
	'/images/five-stages-inebriation-03.jpg', 
	'/images/five-stages-inebriation-04.jpg', 
	'/images/five-stages-inebriation-05.jpg'
]

var imageArray = [
	'/images/five-stages-inebriation-01.jpg', 
	'/images/five-stages-inebriation-02.jpg', 
	'/images/five-stages-inebriation-03.jpg', 
	'/images/five-stages-inebriation-04.jpg', 
	'/images/five-stages-inebriation-05.jpg'
]




function list(type) {
  var result = "<" + type + "l><li>";
  var args = Array.prototype.slice.call(arguments, 1);
  result += args.join("</li><li>");
  result += "</li></" + type + "l>"; // end list

  return result;
}