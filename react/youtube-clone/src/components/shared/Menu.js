// src/components/shared/Menu.js
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';
// https://react-icons.github.io/react-icons/
import { TiHome } from 'react-icons/ti';
import { FaRegCompass, FaPencilAlt } from 'react-icons/fa';
import { MdSubscriptions } from 'react-icons/md';

function Menu({activeMenu}) {
  console.log('현재 활성화된 메뉴 : ', activeMenu);
  return (
    <div className={'menu '+ styles.menu}>
      <Link 
        to="/" 
        className={activeMenu === 'home' ? styles.focused : styles.link}>
        <TiHome className={styles.icon} />홈
      </Link>
      <Link 
        to="/explore" 
        className={activeMenu === 'explore' ? styles.focused : styles.link}>
        <FaRegCompass className={styles.icon} />
        탐색
      </Link>
      <Link 
        to="/subscription"
        className={activeMenu === 'subscription' ? styles.focused : styles.link}>
        <MdSubscriptions className={styles.icon} />
        구독
      </Link>
      <Link 
        to="/assignment" 
        className={activeMenu === 'assignment' ? styles.focused : styles.link}>
        <FaPencilAlt className={styles.icon} />
        과제
      </Link>
    </div>
  );
}

export default Menu;