$(function(){
  // 모든 이미지 fade Out 
  $('.slider img').fadeOut(0);
  // 첫번째(현재) 이미지 fade In
  $('.slider img').eq(0).fadeIn(0);

  // 다음 이미지 보기
  let imgCount = 0; // 이미지 번호
  $('.nextBtn').click(function(){
    if(imgCount < 2){
      imgCount++; // 이미지 번호증가
      console.log(imgCount);
      changeSlider(imgCount);
    }
  });

  $('.prevBtn').click(function(){
    // 여기 수정
    if(imgCount > 0){
      imgCount--; // 이미지 감소
      console.log(imgCount);
      changeSlider(imgCount);
    }
  });


// 자동재생
// 4초마다 재생
  setInterval(function(){
    imgCount++;
    if(imgCount > 2){
      imgCount = 0;
    }
    console.log(imgCount);
    changeSlider(imgCount);
  }, 4000);

  updatorIndicator(imgCount);
});

// 이미지 번호 -> 이거 전역 변수로 변경
let imgCount = 0; 

// 하단 인디게이터 버튼을 누르면 해당 이미지(번호) 함수
function changeSlider(num){
  imgCount = num // 이미지번호 업데이트(인디케이터, arrow)
  $('.slider img').fadeOut(1000).eq(num).fadeIn(1000);
  // console.log('111');
}

// imgCount 번호 = 인디케이터 번호(스타일 변경)
function updatorIndicator(num) {
  imgCount = num
  // 인디케이터 스타일 초기화
  $('.indicator a').css('color', 'black');
  $('.indicator a').eq(imgCount).css('color', 'red');
}



