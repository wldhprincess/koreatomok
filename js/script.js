var rightClick = false;
$(function() {

    
    /* let optionarea0 = ["1단계-품목의 소재를 선택해 주세요","철근콘크리트","콘크리트","스틸","석재","PE/PVC","기타"],
        optionarea1 = ["2단계-품목을 선택해 주세요",'암거','플륨관/수로관','측구수로관','사각수로관','원심력사각수로관','흄관/레진관','VR관','PC방호벽','PHC파일','옹벽블록'],
        optionarea2 = ["2단계-품목을 선택해 주세요",'맨홀','인터로킹(보도블록)','점토블록','식생축조블록','보강토블록','콘크리트 경계석','호안블록','잔디블록','콘크리트벽돌','가로등 기초','가로수보호판','빗물받이 블록','PC트렌치','레디락블록'],
        optionarea3 = ["2단계-품목을 선택해 주세요",'주철뚜껑','무소음트렌치','그레이팅','중하중그레이팅','디자인그레이팅','SUS그레이팅','파형강관'],
        optionarea4 = ["2단계-품목을 선택해 주세요",'화강경계석','기타 화강석','돌망태(개비온)'],
        optionarea5 = ["2단계-품목을 선택해 주세요",'PE이중벽관','PE다중벽관','고강성PVC이중벽관','PE/PY','THP관','PVC관','HDPE관','카스토퍼','그레이팅덮개','플라스틱 그레이팅','몰탈용 고무시트','PE사다리'],
        optionarea6 = ["2단계-품목을 선택해 주세요",'플륨관/수로관집게','수밀밴드(A형 흄관용)','축조블록집게','보강토집게','경계석집게','고정클립','부직포'];

    // KCY 3depth option
    let optionareaFor3depth1 = ["3단계-세부 품목을 선택해 주세요",'1련암거','2련암거','상하분리 1련암거','상하분리 2련암거 ','개거암거'],
        optionareaFor3depth2 = ["3단계-세부 품목을 선택해 주세요",'U형 플륨관(벤치 1종)','벤치 플륨관(벤치 2종)','수로관(벤치 3종)','환경수로관','개거수로관','보강수로관(무개)','건널목수로관(1종)','건널목수로관(2종)'],
        optionareaFor3depth3 = ["3단계-세부 품목을 선택해 주세요",'측구수로관A형(앵글미부착)','측구수로관 B형(앵글부착)','측구수로관 AN형(앵글부착)','측구수로관 Z형(앵글부착)','침투측구수로관유공(앵글부착)','침투측구수로관(앵글부착)'],
        optionareaFor3depth4 = ["3단계-세부 품목을 선택해 주세요",'원형사각수로관(RDG형)','돌무늬원형사각수로관 NS-02','돌무늬원형사각수로관 NS-03','NS용 집수정(사각수로관용)','사각수로관(AN형)','사각수로관(BN형)','사각수로관(CN형)','사각수로관(DN형)'],
        optionareaFor3depth5 = ["3단계-세부 품목을 선택해 주세요",'원심력사각수로관(무개)','원심력사각수로관(유개)'],
        optionareaFor3depth6 = ["3단계-세부 품목을 선택해 주세요",'흄관 B형','흄관 A형','유공 흄관','접속 흄관','레진관'],
        optionareaFor3depth7 = ["3단계-세부 품목을 선택해 주세요",'VR관','PC방호벽','PHC파일','토탈옹벽블록','PC판넬옹벽'],
        optionareaFor3depth8 = ["3단계-세부 품목을 선택해 주세요",'사각맨홀','사각노바시','원형맨홀','원형노바시','침투집수정','전기맨홀','통신맨홀','조립식맨홀(상부, 연직, 하부구체)','조립식PC맨홀(전체높이)'],
        optionareaFor3depth9 = ["3단계-세부 품목을 선택해 주세요",'인터로킹 U형블록','인터로킹 12형 블록','인조화강블록(투수)','인조화강블록(불투수)','다칼라블랜딩블록(투수)','다칼라블랜딩블록(불투수)','장애인사각블럭(점자블록)','규사'],
        optionareaFor3depth10 = ["3단계-세부 품목을 선택해 주세요",'점토블록'],
        optionarea17 = ["3단계-세부 품목을 선택해 주세요",'축조블록-곡선형','축조블록(평면용)','축조블록(평면칼라)'],
        optionarea18 = ["3단계-세부 품목을 선택해 주세요",'보강토블록 - 줄무늬','보강토블록 - 민무늬','보강토 마감형 -줄무늬','보강토 마감형 - 민무늬','그리드'],
        optionarea19 = ["3단계-세부 품목을 선택해 주세요",'콘크리트 경계석','녹지 경계블록','인조화강 경계석'],
        optionarea20 = ["3단계-세부 품목을 선택해 주세요",'호안블록(아이블록)','환경생태블록'],
        optionarea21 = ["3단계-세부 품목을 선택해 주세요",'잔디블록','원형잔디블록','조경잔디블록'],
        optionarea22 = ["3단계-세부 품목을 선택해 주세요",'콘크리트 벽돌','속 빈 콘크리드 벽돌'],
        optionarea23 = ["3단계-세부 품목을 선택해 주세요",'가로등 기초'],
        optionarea24 = ["3단계-세부 품목을 선택해 주세요",'가로수보호판 받침틀(인조석)'],
        optionarea25 = ["3단계-세부 품목을 선택해 주세요",'빗물받이 블록'],
        optionarea26 = ["3단계-세부 품목을 선택해 주세요",'PC트렌치'],
        optionarea27 = ["3단계-세부 품목을 선택해 주세요",'레디락블록'],
        optionarea28 = ["3단계-세부 품목을 선택해 주세요",'주철뚜껑(우수/오수/전기/통신)','사각주철(수로용, 닥타일)','조화(디자인)맨홀뚜껑','각종주철(칼라, 정화조, 제수변)'],
        optionarea29 = ["3단계-세부 품목을 선택해 주세요",'무소음트렌치','삼각트렌치'],
        optionarea30 = ["3단계-세부 품목을 선택해 주세요",'그레이팅수로용','그레이팅맨홀(집수정)용','플륨관용(날개형 U Type)','안전아치형(매직)그레이팅','악취차단오물망 그레이팅','앵글(직선앵글)','앵글(절곡앵글)'],
        optionarea31 = ["3단계-세부 품목을 선택해 주세요",'중하중그레이팅 수로용','중하중그레이팅맨홀(집수정)용','안전중하중그레이팅 수로용','안전중하중그레이팅맨홀(집수정)용)'],
        optionarea32 = ["3단계-세부 품목을 선택해 주세요",'디자인그레이팅 수로용','디자인그레이팅 맨홀(집수정)용'],
        optionarea33 = ["3단계-세부 품목을 선택해 주세요",'SUS그레이팅','SUS그레이팅 타공','스틸타공','체크무늬 철판'],
        optionarea34 = ["3단계-세부 품목을 선택해 주세요",'파형강관','파형강관(유공관)','파형강관(내면피복)','파형강관(내면피복)유공관','파형강관(양면피복)','파형강관(양면피복)유공관'],
        optionarea35 = ["3단계-세부 품목을 선택해 주세요",'화강경계도로','화강경계경사','화강경계낮춤'],
        optionarea36 = ["3단계-세부 품목을 선택해 주세요",'험프석','볼라드','계단석','판석','사구석/소포석','화산석','배수(빗물받이)경계석'],
        optionarea37 = ["3단계-세부 품목을 선택해 주세요",'돌망태(개비온)'],
        optionarea38 = ["3단계-세부 품목을 선택해 주세요",'PE이중벽관 1종','PE이중벽관 2종','PE이중벽관 3종','PE이중벽관 1종(유공관)','PE이중벽관 2종(유공관)','PE이중벽관 3종(유공관)','PE이중벽관 KS','이경 소켓'],
        optionarea39 = ["3단계-세부 품목을 선택해 주세요",'PE다중벽관','PE다중벽관(유공관)'],
        optionarea40 = ["3단계-세부 품목을 선택해 주세요",'고강성 PVC이중벽관','고강성 PVC이중소켓'],
        optionarea41 = ["3단계-세부 품목을 선택해 주세요",'PE배수로','PY배수로','PE빗물받이','PE오수받이','PE홈통받이'],
        optionarea42 = ["3단계-세부 품목을 선택해 주세요",'THP주름관','THP유공관'],
        optionarea43 = ["3단계-세부 품목을 선택해 주세요",'PVC관(VG1상수도)','PVC관(VG2 배수관)','PVC소형맨홀','PVC오수받이','PVC상수도 이경소켓','PVC배수관 이경소켓'],
        optionarea44 = ["3단계-세부 품목을 선택해 주세요",'HDPE이중벽관(직관)','HDPE이중벽관(유공관)'],
        optionarea45 = ["3단계-세부 품목을 선택해 주세요",'카스토퍼'],
        optionarea46 = ["3단계-세부 품목을 선택해 주세요",'그레이팅덮개','PE망'],
        optionarea47 = ["3단계-세부 품목을 선택해 주세요",'플라스틱 그레이팅'],
        optionarea48 = ["3단계-세부 품목을 선택해 주세요",'몰탈용 고무시트'],
        optionarea49 = ["3단계-세부 품목을 선택해 주세요",'PE사다리'];

        $("select[name^=1depth]").each(function() {
            $1depth = $(this);
            $.each(eval(optionarea0), function() {
                $1depth.append("<option value='" + this + "'>" + this + "</option>"); //eval쓰면 안됨
            });
            $1depth.next().append("<option value=''>2단계-품목을 선택해 주세요</option>");
        });
    
        // 3단계 메뉴 초기화 후 처음 로드 시 "3단계-세부 품목을 선택해 주세요" 옵션 추가
        $("select[name^=3depth]").append("<option value=''>3단계-세부 품목을 선택해 주세요</option>"); //탈락 꼬일 가능성이 큼 dom
    
        $("select[name^=1depth]").change(function () {
            var area = "optionarea" + $("option", $(this)).index($("option:selected", $(this)));
            var $2depth = $(this).next();
            var $3depth = $2depth.next();
            $("option", $2depth).remove();
            $("option", $3depth).remove();
        
            if (area == "optionarea0") {
                $2depth.append("<option value=''>2단계-품목을 선택해 주세요</option>");
                $3depth.append("<option value=''>3단계-세부 품목을 선택해 주세요</option>");
            } else {
                $.each(eval(area), function () {
                    $2depth.append("<option value='" + this + "'>" + this + "</option>");
                });

                $3depth.append("<option value=''>3단계-세부 품목을 선택해 주세요</option>"); //KCY
            }
        });

    //     하단 내용 추가 KCY
    $("select[name^=2depth]").change(function () {
        var area = "optionarea" + $("option", $(this)).index($("option:selected", $(this)));
        var $3depth = $(this).next();
        $("option", $3depth).remove();
        var area3depth = "optionareaFor3depth" + $("option", $(this)).index($("option:selected", $(this)));

        if (area == "optionarea0") {
            $3depth.append("<option value=''>3단계-세부 품목을 선택해 주세요</option>");
        } else {
            $.each(eval(area3depth), function () {
                $3depth.append("<option value='" + this + "'>" + this + "</option>");
            });
        }
    });
 */

        
    const bannerR = document.querySelector('.BannerR');
    const bannerL = document.querySelector('.BannerL');

    function showRightTab(){
        bannerL.style.width = '385px'; 
        bannerR.style.width = '1126px';
    }

    function showLeftTab(){
        bannerL.style.width = '1126px'; 
        bannerR.style.width = '385px';
    }


    bannerR.addEventListener('mouseover', () => {
        showRightTab();
    });

    bannerR.addEventListener('mouseout', () => {
        if(rightClick == true){
            showRightTab();
        }else{
            showLeftTab();
        }
    });

    bannerL.addEventListener("mouseover", () => {
        showLeftTab();
        rightClick = false;
    })

    $('.bannerButton button').click(function(){
        showRightTab();
        rightClick = true;     
    });

    const scrollHeader = document.querySelector('.scrollHeader');
    const topBtn = document.querySelector('.topBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 200) {
            scrollHeader.style.display = 'block';
        } else {
            scrollHeader.style.display = 'none';
        }
    });

    topBtn.addEventListener('click', () => {
        // 스크롤 맨 위로 이동하는 코드
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    


    $(".btnWrap button").click(function() {
        let index = $(this).index();
        $(this).toggleClass('.active');
        let targetElement = $(".productsName").eq(index);
        $("html, body").animate({
            scrollTop: targetElement.offset().top
        }, 800); 
    });
    
    $('.menuLogo button').click(function(){
        $('.menuNav').show();
        $('.menuLogo').hide();
    });

    $('.menuNav').click(function(){
        $('.menuNav').hide();
        $('.menuLogo').show();
    });






// *********************** 도면보기 click *********************** //
    $('.drawingShow').click(function() {
        var $closestBestPrdWidth = $(this).closest('.bestPrdWidth');
        // Check if .drawing is currently visible within the same .bestPrdWidth
        var isDrawingVisible = $closestBestPrdWidth.find('.drawing:visible').length > 0;
        
        // Hide all visible .drawing elements
        $('.drawing:visible').hide();
        
        // If the clicked .drawingShow is within the same .bestPrdWidth and .drawing was visible, don't show it again
        if (!isDrawingVisible || !$closestBestPrdWidth.is('.drawingShow')) {
            $closestBestPrdWidth.find('.drawing').show();
        }
    });
    
    $('.drawingHide').click(function() {
        $(this).closest('.drawing').hide();
    });









// *********************** 시공사진보기 click *********************** //
    $('.sigongShow').click(function() {
        var $closestBestPrdWidth = $(this).closest('.bestPrdWidth');
        // Check if .drawing is currently visible within the same .bestPrdWidth
        var isDrawingVisible = $closestBestPrdWidth.find('.sigong:visible').length > 0;
        
        // Hide all visible .drawing elements
        $('.sigong:visible').hide();
        
        // If the clicked .drawingShow is within the same .bestPrdWidth and .drawing was visible, don't show it again
        if (!isDrawingVisible || !$closestBestPrdWidth.is('.sigongShow')) {
            $closestBestPrdWidth.find('.sigong').show();
        }
    });
    
    $('.sigongHide').click(function() {
        $(this).closest('.sigong').hide();
    });


   /*  document.addEventListener("DOMContentLoaded", function() {
        const drawingShowButtons = document.querySelectorAll(".drawingShow");
        
        drawingShowButtons.forEach(function(button) {
            button.addEventListener("click", function() {
                const parentBestPrdWidth = button.closest(".bestPrdWidth");
                const drawing = parentBestPrdWidth.querySelector(".drawing");
                
                if (drawing) {
                    // drawing 요소의 display 속성을 토글하여 보이게 하거나 숨기기
                    if (drawing.style.display === "none") {
                        drawing.style.display = "block";
                    } else {
                        drawing.style.display = "none";
                    }
                }
            });
        });
    }); */


/*     $('.list-member, .bar, borderBox').hide(); */
    /* $('.list-memberShow, .showBar').show(); */

   
    

    /* // A 목록이 열려있고 B목록을 클릭했을 경우
    $('.btn-select').click(function() {
        const parentArticle = $(this).closest('.cont-select');

        // 몇번째 cont-select인지 구합니다.
        const listMember = parentArticle.find('.list-member');
        console.log(listMember.text());

        const isListVisible = !(listMember.is(':visible'));
        
        // A 목록을 닫습니다.
        $('.list-member:visible').each(function() {
            // 클릭한 버튼과 검사하고자하는 버튼이 같지 않아야한다(같으면 B목록)
            if ($(this).parent().index() != parentArticle.index()) {
                // A 목록을 닫습니다.
                $(this).slideUp();
                
                // A목록에 해당하는 .bar 요소를 토글하고 .btnHover 클래스를 조절합니다.
                const otherBar = $(this).find('.bar');
                otherBar.toggle(false);
                $(this).parent().find('.btn-select').toggleClass('btnHover', false);
            }
        });
    
        // 클릭한 버튼에 해당하는 목록을 슬라이드로 열거나 닫습니다.
        listMember.slideToggle();
    
        // 클릭한 버튼에 해당하는 .bar 요소를 토글하고 .btnHover 클래스를 조절합니다.
        const bar = $(this).find('.bar');
        bar.toggle(isListVisible);
        $(this).toggleClass('btnHover', isListVisible);

        console.log('완')
    }); */


});






