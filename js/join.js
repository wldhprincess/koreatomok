var duplicateCheckId = false;

$(function(){
    const normalMemberTab = $('#normalMemberTab');
    const businessMemberTab = $('#businessMemberTab');
    const memberLog = $('.snsLoginHide');
    const buisnessLog = $('#buisnessLogShow');
    // 왜 안사라짐?
    const buisnessLogNext = $('.buisnessLog.buisnessLogNext');
    const nextBtn = $('.nextBtn');
    const arrowBtn = $('.arrowBtn');
    
    const completed = $('.completed');


    buisnessLogNext.hide();
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
        buisnessLogNext.hide();
    });

    arrowBtn.click(function(){
        buisnessLog.show();
        buisnessLogNext.hide();
    })

    nextBtn.click(function(){

        //검증시작
        if($('#loginId').val() == ''){
            alert('아이디를 입력해주세요');
            return false;
        } 

        if(duplicateCheckId == false){
            alert("중복된 아이디 확인바랍니다.")
        }


        //검증 완료
        buisnessLog.hide();
        buisnessLogNext.show();
    })

    //왜 안되냐?
    completed.click(function(){
        buisnessLogNext.hide();
        $('.membertab').hide();
        $('.join').hide();
        $('.memberLog').hide();
        $('.completeWrap').show();
    })





})

function checkId(){
    // *********************** json을 서버에게 보낼때 START *********************** //
    //보낼 데이터
    /*
    var loginData = {
        "loginId" : $('#loginId').val()
        // , "age" : 99
        // , "address" : "서울시"
    }

    $.ajax ( {
        type : "POST", // GET, POST 
        url : "서버주소",
        dataType : 'json', // 서버한테 어떤 데이터종류로 받을지
        contentType : 'application/json', //어떤 데이터종류로 보낼지, json과 form
        async: false,
        data : JSON.stringify(loginData), //보낼 데이터
        beforeSend : function() {
            alert("ajax 호출시 실행");
        },
        success : function(res) {
            console.log("성공적으로 통신완료");
            if(res.checkId = true){ //중복이 있을때는 checkId가 true
                alert("중복된 아이디입니다.");
            }else{
                alert("사용가능한 아이디입니다.");
                duplicateCheckId = true;
            }  
        },
        error : function(xhr) {
            alert("통신오류입니다.");
        },
        complete : function() {
            // alert("ajax 호출 완료시 실행");
        }
    });
    */
    // *********************** json을 서버에게 보낼때 END *********************** //


    // *********************** form을 서버에게 보낼때 START *********************** //

    var form = $("#loginForm")[0];    // form안에 있는 모든 input값들을 서버에 전송    
    
    var formData = new FormData(form);
    for (let key of formData.keys()) {
        console.log(key, ":", formData.get(key));
    }

    $.ajax ( {
        type : "POST", // GET, POST 
        url : "서버주소",
        dataType : 'json', // 서버한테 어떤 데이터종류로 받을지
        contentType : false,
        async: false,
        cache: false,
        enctype: 'multipart/form-data',
        data : formData, //보낼 데이터
        processData: false,
        beforeSend : function() {
            console.log('formData확인', this.data.get('loginId')); //출력이안된다.
            alert("ajax 호출시 실행");
        },
        success : function(res) {
            console.log("성공적으로 통신완료");
            if(res.checkId = true){ //중복이 있을때는 checkId가 true
                alert("중복된 아이디입니다.");
            }else{
                alert("사용가능한 아이디입니다.");
                duplicateCheckId = true;
            }  
        },
        error : function(xhr) {
            // alert("통신오류입니다.");
        },
        complete : function() {
            // alert("ajax 호출 완료시 실행");
        }
    });
}   