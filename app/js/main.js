
$('.header__menu-btn').on('click', function () {
    $('.header__menu-list').toggleClass('header__menu-list--open');
})

$('.main__aside-btn').on('click', function () {
    $('.main__aside-btn').toggleClass('main__aside-btn--open');
    $('.main__aside').toggleClass('main__aside--open');
})