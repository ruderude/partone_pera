$(function () {
  //ウィンドウの横幅と高さを取得する
  let window_h = $(window).height();
  let window_w = $(window).width();
  console.log(window_w);

  // メニューバーをゆっくり表示
  if (window_w >= 767) {
    setTimeout(function () {
      $(".gnavi-contents").slideDown("slow");
    }, 600);
  }

  if (window_w < 767) {
    $(".gnavi-contents").addClass("hidden");
  }

  $(window).resize(function () {
    let window_w2 = $(window).width();
    console.log(window_w2);
    if (window_w2 >= 767) {
      $(".gnavi-contents").slideDown("slow");
    } else {
      $(".gnavi-contents").slideUp(10);
    }
  });

  $(window).on("scroll", function () {
    //スクロールイベントPC用
    //スクロール量を取得
    let scroll_top = $(window).scrollTop();
    let part_one = $("#part1");
    let works_image = $("#works_image");
    let works_top = $("#works_top");
    let works_bottom = $("#works_bottom");
    let shops_image = $("#shops_image");
    let shops_top = $("#shops_top");
    let shops_bottom = $("#shops_bottom");
    //どのタイミングでフェードインさせるか条件式
    if (scroll_top > part_one.offset().top - 600) {
      part_one.addClass("fadein");
    }

    if (scroll_top > works_image.offset().top - 500) {
      // console.log('このタイミング')
      $.when(works_image.addClass("fadein"))
        .done(function () {
          setTimeout(function () {
            works_top.addClass("fadein");
          }, 600);
        })
        .done(function () {
          setTimeout(function () {
            works_bottom.fadeIn(800);
          }, 600);
        })
        .fail(function () {
          // エラーが発生したときの処理
        });
    }

    if (scroll_top > shops_image.offset().top - 500) {
      $.when(shops_image.addClass("fadein"))
        .done(function () {
          setTimeout(function () {
            shops_top.addClass("fadein");
          }, 600);
        })
        .done(function () {
          setTimeout(function () {
            shops_bottom.fadeIn(800);
          }, 600);
        })
        .fail(function () {
          // エラーが発生したときの処理
        });
    }

    //スクロールイベントスマホ用
    //スクロール量を取得
    // console.log("スクロール:" + scroll_top);
    let part_one_sp = $("#part1_sp");
    let works_image_sp = $("#works_image_sp");
    let works_top_sp = $("#works_top_sp");
    let works_bottom_sp = $("#works_bottom_sp");
    let shops_image_sp = $("#shops_image_sp");
    let shops_top_sp = $("#shops_top_sp");
    let shops_bottom_sp = $("#shops_bottom_sp");
    // console.log("part_one_sp:" + part_one_sp.offset().top)
    // console.log("shops_top_sp:" + shops_top_sp.offset().top)
    // console.log("shops_bottom_sp:" + shops_bottom_sp.offset().top)
    //どのタイミングでフェードインさせるか条件式
    if (scroll_top > part_one_sp.offset().top - 600) {
      part_one_sp.addClass("fadein");
    }

    if (scroll_top > works_image_sp.offset().top - 600) {
      // console.log('このタイミング')
      $.when(works_image_sp.addClass("fadein"))
        .done(function () {
          setTimeout(function () {
            works_top_sp.addClass("fadein");
          }, 600);
        })
        .done(function () {
          setTimeout(function () {
            works_bottom_sp.fadeIn(800);
          }, 600);
        })
        .fail(function () {
          // エラーが発生したときの処理
        });
    }

    if (scroll_top > shops_image_sp.offset().top - 500) {
      // console.log('このタイミング')
      $.when(shops_image_sp.addClass("fadein"))
        .done(function () {
          setTimeout(function () {
            shops_top_sp.addClass("fadein");
          }, 600);
        })
        .done(function () {
          setTimeout(function () {
            shops_bottom_sp.fadeIn(800);
          }, 600);
        })
        .fail(function () {
          // エラーが発生したときの処理
        });
    }
  });
});
