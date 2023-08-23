$(function(){

    
    $('#okBtn').click(function(){
        $('.estimate').show();
    })
    $('.requestBtn').click(function(){
        /* $('.lineHeight').show();
        $('.estimate').css("height", ('885px'));
        $('.estimateTitPadding input').addClass('inputBox');
        $('.estimateTitPadding input').addClass('inputBoxMarginL'); */
        if($('#address').val() == ''){
        alert('주소를 입력해주세요')
        $('.lineHeight').show();
        $('.estimate').css("height", ('885px'));
        $('.estimateTitPadding input').addClass('inputBox');
        $('.estimateTitPadding input').addClass('inputBoxMarginL');
        return false;
        } 
        if($('#address2').val() == ''){
            alert('상세주소를 입력해주세요');
        return false;
        } 
        if($('#address, #address2').val() !== ''){
            location.href = 'estimate.html'
        }
    })

    $('.expense').click(function(){
        if($('.paddingT input').val() == ''){
            alert("주소를 먼저 입력해 주세요");
        }else{
            $('.inlineBlock').show();
            $(this).addClass('expenseColor');
        }
    })


    closeBtn = $('.estimateTit .closeBtn');
    
    closeBtn.click(function(){
        $('.estimate').hide();
    })

    $('.print').click(function(){
        location.href = 'print.html'
    })


    $('.minitxtWrap').hide();
    $('.AdditionalProduct strong').mouseover(function(){
        $('.minitxtWrap').show();
        
    }).mouseout(function(){
        $('.minitxtWrap').hide();
    })



    $('.viewDetailsImgBox1').addClass('viewDetailsImgBoxBorder');
    $('.viewDetailsImgBox').click(function(){
      $(this).toggleClass('viewDetailsImgBoxBorder');
      $('.viewDetailsImgBox').not(this).removeClass('viewDetailsImgBoxBorder');
      $('.viewDetailsL .mainPhoto').css({"background":"url(../img/productDetails3.png) no-repeat center", "background-size": "cover"}); 
      
    })
})