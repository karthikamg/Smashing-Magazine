
function tosearchBottom()
{
	window.scrollTo(0, document.body.scrollHeight);

	menu = document.getElementById("menu-contents");
	search = document.getElementById("search-contents");
	media = window.matchMedia("(max-width: 800px)");

	// var $window = $(window);


	// menu.style.display= 'none';
	// search.style.display= 'initial';
	

	// if(media.matches){
	// 	search.style.display= 'initial';
	// }
	// else{
	// 	search.style.display= 'none';
	// }	
}
function tomenuBottom()
{
	window.scrollTo(0, document.body.scrollHeight);

	// search.style.display= 'none';
	// menu.style.display= 'initial';
	

	// if(media.matches){
	// 	menu.style.display= 'initial';
	// }
	// else{
	// 	menu.style.display= 'none';
	// 	window.alert("alert");
	// }
}

$(window).resize(function() {
	windowsize = window.width;
	console.log(windowsize);
	if(windowsize > 800)
		window.alert('success');
	});


// $('.scrollup').click(function () {
//     $("html, body").animate({
//         scrollTop: 0
//     }, 00);
//     return false;
// });

