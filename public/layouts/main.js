(function () {
   'use strict';
   // this function is strict...

	$(document).ready(function(){
		$('#deleteEvent').on('click', function(){
			var deleteId = $(this).data('delete');
			alert(event.type + ' callback ' + deleteId);
			$.ajax({
				url: '/events/delete/' + deleteId,
				type: 'DELETE',
				success: function(){
					
				}
			});
			window.location = '/myevents';
		});
	});

}());