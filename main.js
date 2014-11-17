$(document).ready(function() {
  contador = 0;

  function Box(title, sub_title, description, image1, image2, image3, color) {
      this.title = title;
      this.sub_title = sub_title;
      this.description = description;
      this.image1 = image1;
      this.image2 = image2;
      this.image3 = image3;
      this.color = color;
      contador += 1;
$(".contenedor").append("<div class='diapositiva' style='background-color:rgba" + this.color + "'><div class='container'><div class='row'> <div class='col-xs-12 col-md-4 titulo'><h1> " + this.title + "</h1></div> <div class='col-xs-12 col-md-8 descripcion'><h2>" + this.sub_title + "</h2> </div></div> <div class='row'><div class='col-xs-12'><div><h3>" + this.description + "</h3></div></div></div><div class='row'><div class='cont_imgs'><div class='col-xs-12 col-sm-4'><img class='img-responsive'src='./img/" + this.image1 + "'></img></div><div class='hidden-xs col-sm-4'><img class='img-responsive'src='./img/" + this.image2 + "'></img></div><div class='hidden-xs col-sm-4'><img class='img-responsive'src='./img/" + this.image3 + "'></img></div></div></div></div></div>");
    }
     valencia = new Box ("Valencia","La ciudad del Turia","Valencia famosa por su fiesta las Fallas","valencia.jpeg","valencia1.jpg","newyork.jpg","(248, 148, 6,1)");
valencia2 = new Box ("Valencia","La ciudad del Turia","Valencia famosa por su fiesta las Fallas","valencia.jpeg","valencia1.jpg","newyork.jpg","(100, 100, 200,1)");




  var width_cont = 100 * contador;

   $(".contenedor").css({"width":width_cont +"%"});


  var width_diapo = 100 / contador;

   $(".diapositiva").css({"width":width_diapo +"%"});

  });

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
body.get('pan').set({ direction: Hammer.DIRECTION_ALL });

// listen to events...


  /* Al arrastrar  hacia la izquierda*/
  body.on("panleft", function() {
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
  });

  /* Al arrastrar hacia la derecha*/

  body.on("panright", function() {
    console.log(cuenta);

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
    /* codigo ASCII 39 significa que hemos pulsado la flecha derecha*/
    if (event.keyCode == 39) {
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
      /* codigo ASCII 37 significa que hemos pulsado la flecha izquierda*/

    } else if (event.keyCode == 37) {
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
    }
  });


  click = 0;


  $(".boton").click(function() {
    width -= 100;
    click += 1;

    if (click < contador) {
      $(".container").animate({
        "margin-left": width + "%"
      });

    } else {
      $(".container").animate({
        "margin-left": "0%"
      });
      width = 0;
      click = 0;
    };
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
  });

  /* Muestra o no muestra las imagenes segun el tamaño de la pantalla*/
  /* Al hacer resize sobre la pantalla tambien mostrara o no mostrara las imagenes*/
  /*###############   Fin    ###############*/
