$(document).ready(function() {

    // header

    $('.menu__hamburger').click(function() {
        $('.menu__hamburger__window').toggleClass('menu__hamburger__window__animateOn');
        $('.menu__hamburger').toggleClass('menu__hamburger__animateOn');
    });
    
    // blog
    
    $('.main__text').click(function() {
        window.location.href = 'blog.html';
    });
    $('.main__img').click(function() {
        window.location.href = 'blog.html';
    });
    // if ($(window).width() <= 425) $('.main__img').prop('align', 'center');

    // services

    $('#business').click(function() {
        $('.services__business').removeClass('services-content_passive');
        $('.services__individual').addClass('services-content_passive');

        $(this).addClass('btn-primary');
        $(this).removeClass('btn-outline-primary');
        $('#individual').addClass('btn-outline-primary');
        $('#individual').removeClass('btn-primary');
    });
    $('#individual').click(function() {
        $('.services__business').addClass('services-content_passive');
        $('.services__individual').removeClass('services-content_passive');

        $(this).addClass('btn-primary');
        $(this).removeClass('btn-outline-primary');
        $('#business').addClass('btn-outline-primary');
        $('#business').removeClass('btn-primary');
    });

    // to form in contacts

    $('.btn__adressToContacts').click(function() {
        window.location.href = 'contacts.html';
    })

    $('.form-group__select').click(function() {
        $('.form-group__select__disabled').prop('disabled', true);
    });

    // test on trademark
    
    if ($('.footer__by').length || $('.footer__by__link').length) {} else {
        alert('Верните текст - "Proudly made by n1ks_ON. Designed and coded." Связь с разработчиком - https://kwork.ru/user/n1ks_on');
        $('body, html').css('display', 'none');
    }
});