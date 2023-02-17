/* eslint-disable */
// warning message 그냥 무시해도 되지만, 거슬린다면 최상단에 이 코드 첨부
// lint 꺼주는 기능 
// 처음에는 warning에 신경 쓰기보다는 코드를 직접 짜고 확인하는게 훨씬 중요함!

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Menu from './pages/Menu';
import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import About from './pages/About'
import Counter from './pages/Couter';
import Input from './pages/Input';
import Input2 from './pages/Input2';
import List from './pages/List';

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
  let [title, content] = useState(['아이스 아메리카노', '카페라떼', '생딸기 라떼', '초코라떼']);
  // 사이트 로고처럼 잘 바뀌지 않는 값은 굳이 state를 사용할 필요 없음. (변수 또는 하드코딩)
  let [logo, setLogo] = useState('React Blog');
  let [like, plus] = useState(0);
  let [likes, plusList] = useState([0,0,0,0,0]);
  let [bread] = useState('소금빵');

  // Javascript Destructuring 문법 (오른쪽 왼쪽 형태 맞춤으로 값 할당)
  // Array 자료 : 여러가지 자료를 한 곳에 보관하고 싶을 때 사용
  let num = [1,2];
  // let a = num[0];
  // let b = num[1];
  let [a, b] = [1, 2];
  // Array에서 원하는 자료를 뽑는 문법

  // map() 함수 : Array의 갯수만큼 함수안의 코드를 실행 해준다
  // 콜백 함수 : 소활호 안에 들어가는 함수
  [1,2,3].map(function(a){
    // 함수의 파라미터는 array 안에 있는 자료
    // return에 뭐 적으면 array로 담아준다
    return '142424'
    console.log(a)
  })

  // Vanilla JS Code
  // document.querySelector('h1').innerHTML = post;

  // 함수 : 긴 Javascript 코드를 한 단어로 묶어주는 문법
  // state 변경은 등호로 하지 않는다.

  // 더러운 HTML 코드를 한 단어로 축약하고 싶을 때 사용
  // Component 만들기 다른 함수 바깥에 함수 만들기 & 대문자
  // return() 안에 html담기
  // return 안에서는 하나의 태그로 시작해서 하나의 태그로 끝나야 한다
  // 두개의 div를 병렬적으로 넣으면 안됨
  // 오른쪽에 state변경 함수는 앞에 set을 붙여서 작명하는게 일반적인 관습. (필수 X)
  // UI의 현재 상태를 state로 저장 => 형식은 자유(모달창 상태만 표현 가능하면 됨)
  let [modal, setModal] = useState(false);
  function Modal() {
    return (
      //  div들을 하나로 묶어야할 때 의미없는 div대신 <> </> 사용가능
      <>
        <div className="modal">
          <h4>제목 </h4>
          <p>날짜</p>
          <p>상세내용</p>
        </div>
        <div></div>
      </>
    )
  }

  function Index() {
    return (
      <div className="list">
        <h4 onClick={()=>{setModal(!modal)}}>{title[0]}</h4>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    )
  }

  return (
    <div className="App">
      <nav>
        <Link to="/">HOME</Link> | <Link to="/about">ABOUT</Link> | <Link to="/counter">Counter </Link>  
        | <Link to="/input">Input</Link> | <Link to="/input2">Input2</Link> | <Link to="/list">List</Link>
        {/* <a href="">HOME</a> */}
      </nav>
      {/*
      react router DOM install : npm install react-router-dom
      Routes: Route의 묶음
      브라우저가 바뀔 때 마다 어떤 Component를 Mapping해서 보여줄건지 정의 
      */}
      <Routes>
        <Route path='/' element={<Menu/>}></Route>
        {/* About이라는 리액트 컴포넌트 호출 */}
        <Route path='/about' element={<About/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/counter' element={<Counter/>}></Route>
        <Route path='/input' element={<Input/>}></Route>
        <Route path='/input2' element={<Input2/>}></Route>
        <Route path='/list' element={<List/>}></Route>
      </Routes>
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
        {/* modal = useState(true); 동작하지 않는 이유 => state 변경함수 사용 */}
        <h4 onClick={() => {setModal(!modal)}}>{title[2]}</h4>
        {
          modal == true ? <Modal/> : null
        }
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <Index/>
      {
        modal == true ? <Modal/> : null
      }
      <Index/>
      {/* React Component 
        어떤걸 컴포넌트로 만들면 좋은가?
        1. 반복적인 html 축약할 때
        2. 큰 페이지들
        3. 자주 변경되는 HTML UI
      */}

      {/* <Modal></Modal> */}
      {
        // HTML 중간에 조건문 쓰려면 삼항= 연산자"로 작성 해야함.
        // 조건식 ? 참일 때 실행 코드 : 거짓일 때 실행 코드
        // 1 == 2 ? '맞음' : '아님'
        // modal == true ? <Modal/> : null
      }

      {
        // 두번째 파라미터는 반복문이 돌 때 마다 0부터 1씩 증가하는 정수
        title.map(function(a, i){
          return (
            <div className="list">
              {/* <h4>{a}</h4> */}
              <h4>{title[i]} 
              <span onClick={()=>{
                let copy = [...likes];
                copy[i] = copy[i] + 1;
                plusList(copy);
              }}>👍</span> {likes[i]}</h4>
              <p>02월 17일 발행</p>
            </div>
          )
        })
      }

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