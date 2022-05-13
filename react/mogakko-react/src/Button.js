// src/Button.js

// 기본
// function Button(props) {
//     return <button onClick={props.onClick}>{props.text}</button>;
// }

// 비구조화 할당
function Button({ text, onClick }) {
    return <button onClick={onClick}>{text}</button>;
}

export default Button;