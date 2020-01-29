$(document).ready(function(){
		
       
		$("nav a,.arrow_icon a").click(function(e){
			e.preventDefault();
			target=$(this.hash).offset().top;
			$("html").animate({
				scrollTop:target
			},4000);	
		});
    $('html,body').scrollTop(0);
		$(window).on('load',function(){
            setTimeout(function(){
                $('html,body').scrollTop(0);
            },100);
        });
});