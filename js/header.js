$(function () {
  //768px以下でハンバーガーメニュを押すことでメニューの開閉を行う。
  let count = 0;
  let dis = 100;
  $('.hamburger').click(function () {
    let scroll = $(window).scrollTop();
    count++;
    if (count === 1) {
      if (scroll > $('.services').offset().top - 100) {
        $('.header').removeClass('header--bg-lighter');
        $('.hamburger').removeClass('hamburger--cl-dark');
        $('.header__logo').attr('src', 'img/logo-w.svg');
      }

    } else {
      count = 0;
      if (scroll > $('.services').offset().top - 100) {
        $('.header').addClass('header--bg-lighter');
        $('.hamburger').addClass('hamburger--cl-dark');
        $('.header__logo').attr('src', 'img/logo-b.svg');
      }
    }

    $(".globalMenuSp").animate({ "right": "+=" + dis + "%" }, 200);
    dis *= -1;
    $('body').toggleClass('body-fixed');
    $(this).toggleClass('hamburger--open');
  });


  //header部分の切り替え
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll > $('.services').offset().top - 100) {
      $('.header').addClass('header--bg-lighter header--position-fixed');
      $('.hamburger').addClass('hamburger--cl-dark hamburger--position-fixed');
      $('.header__logo').attr('src', 'img/logo-b.svg');
    } else {
      $('.header').removeClass('header--bg-lighter header--position-fixed');
      $('.hamburger').removeClass('hamburger--cl-dark hamburger--position-fixed');
      $('.header__logo').attr('src', 'img/logo-w.svg');
    }
  })

  // リンクを押すとゆっくりと移動する
  $('a[href^="#"]').click(function () {
    let adjust;
    if (window.innerWidth > 768) {
      adjust = -77;
    } else {
      adjust = -62;
    }
    const speed = 400;
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? 'html' : href);
    const position = target.offset().top + adjust;
    const globalMenuSpLink = document.querySelector('.globalMenuSp__link');
    if ($(this).attr("class") == globalMenuSpLink.className) {
      $(".globalMenuSp").animate({ "right": "-=" + 100 + "%" }, 200);
      dis *= -1;
      count = 0;
      $(".hamburger").removeClass('hamburger--open');
      $('body').removeClass('body-fixed');
    }

    $('body,html').animate({ scrollTop: position }, speed, 'swing');

    return false;
  });
})
