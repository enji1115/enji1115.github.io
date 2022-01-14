// prototype = 원형(원래의 형태)
// 자바스크립트는 프로토타입기반 언어이다.

function Person(name, first, second, third){
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
}

Person.prototype.sum = function(){
    return 'prototype : ' + (this.first + this.second);
}
 
var cho = new Person('cho', 10, 20, 30);
cho.sum = function(){
    return 'this : ' + (this.first + this.second);
}
var sin = new Person('sin', 10, 10, 10);

console.log("cho.sum()", cho.sum());
console.log("sin.sum()", sin.sum());
// 자신이 가진 sum객체를 찾고 없으면 Person이 가진 sum객체를 실행한다.


// ┌ 프로토타입의 의미
// 생성자 함수에 공통적으로 사용하는 메소드 (속성)을 만들어, 객체 생성시에마다 필요한 연산을 줄일수 있다.

// ┌ 프로토타입을 사용하지 않고 생성자 함수 안에서 메소드를 작성하면 생기는 비효율
// 객체를 생성할 때 마다 같은 동작을 하는 메소드가 메모리에 계속 생긴다. => 성능 저하, 메모리 낭비

// ┌ 프로토타입으로 비효율을 극복한 방법
// 객체들이 공통으로 사용하는 속성값을 정의해서 객체 생성마다 같은 속성값을 만드는 과정을 생략해, 성능 향상과 메모리를 효율적으로 이용할 수 있게 해준다.


// prototype vs __proto__
// 함수는 JS에서 객체이다 -> 프로퍼티를 가짐
// 함수 선언시 객체 생성 [함수] -> 동시에 [함수]의 프로토타입 객체가 생김 [함수의 프로토타입]
// [함수]에 (prototype)이라는 프로퍼티가 생기고 이는 [함수의 프로토타입]을 가리킨다 | [함수].prototype = [함수의 프로토타입]
// [함수의 프로토타입]에도 (constructor)라는 프로퍼티가 생기고 이는 [함수]를 가리킨다
// [함수].prototype.sum = function(){}하면 [함수의 프로토타입]에 sum이 추가된다
// new 함수()로 선언하면 선언된 객체에 값-인자들과 __proto__가 추가된다
    // __proto__는 [함수]의 prototype인 [함수의 프로토타입]가 된다
    // 값-인자가 있는 경우 객체의 값을 가져오고, 없는 경우 __proto__인 [함수의 프로토타입]을 가져다 사용한다