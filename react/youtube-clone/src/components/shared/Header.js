// src/components/shared/Header.js
import {React, useState} from 'react';
import styles from './Header.module.css';
import youtube_logo from '../../data/youtube_logo.png';
import { FiMenu } from 'react-icons/fi';
import { IoSearchOutline } from 'react-icons/io5';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { HiOutlineDotsVertical } from 'react-icons/hi';

function Header() {
    const [hamVal, setHamVal] = useState('on');
    const root = document.getElementById('root');
    function hamTog() {
        if (hamVal === 'on') {
            root.classList.add('menuOff');
            setHamVal('off');
        } else {
            root.classList.remove('menuOff');
            setHamVal('on');
        }
    }

    return (
        <div className={styles.header}>
            <div className={styles.tab}>
                <button type='button' className={styles.btn_ham} onClick={hamTog}>
                    <FiMenu className={styles.icon} />
                </button>
                <img src={youtube_logo} alt="로고" className={styles.logo} />
            </div>
            <div className={styles['center-tab']}>
                <input className={styles.input} />
                <IoSearchOutline className={styles['search-icon']} />
            </div>
            <div className={styles.tab}>
                <BsGrid3X3Gap className={styles.icon} />
                <HiOutlineDotsVertical className={styles.icon} />
            </div>
        </div>
    );
}

export default Header;