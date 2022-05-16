// src/App.js
import React, { useState } from 'react';
import Layout from './components/shared/Layout';

function App() {
  const [toggle, setTog] = useState(true);
  function onClick() {
    setTog(!toggle);
  }

  
  return (
    <Layout>
      <div>콘텐츠!</div>
      {true && <div>True일 때 출력되는 메세지</div>}
      {false && <div>False일 때 출력되는 메세지</div>}

      <button onClick={onClick}>tog</button>
      {toggle===true && <div>True일 때 출력되는 메세지</div>}
      {toggle===false && <div>False일 때 출력되는 메세지</div>}
    </Layout>
  );
}

export default App;