$(function () {
  // セレクトフォーカス時
  $(".select")
    .focusin(function (e) {
      $(".cp_ipselect.cp_sl01").css("border-color", "#da3c41");
      $(".cp_ipselect.cp_sl01 i").css("color", "#da3c41");
    })
    .focusout(function (e) {
      $(".cp_ipselect.cp_sl01").css("border-color", "");
      $(".cp_ipselect.cp_sl01 i").css("color", "");
    });
});
