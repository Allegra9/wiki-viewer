
$(document).ready(function(){
  //when search is clicked run code:
  $("#search").click(function(){
    //Gets search input 
  var searchTerm = $("#searchTerm").val();
//API url with searchTerm 
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";
//wikipedia API ajax call
 $.ajax({
   type: "GET",
   url: url,
   async: false,
   dataType: "json",
   success: function(data){
     //as seen per Postman analysis how the output comes in json:
     console.log(data[1][0]); //get heading
     console.log(data[2][0]); //get description
     console.log(data[3][0]); //get link
     
     //console.log(url);
     //prints: "https://en.wikipedia.org/w/api.php?action=opensearch&search=god&format=json&callback=?"
     $("#output").html(""); //this wipes out previous results - blank html
     
     for (var i=0; i< data[1].length; i++){
     
     // $("#output").prepend("<li><a href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
      $("#output").prepend("<div><div class=‘btn-primary’><a href="+data[3][i]+"><h3>"+data[1][i]+"</h3></a>"+"<p>"+data[2][i]+"</p></div></div>");
     }
     
     
   $("#searchTerm").val(""); //empties the search field for the next search

   },
   error: function(errorMessage){
    alert("Error");
  }
 });
    
  });
  $("#searchTerm").keypress(function(e){
    if (e.which==13){ //13 is enter key
      $("#search").click();
    };
  });
  
});
