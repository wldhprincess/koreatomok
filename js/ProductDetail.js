$(function(){
    $('.margin').click(function(){
        if($('.login #logout').attr('id') == "logout"){
            location.href = 'productDetailsPageLog.html';
        } else if($('.login #logout').attr('id') !== ""){
            location.href = 'productDetailsPage.html';
        }

    })
})