import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Test from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// [실행방법]
// 1. npm run start
// 인데 이렇게 실행하면 React의 불필요한 기능까지 로드하여 소스가 무거워짐
// 이를 해결하기 위해 빌드를 만듦
// 2. npm run build
// 이고 이를 실행하기 위해 serve라는 걸 다운받음(npm install -g serve)
// -> npx serve -g build
// 다운받은 serve를 사용하여 빌드를 한 번만 실행