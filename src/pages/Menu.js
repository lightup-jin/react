import React from "react";
 
// 함수형 컴포넌트
// 최근 트렌트 : 함수형 컴포넌트를 많이 이용한다.
// 컴포넌트의 이르믕ㄹ 항상 대문자로 시작해야 된다.
// WHY? 리액트는 소문자로 시작하는 컴포넌트를 DOM태그로 인식하지 않는다. 
const Menu = () => {
  return <h1>Home 화면 입니다.</h1>
}

export default Menu;


// 클래스형 컴포넌트
// import React, {Component} from "react";
// class menu extends Component {
//   render() {
//     return <h1>메뉴판2</h1>
//   }
// }

// export default menu;