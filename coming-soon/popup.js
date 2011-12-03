var popupStatus = 0;
var currentPopup = 0;

function showPopup(id){
    if(popupStatus==0){
        $("#popup_bg").css({
            "opacity": "0.3"
        });
        $("#popup_bg").fadeIn("slow");
		if(id==1) {
			$("#popup_lookback").fadeIn("slow");
			currentPopup = 1;
		}
		else if(id==2) {
			$("#popup_spons").fadeIn("slow");
			currentPopup = 2;
		}
		else if(id==3) {
			$("#popup_contact").fadeIn("slow");
			currentPopup = 3;
		}
        popupStatus = 1;
    }
}

function hidePopup(id){
    if(popupStatus==1){
        $("#popup_bg").fadeOut("slow");
		if(id==1)
        	$("#popup_lookback").fadeOut("slow");
		else if(id==2)
			$("#popup_spons").fadeOut("slow");
		else if(id==3)
			$("#popup_contact").fadeOut("slow");
		currentPopup = 0;
        popupStatus = 0;
    }
}

// jQuery Event Handlers
$(document).ready(function(){
    $("#look_back").click(function(){
        showPopup(1);
    });
	
	$("#spons").click(function(){
        showPopup(2);
    });

	$("#contact").click(function(){
        showPopup(3);
    });
                
    //X close event
	$(".popup_close").click(function(){
        if (currentPopup!=0)
        hidePopup(currentPopup);
    });

    //out click event
    $("#popup_bg").click(function(){
		if (currentPopup!=0)
        hidePopup(currentPopup);
    });

    //escape event
    $(document).keypress(function(e){
        if(e.keyCode==27 && popupStatus==1 && currentPopup!=0){
            hidePopup(currentPopup);
        }
    });
});
