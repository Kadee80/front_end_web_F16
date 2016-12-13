$(function(){
	var index = 0;
	var counter = $("div.img-wrapper > img").length -1;
	var imgWidth = $("div.img-wrapper > img")[0].width;
	var imgBuffer = 5; // this number is the number of pixels to space between images;

	console.log(counter);
	console.log(imgWidth);

	//add the navigation dots with thier index as a class dynamically
	for(var i = 0; i <= counter; i++){
		$("#navigation-dots").append('<span class='+i+'></span>');
	}

	$("#navigation-dots > span").click("click", function(event){
		//get the index from the class
		index = parseInt($(this).attr('class'));
		//slide the appropriate amount
		sliderMargin();
	});

	function sliderMargin(){
		//make all of the dots grey
		$("#navigation-dots span").css({'background-color':'#AAAAAA'});
		//make the active dot blue
		$("#navigation-dots span." + index).css({'background-color':'#006FFF'});

		//animate/slide the appropriate amount of pixels to center the proper image
		$("div.img-wrapper").animate({
			"marginLeft": (imgWidth+imgBuffer)* (-1) *(index) + "px"		
		}, "0.5");
	}






});