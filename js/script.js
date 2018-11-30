
function addNew(titulo, contenido, imagen) {
   var title = $("<h2/>", {
      "class":"card-title",
      html: titulo
    })

    var p = $("<p/>",{
      "class": "card-text",
      html: contenido
    })

    var im =$("<img/>",{
      "src": imagen, "width":"700px", "height":"500px",
      
      html: "hola"
    })

    var div = $( "<div/>", {
      "class": "col-xs-12 col-sm12 col-md-4 col-lg-4 col-xl-4 text-center"
    });

    var div2 = $( "<div/>", {
      "class":"col-xs-12 col-sm12 col-md-8 col-lg-8 col-xl-8"
    });
    
    title.appendTo(div)
    p.appendTo(div)
    im.appendTo(div2)
    div.appendTo( "#noticias" );
    div2.appendTo( "#noticias" );
}



function loadNewsXml() {
  $.ajax({
      type: "GET",
      url: "../xml/informacion.xml",
      dataType: "xml",
      success: function(xml){
          $(xml).find('item').each(function(){
            var titulo = $(this).find('titulo').text();
            var imagen = $(this).find('image').text();
            var contenido = $(this).find('descripcion').text();
            
            addNew(titulo, contenido, imagen)

          });
      },
      error: function() {
        alert("Error al procesar el xml");
      }
  });
}

/* Filtrar las noticias de acuerdo al contenido ingresado en el input#buscador, ya sea por el texto en el título o en el contenido */

$(document).ready(function(){
  loadNewsXml();
  

  $("button").click(function(e){

    var texto = $('input#buscador').val();
    
    if(texto.length != 0) {
      
      var noticias = $('#noticias .card-body');
      $('#noticias .card-body').filter(function(index){
        
        $(this).show();
        
        var noticia = $(this).text()
        if(noticia.indexOf(texto) == -1) {
          $(this).hide()
        }

      });

    } else {
      $('#noticias .card-body').each(function(){
        $(this).show();
      });
    }
  return false;
    
    
  })
});


