$(function(){
    $('.menuLogo button').click(function(){
        $('.menuNav').show();
        $('.menuLogo').hide();
    });

    $('.menuNav').click(function(){
        $('.menuNav').hide();
        $('.menuLogo').show();
    });

})