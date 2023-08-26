$(function(){

  var oneDepthIndex = 0;

  $('.classifyAShow').show().siblings('a').addClass('selected');
  $('.classifyMC > li').mouseover(function() {
      $(this).find('a').addClass('selected');
      $(this).find('.classifyA').show();
      
      // 다른 항목의 'selected' 클래스 제거 및 하위 메뉴 숨기기
      $(this).siblings().find('a').removeClass('selected');
      $(this).siblings().find('.classifyA').hide();

      //현재 인덱스 
      oneDepthIndex = $(this).index();
  });
  $('.productsBtmHide').hide();
  $('.selectItem > ul > li').mouseover(function() {
    $(this).find('a').addClass('selectColor');
    /* $(this).find('.classifyA').show(); */
     
    // 다른 항목의 'selected' 클래스 제거 및 하위 메뉴 숨기기
    $(this).siblings().find('a').removeClass('selectColor');
    // $(this).siblings().find('.classifyA').hide();/*  */
  });

  $('.productPhoto1 ').addClass('productPtClick');
  $('.selectItem > ul > li > .clickColor').mouseover(function() {
    $('.productsBtmHide').hide();
    $('.productsBtmShow').show();
  });
  $('.selectItem > ul > li > .productShow').mouseover(function() {
    $('.productsBtmHide').show();
    $('.productsBtmShow').hide();
  });

  $('.colorGrayBtn').click(function(){
    $(this).parents('.toggle').next('.colorGrayClick').toggle();
    $(this).toggleClass('colorGrayChange');
  });

  $('.productPhoto').click(function(){
    $(this).toggleClass('productPtClick');
    $('.productPhoto').not(this).removeClass('productPtClick');
  })
  

  $('.titleClick1').mouseover(function(){
    classifyRWraps.hide();
    $('.classifyRBoxShow1').show();
    $('.classifyA li a').removeClass('select');
    $(this).next().find('li').eq(0).find('a').addClass('select');

  })
  $('.titleClick2').mouseover(function(){
    classifyRWraps.hide();
    $('.classifyRBoxShow0').show();
    $('.classifyA li a').removeClass('select');
    $(this).next().find('li').eq(0).find('a').addClass('select');
  })
  $('.titleClick3').mouseover(function(){
    classifyRWraps.hide();
    $('.classifyRBoxShow2').show();
    $('.classifyA li a').removeClass('select');
    $(this).next().find('li').eq(0).find('a').addClass('select');
  })
  $('.titleClick4').mouseover(function(){
    classifyRWraps.hide();
    $('.classifyRBoxShow3').show();
    $('.classifyA li a').removeClass('select');
    $(this).next().find('li').eq(0).find('a').addClass('select');
  })
  $('.titleClick5').mouseover(function(){
    classifyRWraps.hide();
    $('.classifyRBoxShow4').show();
    $('.classifyA li a').removeClass('select');
    $(this).next().find('li').eq(0).find('a').addClass('select');
  })
  $('.titleClick6').mouseover(function(){
    classifyRWraps.hide();
    $('.classifyRBoxShow5').show();
    $('.classifyA li a').removeClass('select');
    $(this).next().find('li').eq(0).find('a').addClass('select');
  })


  







  $('.firstSelect').addClass('select');
  $('.clickColor').addClass('selectColor');

  $('.classifyRBoxShow').show();

  const classifyLinks = $('.classifyA a');
  const classifyRWraps = $('.classifyRBox');

  function toggleElement(element) {
    element.toggle();
  }

  classifyLinks.mouseover(function(event) {
    event.preventDefault();
    
    classifyLinks.not(this).removeClass('select');
    
    $(this).toggleClass('select');
    
    const classifyA = $(this).closest('.classifyA');
    let linkIndex = classifyA.find('a').index(this);

    classifyRWraps.hide();




      // 첫번째 방법(무식한 방법) 
      if(oneDepthIndex == 1){
          linkIndex += 10; 
      }else if(oneDepthIndex == 2){
          linkIndex += 10 + 14; 
      }else if(oneDepthIndex == 3){
          linkIndex += 10 + 14 + 7; 
      }else if(oneDepthIndex == 4){
          linkIndex += 10 + 14 + 7 + 3;
      }else if(oneDepthIndex == 5){
          linkIndex += 10 + 14 + 7 + 3 +13; 
      }else if(oneDepthIndex == 6){
        linkIndex += 10 + 14 + 7 + 3 + 13 + 2; 
      }

      // 두번째 방법(반복문을 이용하는 방법(최적화))
      /* var total = 0;
      for (var i = 0; i < oneDepthIndex; i++) {
          var count = $(".classifyA").eq(i).find("li").length;
          total += count;
          console.log("총total " + total);
      } */

    if (classifyRWraps.eq(linkIndex)) {
      toggleElement(classifyRWraps.eq(linkIndex));
    }
    
  });
})