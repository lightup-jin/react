import React, {useState} from "react";

const Input2 = () => {
  // 여러개일 경우 object 형태로 관리 object {key : value}
  const [inputs, setInputs] = useState({
    name:"",
    email:"",
    tel:""
  });
  
  const {name, email, tel} = inputs;

  const onChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;

    // 리액트가 인지할 수 있는 방법으로 값을 변경시켜 줘야한다
    // inputs[id] = value;
    setInputs({
      // ES6문법(deep copy) Object를 복사해서 새로운 Object를 생성한다.
      ...inputs,
      // name:"",
      // email:"",
      // tel:""
      [id] : value
    });
  }

  return (
    <div>
      <div>
        <label>이름</label>
        <input type="text" id="name" value={name} onChange={onChange}/>
      </div>
      <div>
        <label>이메일</label>
        <input type="email" id="email" value={email} onChange={onChange}/>
      </div> 
      <div>
        <label>전화번호</label>
        <input type="tel" id="tel" value={tel} onChange={onChange}/>
      </div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Tel: {tel}</p>
    </div>
  )
}

export default Input2;