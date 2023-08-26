
$(function(){

  var oneDepthIndex = 0;

  $('.secoudDepth.selected').show().siblings('a').addClass('selected');
  $('.firstDepth > li').mouseover(function() {
      $(this).find('a').addClass('selected');
      $(this).find('.secoudDepth').show();
      
      // 다른 항목의 'selected' 클래스 제거 및 하위 메뉴 숨기기
      $(this).siblings().find('a').removeClass('selected');
      $(this).siblings().find('.secoudDepth').hide();

      //현재 인덱스 
      oneDepthIndex = $(this).index();
  });
  $('.productsBtmHide').hide();
  $('.selectItem > ul > li').mouseover(function() {
    $(this).find('a').addClass('selectColor');
     
    // 다른 항목의 'selected' 클래스 제거 및 하위 메뉴 숨기기
    $(this).siblings().find('a').removeClass('selectColor');
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
  



//********************** 대분류 제목을 hover할 경우 ***********************//
  for(let i =0; i< 6; i++){
    $('#titleClick'+ i).mouseover(function(){
      $('.productBox').hide();
      $('.secoudDepth li a').removeClass('select');
      $(this).next().find('li').eq(0).find('a').addClass('select')
      $('#secoundDepthKing' + i).css('display','flex');
    })
  }

  
 


  







  $('.firstSelect').addClass('select');
  $('.clickColor').addClass('selectColor');

  $('#initialProductBox').css('display','flex');




  $('.secoudDepth a').mouseover(function(event) {
    event.preventDefault();
    
    $('.secoudDepth a').not(this).removeClass('select');
    
    $(this).toggleClass('select');
    
    const secoudDepth = $(this).closest('.secoudDepth');
    let linkIndex = secoudDepth.find('a').index(this);

     $('.productBox').hide();




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
          var count = $(".secoudDepth").eq(i).find("li").length;
          total += count;
          console.log("총total " + total);
      } */

    if ($('.productBox').eq(linkIndex)) {
      $('.productBox').eq(linkIndex).css("display","flex");
    }
    
  });
})