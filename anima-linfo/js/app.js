
/*const url = 'https://raw.githubusercontent.com/csslick/animal-mobile/main/animal-data.json'*/
fetch('https://raw.githubusercontent.com/csslick/animal-mobile/main/animal-data.json')
.then(function(res){
      return res.json(); // json 객체 변환
    })
    .then(function(obj){
      showAnimals(obj)
    });
      // 최종 데이터 출력(object)
      // console.log(obj);
      /*let name = obj[0].name;
      let category = obj[0].category;*/
      /*console.log(`name = ${name}`);
      console.log(`catagory = ${category}`);*/
     /* let imgUrl = obj[0].imgUrl;*/

      /*for(let i = 0; i < obj.length; i++) {
        console.log(`동물데이터${i}`)
        let html = `
          <div class="col">
            <img src=${obj[i].imgUrl} alt="dog01">
            <p class="name">${obj[1].name}</p>
          </div>
          `
        $('.row').append(html);
      }*/
      
      function showAnimals(obj){
        // forEach() 반복문
        obj.forEach(function(animal){
          //  console.log(animal.name);
          // 카테고리구분 dog | cat | bird
          // URL 파라미터(매개변수)
          const query = location.search;
          console.log(query);
          // new URLSearchParams(query);
          // ?URL query문을 object(변수)로 변경
          const params = new URLSearchParams(query).get('category');
          console.log(params);
          // let string = 'category=cat'; // 문자열
          // let category = "cat"; // 변수형
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

    

    /*
      파라미터를 전달하여 요청하기
      홈페이지주소? name = 홍길동
        매개변수(URL parameter) name = '홍길동'

        index.html -> index.html?category=dog -> 개 보여주시오
        cat.html -> bird.html?category=bird -> 새 보여주시오
    */