jQuery(document).ready(function() {
	if(typeof window.gtm_tracking_calls != "undefined") {
		for (var key in window.gtm_tracking_calls) {
			$("#dl_calls").append('<p><a href="#" id="'+key+'">'+key+'</a></p>');
			$("#"+key).click(function(e){
				var id = $(this).attr("id");
				if(typeof window.gtm_tracking_calls[id] != "undefined") {
					window.gtm_tracking_calls[id]();
				}
				e.preventDefault();
				console.log("js::gtm_tracking_calls::event: "+id, "datalayer:", dataLayer[dataLayer.length-1]);
				return false;
			})
			//<a href="#">#</a>
		}
	}
});
