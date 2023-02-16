import React, {useState} from "react";

const Counter = () => {
  // 배열 
  // 첫번째 num = useState 담긴 기본값 0을 가지는 변수 const num = 0과 동일
  // 앞에있는 num값을 세팅할 수 있는 Setter Function의 이름이 setNumber
  const [num, setNumber] = useState(0);

  const increase = () => {
    setNumber(num + 1);
    // num = num + 1; 
  }

  const decrease = () => {
    setNumber(num - 1);
  }

  return (
    <div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <p>{num}</p>
    </div>
  )
}

export default Counter;