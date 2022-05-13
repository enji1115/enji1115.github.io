// src/Calc.js
import styles from './Calc.module.scss';

function Calc({ num }) {
    let calc = ``;
    for (let i = 1; i < 10; i++) {
        calc += `<li>${num}*${i}=${num*i}</li>`;
    }
    console.log(calc);
    return <ul className={"calc "+ styles.calc} dangerouslySetInnerHTML={{__html: calc.replace(/ /g, "\u00a0")}}></ul>;
}

export default Calc;