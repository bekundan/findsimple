$(document).ready(function(){
		
	
		$(".intro-img").fadeIn(5000);

		$("nav a,.arrow_icon a").click(function(e){
			e.preventDefault();
			target=$(this.hash).offset().top;
			$("html").animate({
				scrollTop:target
			},4000);	
		})
		
});