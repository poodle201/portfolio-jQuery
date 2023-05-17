$(function () {
  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    cssEase: 'linear'
  });

  // マウスホバー時
  $('.button-more').on('mouseover', function () {
    $(this).animate({
      opacity: 0.5,
    }, 100);
  });

  // マウスホバーアウト時
  $('.button-more').on('mouseout', function () {
    $(this).animate({
      opacity: 1.0,
    }, 100);
  });

  // TOPへ戻る
  let top = $('#back-btn');
  top.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      top.fadeIn();
    } else {
      top.fadeOut();
    }
  });

  // スクロールなめらか
  $('a[href^="#"]').click(function () {
    var speed = 1000;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  //画面をスクロールするとフェードイン
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $('.element').each(function () {
      const targetPosition = $(this).offset().top;
      // イベント発生のタイミングを変えるには数字を変える
      if (scroll > targetPosition - windowHeight + 200) {
        $(this).addClass("is-fadein");
      } else {
        $(this).removeClass("is-fadein");
      }
    });
  });

  //画像クリックでモーダル表示
  $('.item img').click(function () {
    var imgSrc = $(this).attr('src');
    $('.bigimg').children().attr('src', imgSrc);
    $('.modal').fadeIn();
    $('body,html').css('overflow-y', 'hidden');
    $('#back-btn').fadeOut();
    return false
  });

  $('.close-btn').click(function () {
    $('.modal').fadeOut();
    $('body,html').css('overflow-y', 'visible');
    $('#back-btn').fadeIn();
    return false
  });

});