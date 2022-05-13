// src/App.js

// 컴포넌트 불러오기
import React, { useState } from 'react';
import Button from './Button';
import Layout from './Layout';
import Calc from './Calc';

// 컴포넌트 사용
function App() {
  const [number, setNumber] = useState(0);
  function onClickIncrease() {
    setNumber(number + 1);
  }
  function onClickDecrease() {
    setNumber(number - 1);
  }
  function onClickMultiple() {
    setNumber(number * 2);
  }

  return (
    <Layout>
      <Calc num={number} />
      <Button onClick={onClickIncrease} text="+1" />
      <Button onClick={onClickDecrease} text="-1" />
      <Button onClick={onClickMultiple} text="*2" />
    </Layout>
  );
}

export default App;