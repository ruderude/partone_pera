$(window).on("load", function () {
  $(document).on("click", ".nav_btn", function () {
    const HAMBURGER = $(".hamburgeranime");
    if (HAMBURGER.hasClass("active")) {
      HAMBURGER.removeClass("active");
      const nav = $(".sp-gnavi-contents");
      nav.slideToggle();
    } else {
      HAMBURGER.addClass("active");
      const nav = $(".sp-gnavi-contents");
      nav.slideToggle();
    }
  });

  $(".sp-has-children").on("click", () => {
    $(".hidden_shops").slideToggle();
  });
});
