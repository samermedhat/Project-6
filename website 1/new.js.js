$(document).ready(function(){

 $('.carousel').carousel();   
 
    
    
    
$(".popular .ek").click(function(){
    
    $(".sem").removeClass("sam2");
    $(".sem").removeClass("sam3");
    $(".sem").addClass("sam");

    $(".slid").removeClass("slid2");
    $(".slid").removeClass("slid3");
    $(".slid").addClass("slid1");
    
    $(".new").removeClass("new2");
    $(".new").removeClass("new3");
    $(".new").addClass("new1");
    
    $(".blog").removeClass("blog2");
    $(".blog").removeClass("blog3");
    $(".blog").addClass("blog11");
    
    
    $(".popular .two").fadeOut();
    $(".popular .three").fadeOut(); 
    $(".popular .one").fadeIn();  
   });   
    
    
    
    
    
    
    
$(".popular .ek2").click(function(){
    
    $(".sem").removeClass("sam");
    $(".sem").removeClass("sam3");
    $(".sem").addClass("sam2");
    
    $(".slid").removeClass("slid1");
    $(".slid").removeClass("slid3");
    $(".slid").addClass("slid2");
    
    $(".new").removeClass("new1");
    $(".new").removeClass("new3");
    $(".new").addClass("new2");
    
    $(".blog").removeClass("blog1");
    $(".blog").removeClass("blog3");
    $(".blog").addClass("blog2");
    
    $(".popular .one").fadeOut();
    $(".popular .three").fadeOut(); 
    $(".popular .two").fadeIn();  
   });  
    
  
    
$(".popular .ek3").click(function(){
    
    
    $(".sem").removeClass("sam2");
    $(".sem").removeClass("sam");
    $(".sem").addClass("sam3");
    
    $(".slid").removeClass("slid2");
    $(".slid").removeClass("slid1");
    $(".slid").addClass("slid3");
    
    $(".new").removeClass("new2");
    $(".new").removeClass("new1");
    $(".new").addClass("new3");
    
    $(".blog").removeClass("blog2");
    $(".blog").removeClass("blog1");
    $(".blog").addClass("blog3");
    
    $(".popular .one").fadeOut();
    $(".popular .two").fadeOut(); 
    $(".popular .three").fadeIn();  
   });  
    
    
    
    
    
    
$(".on1 img").mouseenter(function(){
   $(".o1").fadeIn();
    $(".o1").animate({
       marginLeft:-60 
    },170);  
});    
 $(".on1").mouseleave(function(){
    $(".o1").animate({
       marginLeft:-80 
    },170);  
   $(".o1").fadeOut();
});  
    
$(".on2 img").mouseenter(function(){
   $(".o2").fadeIn();
    $(".o2").animate({
    marginLeft:-60 
    },170);  
});    
 $(".on2").mouseleave(function(){
     $(".o2").animate({
       marginLeft:-80 
    },170);  
   $(".o2").fadeOut();
 
});    
    
$(".on3 img").mouseenter(function(){
   $(".o3").fadeIn();
    $(".o3").animate({
       marginLeft:-60 
    },170);  
});    
 $(".on3").mouseleave(function(){
       $(".o3").animate({
       marginLeft:-80 
    },170);    
   $(".o3").fadeOut();

});   
    
$(".on4 img").mouseenter(function(){
   $(".o4").fadeIn();
    $(".o4").animate({
       marginLeft:-60 
    },170);  
});    
 $(".on4").mouseleave(function(){
    $(".o4").animate({
       marginLeft:-80 
    },170);  
   $(".o4").fadeOut(); 
});   
      
$(".tw1 img").mouseenter(function(){
   $(".t1").fadeIn();
    $(".t1").animate({
       marginLeft:-60 
    },170);  
});    
 $(".tw1").mouseleave(function(){
    $(".t1").animate({
       marginLeft:-80 
    },170);  
   $(".t1").fadeOut();
});  
    
       
$(".tw2 img").mouseenter(function(){
   $(".t2").fadeIn();
    $(".t2").animate({
    marginLeft:-60 
    },170);  
});    
 $(".tw2").mouseleave(function(){
     $(".t2").animate({
       marginLeft:-80 
    },170);  
   $(".t2").fadeOut();
 
});    
    
$(".tw3 img").mouseenter(function(){
   $(".t3").fadeIn();
    $(".t3").animate({
       marginLeft:-60 
    },170);  
});    
 $(".tw3").mouseleave(function(){
       $(".t3").animate({
       marginLeft:-80 
    },170);    
   $(".t3").fadeOut();

});   
    
$(".tw4 img").mouseenter(function(){
   $(".t4").fadeIn();
    $(".t4").animate({
       marginLeft:-60 
    },170);  
});    
 $(".tw4").mouseleave(function(){
    $(".t4").animate({
       marginLeft:-80 
    },170);  
   $(".t4").fadeOut(); 
});   
    

  $(".th1 img").mouseenter(function(){
   $(".h1").fadeIn();
    $(".h1").animate({
       marginLeft:-60 
    },170);  
});    
 $(".th1").mouseleave(function(){
    $(".h1").animate({
       marginLeft:-80 
    },170);  
   $(".h1").fadeOut();
});  
    
       
$(".th2 img").mouseenter(function(){
   $(".h2").fadeIn();
    $(".h2").animate({
    marginLeft:-60 
    },170);  
});    
 $(".th2").mouseleave(function(){
     $(".h2").animate({
       marginLeft:-80 
    },170);  
   $(".h2").fadeOut();
 
});    
    
    
$(".th3 img").mouseenter(function(){
   $(".h3").fadeIn();
    $(".h3").animate({
       marginLeft:-60 
    },170);  
});    
 $(".th3").mouseleave(function(){
       $(".h3").animate({
       marginLeft:-80 
    },170);    
   $(".h3").fadeOut();

});   
    
$(".th4 img").mouseenter(function(){
   $(".h4").fadeIn();
    $(".h4").animate({
       marginLeft:-60 
    },170);  
});    
 $(".th4").mouseleave(function(){
    $(".h4").animate({
       marginLeft:-80 
    },170);  
   $(".h4").fadeOut(); 
});   
      
    jssor_1_slider_init = function() {

            var jssor_1_options = {
              $AutoPlay: 1,
              $Idle: 0,
              $SlideDuration: 5000,
              $SlideEasing: $Jease$.$Linear,
              $PauseOnHover: 0,
              $SlideWidth: 160,
              $SlideSpacing: 50,
              $Cols: 7,
              $Align: 445
            };

            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
        };
 jssor_1_slider_init();   
    
    
       
    
    
    $(".blog .on img").mouseenter(function(){
   $(".blog .on .overlay").fadeIn();
    $(".blog .on a").fadeIn();
    $(".blog .on a").animate({
    left:75    
        
    });
});    
    $(".blog .on").mouseleave(function(){
    $(".blog .on a").animate({
    left:60       
    });  
    $(".blog .on a").fadeOut();   
   $(".blog .on .overlay").fadeOut();
});    
    
    
    $(".blog .tw img").mouseenter(function(){
   $(".blog .tw .overlay").fadeIn();
    $(".blog .tw a").fadeIn();
    $(".blog .tw a").animate({
    left:75    
        
    });
});    
    $(".blog .tw").mouseleave(function(){
    $(".blog .tw a").animate({
    left:60       
    });  
    $(".blog .tw a").fadeOut();   
   $(".blog .tw .overlay").fadeOut();
});    
 
       
   $(".blog .th img").mouseenter(function(){
   $(".blog .th .overlay").fadeIn();
    $(".blog .th a").fadeIn();
    $(".blog .th a").animate({
    left:75    
        
    });
});    
    $(".blog .th").mouseleave(function(){
    $(".blog .th a").animate({
    left:60       
    });  
    $(".blog .th a").fadeOut();   
   $(".blog .th .overlay").fadeOut();
});    
 
    
    $(".blog .for img").mouseenter(function(){
   $(".blog .for .overlay").fadeIn();
    $(".blog .for a").fadeIn();
    $(".blog .for a").animate({
    left:75    
        
    });
});   
    $(".blog .for").mouseleave(function(){
    $(".blog .for a").animate({
    left:60       
    });  
    $(".blog .for a").fadeOut();   
   $(".blog .for .overlay").fadeOut();
});    
   
    
    
    
});