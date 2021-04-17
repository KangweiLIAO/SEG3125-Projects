$(document).ready(function(){

	$('form').on('submit',function(){
		
		$.ajax({
			type: 'POST',
			url: '/niceSurvey',
			data: $(this).serializeArray(),
			success: function(data){
				$("submitButton").text("Thanks!");
			}
		});
	});
})