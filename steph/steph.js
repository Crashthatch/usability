jQuery(document).ready(function() {
	$("#orderedlist > li").addClass("blue");
	$("#orderedlist li:last").hover(function(){
		$(this).addClass("green");	
	},function(){
		$(this).removeClass("green");
	});
	
	 $("#orderedlist").find("li").each(function(i) {
		 $(this).append( "Chuck noris is " + i );
	 });
	 
	 
	 $("li").not(":has(ul)").css("border", "1px solid black");
	 
	 /*$("a[href]").css("background", "#eee");*/
	 
	 $("a").toggle(function(){
     $("#orderedlist").animate({ height: 'hide', opacity: 'hide' }, 'slow');
   },function(){
     $("#orderedlist").animate({ height: 'show', opacity: 'show' }, 'slow');
   });
   
   
   
});