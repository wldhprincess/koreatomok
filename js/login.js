$(function(){
    const normalMemberBtn = $('#normalMemberBtn');
    const businessMemberBtn = $('#businessMemberBtn');
    const memberLog = $('.memberLog');
    const buisnessLog = $('.buisnessLog');

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
    });
})