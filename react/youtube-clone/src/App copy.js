// src/App.js
import React, { useState } from 'react';
import styles from './App.module.css';
import Layout from './components/shared/Layout';

function App() {
  const [toggle, setTog] = useState(true);
  function onClick() {
    setTog(!toggle);
  }

  const [color, setColor] = useState('blue');
  function onClickColor() {
    if (color === 'blue') setColor('red');
    else setColor('blue');
  }

  
  return (
    <Layout>
      <div>콘텐츠!</div>
      {true && <div>True일 때 출력되는 메세지</div>}
      {false && <div>False일 때 출력되는 메세지</div>}

      <button onClick={onClick}>tog</button>
      {toggle===true && <div>True일 때 출력되는 메세지</div>}
      {toggle===false && <div>False일 때 출력되는 메세지</div>}

      <button onClick={onClickColor}>toggle color</button>
      {/* 그냥 App.css 사용시 */}
      {/* <div className={color === 'blue' ? "blue" : "red"}>{(color === 'blue') ? 'True임' : 'False임'}</div> */}
      <div className={styles.box +' '+ (color === 'blue' ? styles.blue : styles.red)}>{(color === 'blue') ? 'True임' : 'False임'}</div>
    </Layout>
  );
}

export default App;