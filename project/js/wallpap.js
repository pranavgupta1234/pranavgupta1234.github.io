$(document).ready(function(){
      var text_length=250;
	$('#textarea_feedback').html(text_length + ' characters remaining');
	$('#textarea').keyup(function(){
		var text_entered=$('#textarea').val().length;
		var text_remaining= text_length-text_entered;
     	$('#textarea_feedback').html(text_remaining +' characters remaining');
	});
    $(function() {
		$('#main-menu').smartmenus({
			subMenusSubOffsetX: 1,
			subMenusSubOffsetY: -8
		});
	});
	$('#tabs').tabs();
	$('#menu').menu();
	$('#date').datepicker();
	$('#accordion').accordion({fillSpace:true,
	         icons: {'header':'ui-icon-plus','headerSelected':'ui-icon-minus'},
	                 event:'mouseover',collapsible:true,active: 0});
	$(".ui.accordion-header").css("background","grey");
	$(".ui-accordion-header.ui-state-active").css("background","orange");
	$('#give').click(function(){
		   var val=0;
		   var interval=setInterval(function(){
			   val=val+1;
			   $('#pb').progressbar({value:val});
			   $('#per').text(val+'%');
			   if(val==100){
				   clearInterval(interval);
			   }
		   },50);	
	});
	$('input[type="password"]').after('<input type="checkbox" class="sp_checkbox" /> Show Password');
	     $('.sp_checkbox').change(function(){
	           var prev=$(this).prev();
              var value= prev.val();
              var type= prev.attr('type');
              var name=prev.attr('name');
              var classname = prev.attr('class');
              var id = prev.attr('id');
			  var maxlen=prev.attr('maxlength');
			  
              var new_type=(type=='password')?'text':'password';
               prev.remove();
               $(this).before('<input type="'+new_type+'" value="'+value+'" id="'+id+'" class="'+classname+'" name="'+name+'" maxlength="'+maxlen+'"  />');			  
			  });
	
$('.table').hover(function(){
	// alert('fcuk');
	
	$(this).addClass('table_bold');
}).mouseout(function(){
	    $(this).removeClass('table_bold');
     });

$(".upper_tab").mousemove(function(e){
	  // alert('fcuk');
      var hover_text = $(this).attr("hovertext");
	  $('#hover_text').text(hover_text).show();
	  $('#hover_text').css('top',e.clientY).css('left',e.clientX);
			}).mouseout(function(){
					$('#hover_text').text(hover_text).hide();
	
	});
$('#submit_details').click(function(){
	$('#slidedown_message').slideToggle();
         }); 
});




