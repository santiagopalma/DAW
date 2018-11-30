var color =["#222f3e","#222f3e",
"#222f3e","#222f3e",
"#222f3e","#222f3e"];
var i=0;


$( "#box1" ).hover(
  function() {
    $( this ).append( $( "<span> ***</span>" ) );
  	$('#box1').css("background-color","#516197");
  	$('#box1').css("color","#ffff");
  }, function() {
    $( this ).find( "span:last" ).remove();
    $('#box1').css("background-color","#ffff");
    $('#box1').css("color","#222B7E");
  }
);


$( "#box2" ).hover(
  function() {
    $( this ).append( $( "<span> ***</span>" ) );
  	$('#box2').css("background-color","#516197");
  	$('#box2').css("color","#ffff");
  }, function() {
    $( this ).find( "span:last" ).remove();
    $('#box2').css("background-color","#ffff");
    $('#box2').css("color","#222B7E");
  }
);


$( "#box3" ).hover(
  function() {
    $( this ).append( $( "<span> ***</span>" ) );
  	$('#box3').css("background-color","#516197");
  	$('#box3').css("color","#ffff");
  }, function() {
    $( this ).find( "span:last" ).remove();
    $('#box3').css("background-color","#ffff");
    $('#box3').css("color","#222B7E");
  }
);


