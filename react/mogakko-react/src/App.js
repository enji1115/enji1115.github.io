// src/App.js

// 컴포넌트 불러오기
import React from 'react';
import Bye from './Bye';
import Hello from './Hello';

// 컴포넌트 사용
function App() {
  return (
    <div>
      <Hello />
      <Bye />
    </div>
  );
}

export default App;