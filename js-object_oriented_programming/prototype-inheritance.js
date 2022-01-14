// JS가 어떻게 상속 받는 방법
// super객체가 있음 / 기능을 추가하고 싶은 sub객체가 있음
// sub객체는 super객체에게서 직접 기능을 상속받을 수 있음
    // 상속받는 링크를 prototype link라고 함
    // prototype link에 연결된 객체를 prototype object라고 함


// 전통적으로 상속받는 방법
var superObj = {superVal:'super'};
/*
var subObj = {subVal:'sub'};
subObj.__proto__ = superObj; // 원형이 무엇인지 지정
*/
// __proto__의 대체재 / 위의 주석된 코드와 같음
var subObj = Object.create(superObj);
subObj.subVal = 'sub';
debugger;
console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);
subObj.superVal = 'subsub';
console.log('superObj.superVal =>', superObj.superVal);
console.log('subObj.superVal =>', subObj.superVal);


// 객체를 통해 상속을 직접 받는 방법
var kim = {
    name:'kim',
    first:10, second:20,
    sum:function(){return this.first+this.second}
}
console.log('kim.sum() : ', kim.sum());
// var lee = {
//     name:'lee',
//     first:10, second:10, 
//     avg:function(){
//         return (this.first+this.second)/2;
//     }
// }
// lee.__proto__ = kim;
var lee = Object.create(kim); // 표준화된 방법 나중에 나와서 IE9이전에 지원되지 않음 / 그냥 지원된다 보면 됨
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function(){
    return (this.first+this.second)/2;
}
console.log('lee.sum() : ', lee.sum());
console.log('lee.avg() : ', lee.avg());
