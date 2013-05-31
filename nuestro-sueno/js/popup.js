/***************************/
//@Author: Adrian "yEnS" Mato Gondelle
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

//SETTING UP OUR POPUP
//0 means disabled; 1 means enabled;
var popupStatus = 0;

//loading popup with jQuery magic!
function loadPopup1(){
	//loads popup only if it is disabled
	if(popupStatus==0){
		$("#backgroundPopup1").css({
			"opacity": "0.9"
		});
		$("#backgroundPopup1").fadeIn("slow");
		$("#popupContact1").fadeIn("slow");
		popupStatus = 1;
	}
}
function loadPopup2(){
	//loads popup only if it is disabled
	if(popupStatus==0){
		$("#backgroundPopup2").css({
			"opacity": "0.9"
		});
		$("#backgroundPopup2").fadeIn("slow");
		$("#popupContact2").fadeIn("slow");
		popupStatus = 1;
	}
}
function loadPopup3(){
	//loads popup only if it is disabled
	if(popupStatus==0){
		$("#backgroundPopup3").css({
			"opacity": "0.9"
		});
		$("#backgroundPopup3").fadeIn("slow");
		$("#popupContact3").fadeIn("slow");
		popupStatus = 1;
	}
}
//disabling popup with jQuery magic!
function disablePopup(){
	//disables popup only if it is enabled
	if(popupStatus==1){
		$("#backgroundPopup1").fadeOut("slow");
		$("#popupContact1").fadeOut("slow");
		$("#backgroundPopup2").fadeOut("slow");
		$("#popupContact2").fadeOut("slow");
		$("#backgroundPopup3").fadeOut("slow");
		$("#popupContact3").fadeOut("slow");
		popupStatus = 0;
	}
}

//centering popup
function centerPopup1(){
	//request data for centering
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $("#popupContact1").height();
	var popupWidth = $("#popupContact1").width();
	//centering
	$("#popupContact1").css({
		"position": "absolute",
		"top": 1300,
		"left": windowWidth/2-popupWidth/2
	});
	//only need force for IE6
	$("#backgroundPopup1").css({
		"height": windowHeight
	});
	
}
function centerPopup2(){
	//request data for centering
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $("#popupContact2").height();
	var popupWidth = $("#popupContact2").width();
	//centering
	$("#popupContact2").css({
		"position": "absolute",
		"top": 1200,
		"left": windowWidth/2-popupWidth/2
	});
	//only need force for IE6
	$("#backgroundPopup2").css({
		"height": windowHeight
	});
	
}
function centerPopup3(){
	//request data for centering
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $("#popupContact3").height();
	var popupWidth = $("#popupContact3").width();
	//centering
	$("#popupContact3").css({
		"position": "absolute",
		"top": 600,
		"left": windowWidth/2-popupWidth/2
	});
	//only need force for IE6
	$("#backgroundPopup3").css({
		"height": windowHeight
	});
	
}


//CONTROLLING EVENTS IN jQuery
$(document).ready(function(){
	
	//LOADING POPUP
	//Click the button event!
	$(".button1").click(function(){
		//centering with css
		centerPopup1();
		//load popup
		loadPopup1();
	});
	$(".button2").click(function(){
		//centering with css
		centerPopup2();
		//load popup
		loadPopup2();
	});	
	$(".button3").click(function(){
		//centering with css
		centerPopup3();
		//load popup
		loadPopup3();
	});	
	//CLOSING POPUP
	//Click the x event!
	$(".popupContactClose").click(function(){
		disablePopup();
	});
	//Click out event!
	$("#backgroundPopup1").click(function(){
		disablePopup();
	});
	$("#backgroundPopup2").click(function(){
		disablePopup();
	});
	$("#backgroundPopup3").click(function(){
		disablePopup();
	});

	//Press Escape event!
	$(document).keypress(function(e){
		if(e.keyCode==27 && popupStatus==1){
			disablePopup();
		}
	});
});

