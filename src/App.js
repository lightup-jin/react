/* eslint-disable */
// warning message 그냥 무시해도 되지만, 거슬린다면 최상단에 이 코드 첨부
// lint 꺼주는 기능 
// 처음에는 warning에 신경 쓰기보다는 코드를 직접 짜고 확인하는게 훨씬 중요함!

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from "react";
import {Routes, Route, Link} from "react-router-dom";


function App() {
  let id = 'id변수';
  let [title, content] = useState(['아이스 아메리카노', '카페라떼', '생딸기 라떼', '초코라떼']);
  let [logo, setLogo] = useState('React Blog');
  let [like, plus] = useState(0);
  let [likes, plusList] = useState([0,0,0,0,0]);
  let [bread] = useState('소금빵');


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
      <div id={id}>
        <h4 className='black-nav' style={{color: 'red', fontSize : '22px'}}>{logo}</h4>
      </div>

      <div className="list">
        <h4>{title[0]} <span onClick={()=>{
          plus(like + 1)
        }}>👍</span> {like}</h4>
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
        title.map(function(a, i){
          return (
            <div className="list">
              <h4>{title[i]} 
              <span onClick={()=>{
                let copy = [...likes];
                copy[i] = copy[i] +  1;
                plusList(copy);
              }}>👍</span> {likes[i]}</h4>
              <p>Lorem ipsum dolor sit amet.</p>
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