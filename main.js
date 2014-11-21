function Box(title, sub_title, description, image1, image2, image3, color) {
  this.title = title;
  this.sub_title = sub_title;
  this.description = description;
  this.image1 = image1;
  this.image2 = image2;
  this.image3 = image3;
  this.color = color;
  contador += 1;
  $(".contenedor").append("<div class='diapositiva' style='background-color:" + this.color + "'><div class='container'><div class='row'> <div class='col-xs-12 col-md-4 titulo'><h1> " + this.title + "</h1></div> <div class='col-xs-12 col-md-8 descripcion'><h2>" + this.sub_title + "</h2> </div></div> <div class='row'><div class='col-xs-12'><div><h3>" + this.description + "</h3></div></div></div><div class='row'><div class='cont_imgs'><div class='col-xs-12 col-sm-4 imagen1'><img class='img-responsive ' src='"+ this.image1+"'></img></div><div class='hidden-xs col-sm-4 imagen2'><img class='img-responsive'src='" + this.image2 + "'></img></div><div class='hidden-xs col-sm-4 imagen3'><img class='img-responsive'src='" + this.image3 + "'></img></div></div></div></div></div>");
}
$(document).ready(function() {
  contador = 0;
width = 0;
cuenta = 0;
  valencia2 = new Box("Valencia", "España", "Valencia famosa por su fiesta las Fallas", "http://sergiorozalen.tk/bowee/img/valencia1.jpg", "http://sergiorozalen.tk/bowee/img/valencia.jpeg", "http://sergiorozalen.tk/bowee/img/valencia3.jpg", "#9b59b6");
  newyork = new Box("NewYork", "Estados Unidos", "NY la ciudad de los artistas", "http://sergiorozalen.tk/bowee/img/newyork.jpg", "http://sergiorozalen.tk/bowee/img/newyork2.jpg", "http://sergiorozalen.tk/bowee/img/newyork3.jpeg", "#3498db");
  amsterdam = new Box("Amsterdam", "Holanda", "Amsterdam es famosa por sus Coffe Shops", "http://sergiorozalen.tk/bowee/img/amsterdam1.jpeg", "http://sergiorozalen.tk/bowee/img/amsterdam2.jpeg", "http://sergiorozalen.tk/bowee/img/amsterdam3.jpg", "#f39c12");
berlin = new Box("Berlin", "Alemanía", "Berlín famosa por haber estado dividida hasta la caida del muro", "http://sergiorozalen.tk/bowee/img/berlin.jpeg", "http://sergiorozalen.tk/bowee/img/berlin2.jpeg", "http://sergiorozalen.tk/bowee/img/berlin3.jpeg", "#27ae60");
londres = new Box("Londres", "Reino Unido", "Capital Financiera de Europa", "http://sergiorozalen.tk/bowee/img/london.jpg", "http://sergiorozalen.tk/bowee/img/london2.jpeg", "http://sergiorozalen.tk/bowee/img/londres.jpg", "#e74c3c");




  width_cont = 100 * contador;

  $(".contenedor").css({
    "width": width_cont + "%"
  });


  width_diapo = 100 / contador;

  $(".diapositiva").css({
    "width": width_diapo + "%"
  });



  /*  Script para el Formulario con Ajax*/
  function validarForm() {
    // Campos de texto
    if ($("#titulo").val() == "") {
      $("#titulo").focus().addClass("alert alert-danger");
      return false;
    }
    if ($("#subtitulo").val() == "") {
      $("#subtitulo").addClass("alert alert-danger");
      $("#subtitulo").focus();
      return false;
    }

    if ($("#descripcion").val() == "") {
      $("#descripcion").addClass("alert alert-danger");
      $("#descripcion").focus();
      return false;
    }

    return true;
  }
  $('.boton_add').on("click", function() {
    if (validarForm()) {
      cuenta=$(".diapositiva").length;
      nuevo = new Box($("#titulo").val(), $("#subtitulo").val(), $("#descripcion").val(), $("#input_imagen1").val(), $("#input_imagen2").val(), $("#input_imagen3").val(), $("#color_picker").val());
      width_cont = 100 * contador;

      $(".contenedor").css({
        "width": width_cont + "%"
      });


      width_diapo = 100 / contador;

      $(".diapositiva").css({
        "width": width_diapo + "%"
      });
width=-width_cont+100;
      $(".contenedor").animate({
        "margin-left": width+"%"
      });
      console.log(cuenta, width_cont);
    };

  });

  /* Cambios al validar*/
  $("#titulo").on("change", function() {
    $("#titulo").removeClass("alert alert-danger");

    $("#titulo").addClass("alert alert-success");
  });
  $("#subtitulo").on("change", function() {
    $("#subtitulo").removeClass("alert alert-danger");

    $("#subtitulo").addClass("alert alert-success");
  });
  $("#descripcion").on("change", function() {
    $("#descripcion").removeClass("alert alert-danger");

    $("#descripcion").addClass("alert alert-success");
  });


  /*  Script para el Formulario con Ajax*/





  /* Las siguientes funciones haran que bowee_slide sea compatible con pantallas tactiles
  y no sea necesario el  uso de las flechas para navegar por nuestro slide*/
  var myElement = document.getElementById('body');

  // create a simple instance
  // by default, it only adds horizontal recognizers
  var body = new Hammer(myElement);

  // let the pan gesture support all directions.
  // this will block the vertical scrolling on a touch-device while on the element
  body.get('swipe').set({
    direction: Hammer.DIRECTION_ALL,
  });

  // listen to events...


  /* Al arrastrar  hacia la izquierda*/
  body.on("swipeleft", function() {
    console.log(cuenta, width);


        if (cuenta == $(".diapositiva").length - 1) {
          /*  Estamos en la ultima diapositiva */

        } else {
          width -= 100;
          cuenta++;
          $(".contenedor").animate({
            "margin-left": width + "%"
          });
        }
  });

  /* Al arrastrar hacia la derecha*/

  body.on("swiperight", function() {

console.log(cuenta);
if (cuenta == $(".diapositiva").length - (contador)) {
  /*  Estamos en la primera diapositiva */
} else {
  cuenta--;
  width = width + 100;

  $(".contenedor").animate({
    "margin-left": width + "%"
  });
}
  });
  /* Al arrastrar hacia arriba escondemos el formulario*/
  body.on("swipeup", function() {
    $(".form").fadeOut();
    console.log("arriba");

  });
  /*Al arrastrar hacia bajo mostramos el formulario*/
  body.on("swipedown", function() {
    $(".form").fadeIn();
    console.log("abajo");
  });
  /* Las anteriores funciones haran que bowee_slide sea compatible con pantallas tactiles
  y no sea necesario el  uso de las flechas para navegar por nuestro slide*/

  /* La siguiente funcion haran que bowee_slide sea navegable con las flechas*/
  $("body", "html").on("keyup", function(event) {
    switch (event.keyCode) {
      /*38 arriba y 40 abajo*/
      /* codigo ASCII 39 significa que hemos pulsado la flecha derecha*/
      case 39:
        console.log(cuenta);

        if (cuenta == $(".diapositiva").length - 1) {
          /*  Estamos en la ultima diapositiva */

        } else {
          width -= 100;
          cuenta++;
          $(".contenedor").animate({
            "margin-left": width + "%"
          });
        }
        break;
      case 37:
        /* codigo ASCII 37 significa que hemos pulsado la flecha izquierda*/
        console.log(cuenta);
        if (cuenta == $(".diapositiva").length - (contador)) {
          /*  Estamos en la primera diapositiva */
        } else {
          cuenta--;
          width = width + 100;

          $(".contenedor").animate({
            "margin-left": width + "%"
          });
        }
        break;

      case 38:
        /* codigo ASCII 38 significa que hemos pulsado la flecha arriba*/
        $(".form").fadeOut();
        console.log("arriba");

        break;
      case 40:
        /* codigo ASCII 40 significa que hemos pulsado la flecha abajo*/
        $(".form").fadeIn();

        break;
    }



  });
});

/*###############   Inicio    ###############*/
/* Muestra o no muestra las imagenes segun el tamaño de la pantalla*/
/* Al hacer resize sobre la pantalla tambien mostrara o no mostrara las imagenes*/
if ($(window).width() < 768) {
  $(".imagen2").css("display", "none");
  $(".imagen3").css("display", "none");

}
$(window).on("resize", function() {
  if ($(window).width() < 768) {
    $(".imagen2").css("display", "none");
    $(".imagen3").css("display", "none");
  } else {
    $(".imagen2").css("display", "block ");
    $(".imagen3").css("display", "block");
  }
  /* Muestra o no muestra las imagenes segun el tamaño de la pantalla*/
  /* Al hacer resize sobre la pantalla tambien mostrara o no mostrara las imagenes*/
  /*###############   Fin    ###############*/


});
