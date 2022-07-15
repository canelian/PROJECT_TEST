$(function(){
 $('#search').click(function(){
  // 열기
   $('#sear').addClass('inquiry');
 });
 // 닫기
 $('#search-close').click(function(){
     $('#sear').removeClass('inquiry');
 })
});

$(function(){
   // 1. 열기: #toggle-gnb 클릭시 #gnb on
  $('#toggle-gnb').click(function(){
    $('#gnb').addClass('on');
  });
  // 2. 닫기: #btn-close 클릭시 #gnb 닫음
  $('#btn-close').click(function(){
      $('#gnb').removeClass('on');
  })
});

function getData() {
fetch('https://raw.githubusercontent.com/csslick/animal-mobile/main/animal-data.json')
.then(function(res){
      return res.json(); // json 객체 변환
    })
    .then(function(obj){
      showAnimals(obj)
    });
      // 최종 데이터 출력(object)
      // console.log(obj);
      let name = obj[0].name;
      let category = obj[0].category;
      /*console.log(`name = ${name}`);
      console.log(`catagory = ${category}`);*/
     /* let imgUrl = obj[0].imgUrl;*/

      for(let i = 0; i < obj.length; i++) {
        console.log(`동물데이터${i}`)
        let html = `
          <div class="col">
            <img src=${obj[i].imgUrl} alt="dog01">
            <p class="name">${obj[1].name}</p>
          </div>
          `
        $('.row').append(html);
      }
}
      
      function showAnimals(obj){
          //  console.log(animal.name);
          // 카테고리구분 dog | cat | bird
          // URL 파라미터(매개변수)
        const query = location.search;
        console.log(query);
          // new URLSearchParams(query);
          // ?URL query문을 object(변수)로 변경
        const params = new URLSearchParams(query).get('category');
        if(params == null){
            params = 'dog'
        }
        console.log(params);
          // let string = 'category=cat'; // 문자열
          // let category = "cat"; // 변수형
          // forEach() 반복문
        obj.forEach(function(animal){
          // 동물 데이터 출력
          if(params == animal.category){
            /*console.log('params = ', params);
            console.log(animal.category);*/
            
            let html = `
              <div class="col">
                <img src=${animal.imgUrl} alt="name">
                <p class="name">${animal.name}</p>
              </div>`
            $('.row').append(html);
          }
        });
      }