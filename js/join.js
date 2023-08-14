$(function(){
    const normalMemberBtn = $('#normalMemberBtn');
    const businessMemberBtn = $('#businessMemberBtn');
    const memberLog = $('.snsLoginHide');
    const buisnessLog = $('.buisnessLog');
    const buisnessLogNext = $('.buisnessLog.buisnessLogNext');


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
        buisnessLogNext.hide();
        buisnessLog.show();
    });
})