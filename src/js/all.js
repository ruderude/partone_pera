$(function(){
    // モーダル
    $('.js-modal-open').on('click',function(){
        const img_src = $(this).find('img').attr('src');
        const modal_title = $(this).find('img').data('title');
        const modal_under = $(this).find('img').data('text');
        // const modal_tips = $(this).find('img').attr();
        $('#modal_img').attr('src', img_src);
        $('#modal_title').text(modal_title);
        $('#modal_under').text(modal_under);
        $('.js-modal').fadeIn();
        console.log(modal_title);
        console.log(modal_under);
        return false;
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });

});
