$(document).ready(function(){
	$('.submit').click(function(e){
		var form = this;
		_gaq.push(['_trackPageview', '/form-submit'+window.location.pathname]);
		setTimeout(function(){$(form).submit(); }, 300);
	});

	$('.fraud-report').click(function(e){
		e.preventDefault();
		form_url = "/report/?form="+encodeURIComponent(window.location)
		console.log(form_url)
		request = $.ajax({
                            type: "GET",
                            url: form_url,
                            });
            request.done(function(msg) {
              alert("Done");
            });

	})
	$('textarea').val('');
	var v = $("#target").validate(
		{
			errorClass: "label label-important",
			errorPlacement: function(error, element) {
				if($(element).next('.add-on').length>0){
                           $(element).next('.add-on').after(error);
                        }
                else{
                	$(element).after(error);
                }
            }
   	    });

   	var pageBreaks=$('.page-break').parent() //array of page breaks
	var nBreaks= pageBreaks.length
	if (nBreaks>0){
		//get first page
		var first = $(pageBreaks[0]).prevUntil('#legend').toArray().reverse();
		//var first = $('#legend').prevUntil(pageBreaks[0]);
		//get last page
		var last = $(pageBreaks[nBreaks-1]).nextUntil('.btn');
		var pages=[];
		if(first.length>0){
			pages.push(first);
		}
		for(i =1; i<nBreaks;i++){
			var currPage = $(pageBreaks[i]).prevUntil(pageBreaks[i-1]).toArray().reverse();
			if(currPage.length>0){
				pages.push(currPage);
			}
		}
		if(last.length>0){
			pages.push(last)
		}
		//append next and back to form actions
		if(pages.length>1){
			$("input[type='submit']").before("<a href='#' id = 'back' class='btn'><i class='icon-chevron-left'/> Back</a>");
			$("input[type='submit']").after("<a href='#' id='next' class='btn'>Next <i class='icon-chevron-right'/></a>");
			$(".btn.submit").hide();
			$("#back").hide();
		}
		var currPageIdx=0;

		for(i=0;i<pages.length;i++){
			var curr = $(pages[i])
			$(curr).wrapAll("<div id='page" + i + "'></div>");
			if(i>0){
				$('#page'+i).hide();//hide all but the first page
			}
		}

		$("#back").bind("click", function(e) {
			e.preventDefault();
			var pageName = "page" + currPageIdx;
			$("#next").show();
			$("#" + pageName).hide();
			$("#page" + (currPageIdx - 1)).show();
			$(".btn.submit").hide();
			currPageIdx--;
			if(currPageIdx==0){
				$("#back").hide();
			}
		});
		$("#next").bind("click", function(e) {
			e.preventDefault();
			if(v.form()){
				var pageName = "page" + currPageIdx;
				$("#back").show();
				$("#" + pageName).hide();
				$("#page" + (currPageIdx + 1)).show();
				if (currPageIdx + 2 == pages.length){
		        	$(".btn.submit").show();
		        	$("#next").hide();
		        }
				currPageIdx++;
		    }
		});

	}

 });