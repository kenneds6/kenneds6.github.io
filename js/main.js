function topFunction() {
    $('body,html').animate({scrollTop: 0}, 500);
    //document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox

}


function scrollToAbout() {
    $('body,html').animate({
        scrollTop: $("#about").offset().top} , 500);

}

function scrollToMyWork() {
    $('body,html').animate({
        scrollTop: $("#mywork").offset().top}, 500);

}

function scrollToContact() {
    $('body,html').animate({
        scrollTop: $("#contact").offset().top}, 500);

}
