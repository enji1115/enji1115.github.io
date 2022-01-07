var name = 'k8805';
// String literals (문자 리터럴) (1과 같이 변하지 않는 데이터(boolean, char, int ...)를 리터럴(literal)이라고 부른다.)
// 줄바꿀 때 \ 하고 엔터 \ 하면 되는데 이거랑 같은게 \n\n 적는 것
var letter = 'Dear ' + name + '\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' + name + ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa egoing qui officia deserunt mollit anim id est laborum. ' + name;

// Template literals (템플릿 리터럴)
var letter = `Dear ${name}
 
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ${name} Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ${1 + 1} Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa egoing qui officia deserunt mollit anim id est laborum. ${name}`;

console.log(letter);

// 이 좋은 걸 이제 알았네...,, 지금이라도 알아서 다행이다..,ㅋㅋ