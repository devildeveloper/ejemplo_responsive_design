$(document).ready(function(){
	
	nav_width = $(window).width();
	$('.sect_slide').width(nav_width);
	sect_width = $('#home').width();
	sect_width_all = $('#home').width() * 5;

	$('#container_slide').width(sect_width_all);

	$("#main-nav a").bind('click',function(){
		
		$("#main-nav a").each(function(){
			$(this).removeClass('option_active');
		});

		$(this).addClass('option_active');
		
		var id = $(this).attr('id');
		switch( id ){
			case 'men_1':
				$("body").removeClass();
				$("body").addClass('class_home');
				if($.browser.msie){
					$("#container_slide").css("left",0);
				} else {
					$("#container_slide").animate({left: 0}, 1000);
				}
				
			break;	
			case 'men_2':
				$("body").removeClass();
				$("body").addClass('class_resenia');
				if($.browser.msie){
					$("#container_slide").css("left","-"+ sect_width +"px");
				} else {
					$("#container_slide").animate({left: "-"+ sect_width}, 1000);
				}
				
			break;
			case 'men_3':
				$("body").removeClass();
				$("body").addClass('class_beneficios');
				if($.browser.msie){
					$("#container_slide").css("left","-"+ (sect_width*2) +"px");
				} else {
					$("#container_slide").animate({left: "-"+ (sect_width*2)}, 1000);
				}
				//$("#container_slide").animate({ left: "-"+ (oneImageWidth*2) }, 1000);
			break;
			case 'men_4':
				$("body").removeClass();
				$("body").addClass('class_plan_estudios');
				if($.browser.msie){
					$("#container_slide").css("left","-"+ (sect_width*3) +"px");
				} else {					
					$("#container_slide").animate({left: "-"+ (sect_width*3)}, 1000);
				}
				//$("#container_slide").animate({ left: "-"+ (oneImageWidth*3) }, 1000);
			break;
			case 'men_5':
				$("body").removeClass();
				$("body").addClass('class_contactanos');
				if($.browser.msie){
					$("#container_slide").css("left","-"+ (sect_width*4) +"px");
				} else {
					$("#container_slide").animate({left: "-"+ (sect_width*4)}, 1000);
				}
				//$("#container_slide").animate({ left: "-"+ (oneImageWidth*4) }, 1000);
			break;
		}
	});

	$(window).bind('resize', function(ev){
		
		nav_width = $(window).width();
		$('.sect_slide').width(nav_width);
		sect_width = $('#home').width();
		sect_width_all = $('#home').width() * 5;

		var id_option_active = $("#main-nav").find('.option_active').attr('id');
		var sub_option_active = id_option_active.substring(4,id_option_active.length);

		console.log(sub_option_active); 

		if($.browser.msie){
			$("#container_slide").css("left",0);
		} else {
			$("#container_slide").animate({left: "-"+ (nav_width*(sub_option_active-1))}, 1000);
		}

		ev.preventDefault();
	});

});

function processForm() {
	alert(entre); 
    $.ajax( {
        type: 'POST',
        url: form_process.php,
        data: $(form).serialize(),
        success: function(data) {
            $('#message').html(data);
        }
    } );
    return false;
}