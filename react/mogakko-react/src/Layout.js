// src/Layout.js
import styles from './Layout.module.css';

// children 속성은 다른 속성들이 컴포넌트 태그에서 값을 대입하는 것과는 다르게,
// 자식 태그를 값으로 갖게 된다.
function Layout({ children }) {
    return <div className={styles.container}>
        {children}
    </div>;
}

export default Layout;