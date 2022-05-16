// src/pages/Assignment.js
import React, { useState } from 'react';
import Layout from '../components/shared/Layout';
import styles from './Assignment.module.css';

function Explore() {
    const [color, setColor] = useState('blue');
    function onClickColor() {
      if (color === 'blue') setColor('red');
      else setColor('blue');
    }

    return (
        <Layout activeMenu="assignment">
            <div>* 과제</div>
            <div className={styles.box +' '+ (color === 'blue' ? styles.blue : styles.red)}>
                {(color === 'blue') ? 'True에옹~' : 'False에옹~'}
            </div>
            <button onClick={onClickColor}>색 바꾸기!</button>
        </Layout>
    );
}

export default Explore;