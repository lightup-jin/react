import React, {useState} from "react";

const Input = () => {

  // 초기값을 빈 배열
  const [txtValue, setTxtValue] = useState('');

  const onChange = (e) => {
    setTxtValue(e.target.value)
  }

  return (
    <div>
      <div>
          <label>이름</label>
      </div>
      <input type="text" value={txtValue} onChange={onChange}/>
      <br />
      <p>{txtValue}</p>
    </div>
  )
}

export default Input;