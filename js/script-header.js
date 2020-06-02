$(function() {
    
     //links add active class
    $(".navbar .navbar-nav li a").click(function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
    });
    
    
var fired = 0;

	if(fired === 0) {
		$('.count').each(function () {
			$(this).prop('Counter',0).animate({
				Counter: $(this).text()
			   	}, {
			   	duration: 3000,
			   	easing: 'swing',
			   	step: function (now) {
			   	$(this).text(Math.ceil(now));
			   	}
			});
		});
		fired = 1; //Only do scroll function once
	}
    
    
    $(".carousel .img-style").height($(window).height() - 85);
    
    $(window).resize(function(){
        $(".carousel img").height($(window).height() - 85);       
        
    });   
    
    
    $(".navbar .icons .fa-user-o").click(function(){
        $(".login").slideToggle(500)
    })
    
    
    $(".scroll-top").tooltip();       //activate scroll top button tooltip
    
    //scroll top button when clicking
    if($(window).scrollTop()>700){
        $(".scroll-top").fadeIn(2000);
    }
    
    $(".scroll-top").on("click",function(){
        $("html,body").animate({scrollTop : 0},2000);
    })
    
    $(window).scroll(function(){
        if($(this).scrollTop()>700){
            $(".scroll-top").fadeIn(2000);
        }
        else{
            $(".scroll-top").fadeOut(2000);
        }
    });    
    
   
    
})