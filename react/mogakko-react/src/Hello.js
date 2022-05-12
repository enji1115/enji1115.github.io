// src/Hello.js

// CSS 불러오기
// import './App.css';

// CSS 모듈 불러오기
import styles from './Hello.module.css';

function Hello() {
    // return <div className="title">Hello, React!</div>;
    return <div className={styles.title}>Hello, React!</div>;
}

export default Hello;