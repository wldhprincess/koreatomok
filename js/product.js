$(function(){
    $('.classifyAShow').show().siblings('a').addClass('selected');
    $('.classifyMC > li').click(function() {
        $(this).find('a').addClass('selected');
        $(this).find('.classifyA').show();
        
        // 다른 항목의 'selected' 클래스 제거 및 하위 메뉴 숨기기
        $(this).siblings().find('a').removeClass('selected');
        $(this).siblings().find('.classifyA').hide();
    });
    $('.productsBtmHide').hide();
    $('.selectItem > ul > li').click(function() {
      $(this).find('a').addClass('selectColor');
      /* $(this).find('.classifyA').show(); */
       
      // 다른 항목의 'selected' 클래스 제거 및 하위 메뉴 숨기기
      $(this).siblings().find('a').removeClass('selectColor');
      // $(this).siblings().find('.classifyA').hide();/*  */
    });

    $('.productPhoto1 ').addClass('productPtClick');
    $('.selectItem > ul > li > .clickColor').click(function() {
      $('.productsBtmHide').hide();
      $('.productsBtmShow').show();
    });
    $('.selectItem > ul > li > .productShow').click(function() {
      $('.productsBtmHide').show();
      $('.productsBtmShow').hide();
    });

    $('.colorGrayBtn').click(function(){
      $('.colorGrayClick').toggle();
      $(this).toggleClass('colorGrayChange');
    });

    $('.productPhoto').click(function(){
      $(this).toggleClass('productPtClick');
      $('.productPhoto').not(this).removeClass('productPtClick');
    })
    

    $('.classifyRWrap').hide();
    $('.firstSelect').addClass('select');
    $('.clickColor').addClass('selectColor');

    $('.classifyRWrapShow').show();

    const classifyLinks = $('.classifyA a');
    const classifyRWraps = $('.classifyRWrap');

    function toggleElement(element) {
      element.toggle();
    }

    classifyLinks.on('click', function(event) {
      event.preventDefault();
      
      // Remove 'select' class from all other links
      classifyLinks.not(this).removeClass('select');
      
      // Toggle 'select' class on the clicked link
      $(this).toggleClass('select');
      
      const classifyA = $(this).closest('.classifyA');
      const linkIndex = classifyA.find('a').index(this);

      classifyRWraps.hide();

      if (classifyRWraps.eq(linkIndex)) {
        toggleElement(classifyRWraps.eq(linkIndex));
      }
  });

  $('#okBtn').click(function(){
    $('.estimate').show();
  })
  $('.requestBtn').click(function(){
    $('.lineHeight').show();
    $('.estimate').css("height", ('885px'));
    $('.estimateTitPadding input').addClass('inputBox');
    if($('#address').val() == ''){
      alert('주소를 입력해주세요')
      return false;
    } 
    if($('#address2').val() == ''){
      return false;
    } 
  })



  $('.viewDetailsImgBox1').addClass('viewDetailsImgBoxBorder');
  $('.viewDetailsImgBox').click(function(){
    $(this).toggleClass('viewDetailsImgBoxBorder');
    $('.viewDetailsImgBox').not(this).removeClass('viewDetailsImgBoxBorder');
  })
})