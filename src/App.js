/* eslint-disable */
// warning message 그냥 무시해도 되지만, 거슬린다면 최상단에 이 코드 첨부
// lint 꺼주는 기능 
// 처음에는 warning에 신경 쓰기보다는 코드를 직접 짜고 확인하는게 훨씬 중요함!

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // 자료 잠깐 저장할 때 는 변수 사용 (let, var, const)
  let post = '은행동 점심 추천';
  let id = 'id변수';
  // 1. import{useState}
  // 2. useState(보관할 자료)
  // 3. let[작명, 작명]
  // a : state에 보관해둔 자료 
  // b : state 변경을 도와주는 함수

  // 새로운 문법을 배웠으면 그게 왜 필요한지, 차이점이 뭔지에 대해 생각 해봐야함
  // state를 사용하는 html은 값이 바뀌면 자동으로 재랜더링 됨.
  // => state 변동시 자동으로 html에 반영되게 만들고 싶을 때 사용한다.
  // * 자주 변경 되는 html 부문은 state로 만들어 놓기 *
  // Array에서 인덱싱 번호로 원하는 값만 보이게 하기 
  let [title, content] = useState(['아이스 아메리카노', '카페라떼', '생딸기 라떼']);
  // 사이트 로고처럼 잘 바뀌지 않는 값은 굳이 state를 사용할 필요 없음. (변수 또는 하드코딩)
  let [logo, setLogo] = useState('React Blog');
  let [like, plus] = useState(0);
  let [bread] = useState('소금빵');

  // Javascript Destructuring 문법 (오른쪽 왼쪽 형태 맞춤으로 값 할당)
  // Array 자료 : 여러가지 자료를 한 곳에 보관하고 싶을 때 사용
  let num = [1,2];
  // let a = num[0];
  // let b = num[1];
  let [a, b] = [1, 2];
  // Array에서 원하는 자료를 뽑는 문법

  // Vanilla JS Code
  // document.querySelector('h1').innerHTML = post;

  // 함수 : 긴 Javascript 코드를 한 단어로 묶어주는 문법
  // state 변경은 등호로 하지 않는다.

  return (
    <div className="App">
      <div id={id}>
        <h4 className='black-nav' style={{color: 'red', fontSize : '22px'}}>{logo}</h4>
      </div>
      <div className="list">
        <h4>{title[0]} <span onClick={()=>{plus(like + 1)}}>👍</span> {like}</h4>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="list">
        <h4>{title[1]} <span onClick={()=>{
          let copy = [...title];
          copy[1] = '소금빵!'
          console.log(copy == title);
          content(copy);

        }}>😊</span></h4>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      {/* <h1>{post}</h1> */}
      <button className='array-btn' onClick={()=>{
        let arrayCopy = [...title];
        arrayCopy.sort();
        content(arrayCopy);
      }}>가나다순 정렬</button>
    </div>
  );
}

export default App;