$(function(){
  const width = 1200; //slider 크기
  img_num = 0; //이미지 재생변수
  //위치조정 공식: widrh * 이미지 번호(0,1,2,3,4,...)
  function playSlider (num){
    let x = -(width * num); //위치조정 공식
    $('.sliders').css({
      Transform: `translatex(${x}px)`
    })
  }
  playSlider(img_num);

  //자동재생
  setInterval(function(){
    img_num++; //다음 이미지번호
    if(img_num > 2) img_num = 0;
    console.log(img_num);
    playSlider(img_num);
  }, 4000);
});




var obTimeOut; // clearTimeout() 함수를 이용하여 Timeout 을 취소하기위해 사용됨
var ObjectArray = new Array ();
ObjectArray[1] = "i01.jpg";
ObjectArray[2] = "i02.jpg";
ObjectArray[3] = "i03.jpg";

var nObjectCnt = 0;

function ShowDefaultRotate(){ // 스스로 자신을 호출하는 재귀함수 (Recursive Function)
  nObjectCnt++;	
  if( nObjectCnt < ObjectArray.length ){  // 배열의 갯수 이내일때만 실행	
    document.getElementById("sliders").src = ObjectArray[nObjectCnt];
    obTimeOut = setTimeout("ShowDefaultRotate()",1000); // 1초후에 자기자신을 호출 	
  }	else {clearTimeout(obTimeOut);} // 배열의 갯수만큼 반복하여 변환시킨 후에는 Timeout 을 중지시킨다 
}

function startAnimation(){
  obTimeOut = window.setTimeout(ShowDefaultRotate,100);
}
window.onload = startAnimation;