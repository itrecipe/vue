const data = [
  {
    id: 0,
    title: "노량",
    year: 2023,
    category: "액션, 드라마",
    // textRed: "color: red",
    like: 0,
    imgUrl: "./assets/노량.png",
    theaters: [
      { name: "강남 CGV", latitude: 37.497911, longitude: 127.027618 },
      { name: "잠실 롯데시네마", latitude: 37.513011, longitude: 127.100106 },
    ],
  },
  {
    id: 1,
    title: "아쿠아맨 & 로스트 킹덤",
    year: 2024,
    category: "액션, 드라마, 어드벤쳐",
    like: 0,
    imgUrl: "./assets/아쿠아맨(메라).png",
    theaters: [
      { name: "홍대 메가박스", latitude: 37.556871, longitude: 126.923623 },
      { name: "신촌 CGV", latitude: 37.555077, longitude: 126.936869 },
    ],
  },
  {
    id: 2,
    title: "3일의 휴가좀 주세요!",
    year: 2023,
    category: "판타지, 드라마",
    like: 0,
    imgUrl: "./assets/3일의 휴가.png",
    theaters: [
      { name: "코엑스 메가박스", latitude: 37.510754, longitude: 127.058318 },
    ],
  },
];

export default data; // 대표적인 데이터 하나만 내보낼때는 default 키워드를 붙여서 사용한다.

/* export { data }; 여러 데이터를 내보내야 할때는 이 코드를 쓰면 된다.
   
   ex) export { data, data1, data2 }
*/

/* 외부로 데이터를 꺼내보기 위해 작성한 예시 코드 
let food = "mango";
let city = "seoul";

export { food, city };
*/

/* export로 미리 만들어둔 food 변수를 밖으로 내보낼수 있다.
   사용방법은 export { 내보낼 변수명 }
*/
