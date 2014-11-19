function Box(title, sub_title, description, image1, image2, image3, color) {
  this.title = title;
  this.sub_title = sub_title;
  this.description = description;
  this.image1 = image1;
  this.image2 = image2;
  this.image3 = image3;
  this.color = color;
  contador += 1;
  $(".contenedor").append("<div class='diapositiva' style='background-color:" + this.color + "'><div class='container'><div class='row'> <div class='col-xs-12 col-md-4 titulo'><h1> " + this.title + "</h1></div> <div class='col-xs-12 col-md-8 descripcion'><h2>" + this.sub_title + "</h2> </div></div> <div class='row'><div class='col-xs-12'><div><h3>" + this.description + "</h3></div></div></div><div class='row'><div class='cont_imgs'><div class='col-xs-12 col-sm-4'><img class='img-responsive'src='./img/" + this.image1 + "'></img></div><div class='hidden-xs col-sm-4'><img class='img-responsive'src='./img/" + this.image2 + "'></img></div><div class='hidden-xs col-sm-4'><img class='img-responsive'src='./img/" + this.image3 + "'></img></div></div></div></div></div>");
}
$(document).ready(function() {
  contador = 0;


  valencia = new Box("Valencia", "La ciudad del Turia", "Valencia famosa por su fiesta las Fallas", "valencia.jpeg", "valencia1.jpg", "newyork.jpg", "#BBB");
  valencia2 = new Box("Valencia", "La ciudad del Turia", "Valencia famosa por su fiesta las Fallas", "valencia.jpeg", "valencia1.jpg", "newyork.jpg", "#CCC");
  valencia23 = new Box("Valencia", "La ciudad del Turia", "Valencia famosa por su fiesta las Fallas", "valencia.jpeg", "valencia1.jpg", "newyork.jpg", "#CCC");
valencia42 = new Box("Valencia", "La ciudad del Turia", "Valencia famosa por su fiesta las Fallas", "valencia.jpeg", "valencia1.jpg", "newyork.jpg", "#CCC");

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
      nuevo = new Box($("#titulo").val(), $("#subtitulo").val(), $("#descripcion").val(), "valencia.jpeg", "berlin.jpg", "newyork.jpg",  $("#color_picker").val());
      width_cont = 100 * contador;

      $(".contenedor").css({
        "width": width_cont + "%"
      });


      width_diapo = 100 / contador;

      $(".diapositiva").css({
        "width": width_diapo + "%"
      });
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



width = 0;
cuenta = 0;

/* Las siguientes funciones haran que bowee_slide sea compatible con pantallas tactiles
y no sea necesario el  uso de las flechas para navegar por nuestro slide*/
var myElement = document.getElementById('body');

// create a simple instance
// by default, it only adds horizontal recognizers
var body = new Hammer(myElement);

// let the pan gesture support all directions.
// this will block the vertical scrolling on a touch-device while on the element
body.get('pan').set({
  direction: Hammer.DIRECTION_ALL
});

// listen to events...


/* Al arrastrar  hacia la izquierda*/
body.on("panleft", function() {
  console.log(cuenta,width);

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

body.on("panright", function() {
  console.log(cuenta,width);

  if (cuenta == $(".diapositiva").length - (contador)) {
    /*  Estamos en la Primera diapositiva */
  } else {
    cuenta--;
    width += 100;

    $(".contenedor").animate({
      "margin-left": width + "%"
    });

  }
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
        width += 100;

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
