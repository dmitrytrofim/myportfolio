$(document).ready(function() {
    $('.header__burger').click(function() {
        $('.header__burger').toggleClass('active');
        $('.header__navigation-list').toggleClass('active');
        $('body').toggleClass('lock');
    });
});