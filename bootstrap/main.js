$(document).ready(function() {
  var showContent = function() {
    var ex1 = $('.ex1');
    var content = ex1.find('.content');
    content.slideToggle(); // slideDown.
  };

  var showText = function() {
    var ex1 = $('.ex1');
    var content = ex1.find('span');
    content.slideToggle(); // slideDown.
  };

  $('.ex1').on('click', 'button', showContent);
//  $('.ex1').on('mouseenter', '.glyphicon', showContent);

  $('.ex1').on('mouseenter', '.content', showText);
  $('.ex1').on('mouseleave', '.content', showText);

});
