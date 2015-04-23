function tosearchBottom()
{
	window.scrollTo(0, document.body.scrollHeight);
	document.getElementById("menu-contents").style.display= 'none';
	document.getElementById("search-contents").style.display= 'initial';
}
function tomenuBottom()
{
	window.scrollTo(0, document.body.scrollHeight);
	document.getElementById("search-contents").style.display= 'none';
	document.getElementById("menu-contents").style.display= 'initial';
}


$('.scrollup').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 00);
    return false;
});