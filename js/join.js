$(function(){
    const normalMemberBtn = $('#normalMemberBtn');
    const businessMemberBtn = $('#businessMemberBtn');
    const memberLog = $('.snsLoginHide');
    const buisnessLog = $('#buisnessLogShow');
    // 왜 안사라짐?
    const buisnessLogNext = $('.buisnessLog.buisnessLogNext');
    
    const completed = $('.completed');


    buisnessLogNext.hide();
    normalMemberBtn.addClass('clickBtn');

    normalMemberBtn.click(function() {
        normalMemberBtn.toggleClass('clickBtn');
        businessMemberBtn.removeClass('clickBtn');
        memberLog.show();
        buisnessLog.hide();
    });

    businessMemberBtn.click(function() {
        businessMemberBtn.toggleClass('clickBtn');
        normalMemberBtn.removeClass('clickBtn');
        memberLog.hide();
        buisnessLog.show();
        buisnessLogNext.hide();
    });


    //왜 안되냐?
    completed.click(function(){
        console.log('hi')
        $('.membertab').hide();
        $('.join').hide();
        $('.memberLog').hide();
        $('.completeWrap').show();
    })

})