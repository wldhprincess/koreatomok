$(function(){
    $('.classifyAShow').show().siblings('a').addClass('selected');
    $('.classifyMC > li').click(function() {
        $(this).find('a').addClass('selected');
        $(this).find('.classifyA').show();
        
        // 다른 항목의 'selected' 클래스 제거 및 하위 메뉴 숨기기
        $(this).siblings().find('a').removeClass('selected');
        $(this).siblings().find('.classifyA').hide();
      });
})