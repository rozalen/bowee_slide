



$(document).ready(function(){
contador=0;

function Box (title,sub_title,description,image1,image2,image3,color){
      this.title= title;
      this.sub_title = sub_title;
      this.description=description;
      this.image1 = image1;
      this.image2 = image2;
      this.image3 = image3;
      this.color = color;
      contador+=1;
$(".contenedor").append("<div class='diapositiva' style='background-color:rgba"+this.color+"'><div class='container'><div class='row'><div class='col-xs-12 col-sm-4 titulo'><h1> "+ this.title+ "</h1></div><div class='col-xs-12 col-sm-8 descripcion'><h2>"+this.sub_title+"</h2> </div> </div><div class='row'><div class='col-xs-12'> <div>  <h3>"+ this.description+"</h3></div></div></div><div class='row'><div class='cont_imgs'><div class='col-xs-12 col-sm-4'><img class='img-responsive'src='./img/"+this.image1+"'></img></div><div class='col-xs-12 col-sm-4'><img class='img-responsive'src='./img/"+this.image2+"'></img></div><div class='col-xs-12 col-sm-4'><img class='img-responsive'src='./img/"+this.image3+"'></img></div></div></div></div></div>")

    }
valencia = new Box ("Valencia","La ciudad del Turia","Valencia famosa por su fiesta las Fallas","valencia.jpeg","valencia1.jpg","newyork.jpg","(248, 148, 6,1)");
londres = new Box("Valencia","La ciudad del Turia","londres famosa por su fiesta las Fallas","valencia.jpeg","valencia1.jpg","newyork.jpg","(239, 72, 54,1)");




var width_cont=100*contador;

 $(".contenedor").css({"width":width_cont +"%"});

var width_diapo = 100 / contador;

 $(".diapositiva").css({"width":width_diapo +"%"});

width=0;
cuenta=0;
$("body","html").on("keyup",function(event){
//37 is left and 39 is right

if(event.keyCode==39){


console.log(cuenta);

  if(cuenta==$(".diapositiva").length-1){
//$(".container").animate({ "margin-left":width+ "%"});
//cuenta = 0;
  }else{
    width -=100;
cuenta++;
  $(".contenedor").animate({ "margin-left":width+ "%"});
  }

}else if(event.keyCode==37){
  console.log(cuenta);

  if(cuenta==$(".diapositiva").length-(contador)){

  }else{
    cuenta--;
    width +=100;

    $(".contenedor").animate({ "margin-left":width+ "%"});

  }

}


});


click=0;


   $( ".boton" ).click(function() {
    width-=100;
click+=1;

    if(click<contador){
$(".container").animate({ "margin-left":width+ "%"});

    }else{
$(".container").animate({ "margin-left":"0%"});
width=0;
click=0;
    };

    }

    );

});
