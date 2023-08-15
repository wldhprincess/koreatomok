$(function(){
    const normalMemberTab = $('#normalMemberTab');
    const businessMemberTab = $('#businessMemberTab');
    const memberLog = $('.memberLog');
    const buisnessLog = $('.buisnessLog');

    normalMemberTab.addClass('clickBtn');

    normalMemberTab.click(function() {
        normalMemberTab.toggleClass('clickBtn');
        businessMemberTab.removeClass('clickBtn');
        memberLog.show();
        buisnessLog.hide();
    });

    businessMemberTab.click(function() {
        businessMemberTab.toggleClass('clickBtn');
        normalMemberTab.removeClass('clickBtn');
        memberLog.hide();
        buisnessLog.show();
    });
})