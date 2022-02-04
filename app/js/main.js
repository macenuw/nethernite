$(function () {
  $("#forMonster").on("click", function () {
    $(".tab__title").removeClass("active");
    $(this).toggleClass("active");
    $(".catalog__info-inner").removeClass("active");
    $('#monster').addClass('active')
  })
  $("#forBank").on("click", function () {
    $(".tab__title").removeClass("active");
    $(this).toggleClass("active");
    $(".catalog__info-inner").removeClass("active");
    $('#bank').addClass('active')
  })
  $("#forPack").on("click", function () {
    $(".tab__title").removeClass("active");
    $(this).toggleClass("active");
    $(".catalog__info-inner").removeClass("active");
    $('#pack').addClass('active')
  })
  $("#forOffer").on("click", function () {
    $(".tab__title").removeClass("active");
    $(this).toggleClass("active");
    $(".catalog__info-inner").removeClass("active");
    $('#specialOffer').addClass('active')
  })
  $("#forPromo").on("click", function () {
    $(".tab__title").removeClass("active");
    $(this).toggleClass("active");
    $(".catalog__info-inner").removeClass("active");
    $('#promo').addClass('active')
  })
})