// 상품 db
const items = [
  {
    imgUrl: 'https://placeimg.com/200/250/people/1',
    title: '상품 1',
    price: '100,000원'
  },
  {
    imgUrl: 'https://placeimg.com/200/250/people/2',
    title: '상품 2',
    price: '130,000원'
  },
  {
    imgUrl: 'https://placeimg.com/200/250/people/3',
    title: '상품 3',
    price: '99,000원'
  },
  {
    imgUrl: 'https://placeimg.com/200/250/people/4',
    title: '상품 4',
    price: '239,800원'
  },
];

// html items영역에 상품 업데이트 해보기
$(function(){
  for(let i = 0; i < items.length; i++) {
    let item = `
    <div class="item col">
      <img src=${items[i].imgUrl} alt="">
        <div class="info">
          <p class="item-title">${items[i].title}</p>
          <p class="item-price">${items[i].price}</p>
        </div>
    </div>
    `;
    console.log(items[i]);
    // html로 만들어서 상품목록 추가
    $('#products .items').append(item);
  }
})

