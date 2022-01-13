/*
function f1(){
    console.log(1+1);
    console.log(1+2);
}
*/
// 조건문, 반복문은 값이 될 수 없다.
// 함수는 함수명을 없애면 변수에 넣는 값이 될 수 있다.

var f = function(){
    console.log(1+1);
    console.log(1+2);
}
var a = [f];
a[0]();     // = f()

var o = {
    func:f
}
o.func();   // = f()
// 객체에 함수 담는 건 많이 씀