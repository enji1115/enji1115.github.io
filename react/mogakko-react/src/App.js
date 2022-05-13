// src/App.js

// 컴포넌트 불러오기
// import React from 'react';
// import { useState } from 'react';
// ㄴ> 합체
import React, { useState } from 'react';
import Bye from './Bye';
import Hello from './Hello';

// 컴포넌트 사용
function App() {
  const [number, setNumber] = useState(0);
  function onClick() {
    setNumber(number + 1);
  }

  // var로 변수를 선언하게 되면 변수값 자체는 증가하지만,
  // 상태는 변경되지 않아 리렌더링이 일어나지 않는다.
  var number_var = 1;
  function onClickVar() {
    number_var += 1;
    console.log(number_var);
  }

  const [calc, setCalc] = useState(0);
  function onClickCalcAdd() {
    setCalc(calc + 1);
  }
  function onClickCalcSub() {
    setCalc(calc - 1);
  }
  function onClickCalcMtp2() {
    setCalc(calc * 2);
    console.log(calc);
  }

  return (
    <div>
      <Hello />

      <div>
        <div>값 : {number}</div>
        <button onClick={onClick}>+1</button>

        <div>값_var : {number_var}</div>
        <button onClick={onClickVar}>+1</button>

        <div>값_Calc : {calc}</div>
        <button onClick={onClickCalcSub}>-1</button>
        <button onClick={onClickCalcAdd}>+1</button>
        <button onClick={onClickCalcMtp2}>*2</button>
      </div>

      <Bye />
    </div>
  );
}

export default App;