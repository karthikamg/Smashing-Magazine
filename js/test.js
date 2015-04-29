

// window.addEventListener("resize", menu);

function tosearchBottom()
{
	window.scrollTo(0, document.body.scrollHeight);

	// menu.classList.add("hide");
	menu = document.getElementById("menu-contents");
	search = document.getElementById("search-contents");
	backtotop = document.getElementById("scrollup");
	searchbutton = document.getElementById("search-button");
	media = window.matchMedia("(max-width: 800px)");

	if(media.matches){
		search.className = "show";
		backtotop.className = "show";
		menu.className = "hide";
		searchbutton.className = "show-inline";
	}
	else{
		hideclass();
	}
}
function tomenuBottom()
{
	window.scrollTo(0, document.body.scrollHeight);

	searchbutton.className = "hide";	
	
	if(media.matches){
		menu.className = "show";
		backtotop.className = "show";
		search.className = "hide";
	}
	else{
		hideclass();
	}
}
function hideclass(){
	search.className = "hide";
	backtotop.className = "hide";	
	menu.className = "hide";
	searchbutton.className = "hide";
}

// $(window).resize(function() {
// 	windowsize = window.width;
// 	console.log(windowsize);
// 	if(windowsize > 800)
// 		window.alert('success');
// 	});


// $('.scrollup').click(function () {
//     $("html, body").animate({
//         scrollTop: 0
//     }, 00);
//     return false;
// });

