$(function() {

var Questions = ['What is the difference between a function and a function expression, why would you use one or the other', 'What is the DOM Style syntax in JS to apply a css style to an element', 'What gets hoisted in JS?', 'Tell me about document.addEventListener("DOMContentLoaded", function(event) { and window.onload']; 

function theAlerts() {

    for (var i=0; i < Questions.length; i++) {

      $( "#div"+i+" ul").html('<li>'+ Questions[i]+'</li>');
    }
}

$( "button" ).on( "click", theAlerts )

$('.container').on('click', function () {
    var Paragraph = $(this).attr('rel');
  $('#' + Paragraph).addClass('ptagActive');
  $('#' + Paragraph).removeClass('ptag');
  $('#' + Paragraph + 'b').hide();
});

});

// good job look up jquery .toggleclass
// grade A-
//  
