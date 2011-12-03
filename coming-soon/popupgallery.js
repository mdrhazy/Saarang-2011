
var popupStatus = 0;
var currentPopup = 0;
var count;
var currentk;
var left=0;
var right=0;



 // FOR POP UP
    


function showPopup(id){
    if(popupStatus==0){
        
        $("#cboxNext").fadeIn();
        $("#cboxPrevious").fadeIn();
        $("#cboxClose").fadeIn();
        
        $("#popup_bg").css({
            "opacity": "0.3"
        });
        
         $("#popup_container").fadeIn();
         $("#popup_bg").fadeIn();
	 $("#popup").show();
	 
	 // when the DOM is ready
         $(function () {
         var img = new Image();
  
          // wrap our new image in jQuery, then:
          $(img)
          // once the image has loaded, execute this code
          .load(function () {
          // set the image hidden by default    
          $(this).hide();
    
          // with the holding div #loader, apply:
          $('#popup')
          // remove the loading class (so no background spinner), 
          .removeClass('loading')
          // then insert our image
          .append(this);
             
          // fade our image in to create a nice effect
          $(this).fadeIn();
          })
    
    // if there was an error loading the image, react accordingly
    .error(function () {
      // notify the user that the image could not be loaded
      })
    // *finally*, set the src attribute of the new image to our image
    .attr('src', 'images/popup/'+count+'/wtrmrk'+id+currentk+'.JPG').attr('style','border-radius: 15px 10px 15px 15px;');
 });
	
    //$("#popup").css('background-image','url(images/popup/'+count+'/wtrmrk'+id+l+'.JPG)').fadeIn();
	currentPopup = id;
	popupStatus = 1;
	 
    }
    
   
     
}



//Navigation
function previous(id,leftk){
        $('#popup').empty();
        $('#popup').addClass('loading');
        if (left==0){
        leftk=leftk-1;
        left=1;
        }
        if (leftk==0){
           if (id=="pr"){
           	leftk=20;
           	}
           else if (id=="mnd"){
           	leftk=14;
           	}
           else if (id=="snte"){
           	leftk=15;
           	}
           else if (id=="itau"){
           	leftk=14;
           	}
           else if (id=="lwa"){
           	leftk=18;
           	}
           else if (id=="wcs"){
           	leftk=16;
           	}
            }
           
        // when the DOM is ready
         if (left==1){
         
         $(function () {
         var img = new Image();
  
          // wrap our new image in jQuery, then:
          $(img)
          // once the image has loaded, execute this code
          .load(function () {
          // set the image hidden by default    
          $(this).hide();
    
          // with the holding div #loader, apply:
          $('#popup')
          // remove the loading class (so no background spinner), 
          .removeClass('loading')
          // then insert our image
          .append(this);
          // fade our image in to create a nice effect
          $(this).fadeIn();
          popupStatus = 1;
          left=0;
          
      })
    
    // if there was an error loading the image, react accordingly
    .error(function () {
      // notify the user that the image could not be loaded
    })
    
    // *finally*, set the src attribute of the new image to our image
    .attr('src', 'images/popup/'+count+'/wtrmrk'+id+leftk+'.JPG').attr('style','border-radius: 15px 10px 15px 15px;');
});
    }
    return (leftk);
    }
          
    
    function next(id,rightk){
        $('#popup').empty();
        $('#popup').addClass('loading');
        if (right==0){
        rightk=rightk+1;
        right=1;
        }
        
           if (id=="pr" && rightk>=21){
           	rightk=1;
           	}
           else if (id=="mnd" && rightk>=15){
           	rightk=1;
           	}
           else if (id=="snte" && rightk>=16){
           	rightk=1;
           	}
           else if (id=="itau" && rightk>=15){
           	rightk=1;
           	}
           else if (id=="lwa" && rightk>=19){
           	rightk=1;
           	}
           else if (id=="wcs" && rightk>=17){
           	rightk=1;
           	}
         // when the DOM is ready
         if (right==1){
         $(function () {
         var img = new Image();
  
          // wrap our new image in jQuery, then:
          $(img)
          // once the image has loaded, execute this code
          .load(function () {
          // set the image hidden by default    
          $(this).hide();
    
          // with the holding div #loader, apply:
          $('#popup')
          // remove the loading class (so no background spinner), 
          .removeClass('loading')
          // then insert our image
          .append(this);
           // fade our image in to create a nice effect
          $(this).fadeIn();
          popupStatus = 1;
          right=0;
      })
    
    // if there was an error loading the image, react accordingly
    .error(function () {
      // notify the user that the image could not be loaded

    })
    
    // *finally*, set the src attribute of the new image to our image
    .attr('src', 'images/popup/'+count+'/wtrmrk'+id+rightk+'.JPG').attr('style','border-radius: 15px 10px 15px 15px;');
});
}
    return (rightk);
    }

function hidePopup(){
    if(popupStatus==1){
        $('#popup').empty();
        $("#cboxNext").fadeOut();
        $("#cboxPrevious").fadeOut();
        $("#cboxClose").fadeOut();
        $("#popup_container").fadeOut();
        $("#popup_bg").fadeOut();
		$("#popup").fadeOut();
		 $('#popup').addClass('loading');
		currentPopup = 0;
        popupStatus = 0;
        currentk=0;
    }
}

// jQuery Event Handlers
$(document).ready(function(){
    $("#pr").click(function(){
        count=1;
        $("#popup").css('height','592');
        $("#popup_container").css('height','592');
        $("#popup_container").css('margin' , '-296px 0 0 -400px');
        currentk=currentImage[0];
        showPopup("pr");
    });
	
	$("#mnd").click(function(){
        count=2;
        $("#popup").css('height','617');
        $("#popup_container").css('height','617');
        $("#popup_container").css('margin' , '-309px 0 0 -400px');
        currentk=currentImage[1];
        showPopup("mnd");
    });

	$("#snte").click(function(){
        count=4;
        $("#popup").css('height','640');
        $("#popup_container").css('height','640');
        $("#popup_container").css('margin' , '-320px 0 0 -345px');
        currentk=currentImage[3];
        showPopup("snte");
    });
       
        $("#itau").click(function(){
        count=3;
        $("#popup").css('height','319');
        $("#popup_container").css('height','319');
        $("#popup_container").css('margin' , '-160px 0 0 -400px');
        currentk=currentImage[2];
        showPopup("itau");
    });
    
       $("#lwa").click(function(){
        count=6;
        $("#popup").css('height','440');
        $("#popup_container").css('height','440');
        $("#popup_container").css('margin' , '-220px 0 0 -400px');
        currentk=currentImage[5];
        showPopup("lwa");
    }); 
    
        $("#wcs").click(function(){
        
        count=5;
        $("#popup").css('height','492');
        $("#popup_container").css('height','492');
        $("#popup_container").css('margin' , '-246px 0 0 -400px');
        currentk=currentImage[4];
        showPopup("wcs");
    });  
    
   
    $("#cboxNext").click(function(){
    if (currentPopup != 0)
    currentk=next(currentPopup,currentk);
    });
    $("#cboxPrevious").click(function(){
    if (currentPopup != 0)
    currentk=previous(currentPopup,currentk);
    });
    
    
   
    //X close event-nt applicable here
	$("#close").click(function(){
	if (currentPopup!=0)
        hidePopup();
    });

    //out click event
    $("#popup_bg").click(function(){
	if (currentPopup!=0)
        hidePopup();
    });

    //escape event

    $(document).keypress(function(e){
        if(e.keyCode==27 && popupStatus==1 && currentPopup!=0){
            hidePopup();
        }
    });
});
