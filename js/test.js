window.addEventListener("resize", menu);

function tosearchBottom()
{
	window.scrollTo(0, document.body.scrollHeight);

	menu = document.getElementById("menu-contents");
	search = document.getElementById("search-contents");
	backtotop = document.getElementById("scrollup");

	search.style.display= 'initial';
	menu.style.display= 'none';	
}
function tomenuBottom()
{
	window.scrollTo(0, document.body.scrollHeight);

	menu.style.display= 'table';
	search.style.display= 'none';
}

function menu()
{
	media = window.matchMedia("(min-width: 800px)");
	if(media.matches){
		search.style.display= 'none';
		menu.style.display= 'none';
		backtotop.style.display= 'none';
	}
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

