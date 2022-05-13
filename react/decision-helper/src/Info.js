// src/Info.js

// CSS 불러오기
import './Scss.scss';

// CSS 모듈 불러오기
import styles from './Info.module.css';

function Info() {
    return (
        <section className="intro">
            <h2 className={"tit " + styles.tit}>랜덤 도구</h2>
            <p className='txt'>결정을 하지 못하는 상황에서 빠르게 사용하는 랜덤 도구</p>
        </section>
    );
}

export default Info;