$(function (){

$('#searchfield').keyup(function(event){
    if(event.keyCode == 13){
        $(".submitBtn").click();
    }
  });

  var $newBook = $('#newBook');
  var apiURL = 'https://www.googleapis.com/books/v1/volumes?q=';

  $(".submitBtn").click(function() {
  var searchstring = $('#searchfield');
  searchstring.focus();
  var typedInBox = searchstring.val();
  var apiURLFinal = apiURL + typedInBox;

   
  $.ajax({
    type: 'GET',
    url: apiURLFinal,
    success: function(data) {

      var payload = data.items;

      $newBook.html('');

      $.each(payload, function(i, book) {
        
        $newBook.append('<li>' + '<a href="' + book.saleInfo.buyLink +'" target="_blank">' + '<img src=' + book.volumeInfo.imageLinks.thumbnail + ' alt="car image">' + '</a>' + '<br>' + '<a href="' + book.saleInfo.buyLink +'" target="_blank">' + book.volumeInfo.title + '</a>' + '</br>' + '</li>');
        
      }); 
      
      
    },
    error: function(){
      alert('enter a valid book title');
    }

  });

  
  
});   
     
}); 
