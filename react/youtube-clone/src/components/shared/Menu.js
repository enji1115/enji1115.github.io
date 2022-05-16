// src/components/shared/Menu.js
import { Link } from 'react-router-dom';
// 주소 값과 컴포넌트를 연결할 때 Route 컴포넌트를 사용
// 페이지 이동은 Link 컴포넌트를 사용 / Link 컴포넌트의 to 속성에 우리가 이동할 주소 값 넣기
// import styles from './Menu.module.css';

function Menu() {
  return (
    <div>
      <div>
        <Link to="/">홈</Link>
      </div>
      <div>
        <Link to="/explore">탐색</Link>
      </div>
      <div>
        <Link to="/subscription">구독</Link>
      </div>
      <div>
        <Link to="/assignment">과제</Link>
      </div>
    </div>
  );
}

export default Menu;