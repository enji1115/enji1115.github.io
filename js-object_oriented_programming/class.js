// 객체를 만드는 부분
class Person{
    // 객체의 초기상태
    // 함수를 만들 때 function없이 만들고
    // 초기상태에 constructor 함수명을 사용해 설정한다.
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }

    // 메소드 만들기
    sum(){
        // return 'prototype : '+(this.first+this.second);
        return (this.first + this.second);
    }
    // avg(){
    //     return (this.first + this.second)/2;
    // }
}
// 메소드와 동일
// Person.prototype.sum = function(){
//     return 'prototype : ' + (this.first + this.second);
// }

// extends - 상속이 왜 필요한지
// class PersonPlus{
//     constructor(name, first, second){
//         this.name = name;
//         this.first = first;
//         this.second = second;
//     }
//     sum(){
//         return 'prototype : '+(this.first+this.second);
//     }
//     avg(){
//         return (this.first+this.second)/2;
//     }
// }
// 위와 동일하게 동작함
class PersonPlus extends Person{
    avg(){
        return (this.first+this.second)/2;
    }
}

// super - 상속을 통해 겪게되는 자식class와 부모class간의 문제
// 인자를 추가해야되는 경우 아래와 같이 하면 되지만 이러면 전과 extends를 사용하는 의미가 없음
// class PersonPlus2 extends Person{
//     constructor(name, first, second, third){
//         this.name = name;
//         this.first = first;
//         this.second = second;
//         this.third = third;
//     }
//     sum(){
//         return 'prototype : '+(this.first+this.second+this.third);
//     }
//     avg(){
//         return (this.first+this.second+this.third)/3;
//     }
// }
// 부모가 가진 부분에 나만 가지고 있는 부분만 추가
class PersonPlus2 extends Person{
    constructor(name, first, second, third){
        super(name, first, second);
        this.third = third;
    }
    sum(){
        return super.sum()+this.third;
    }
    avg(){
        return (this.first+this.second+this.third)/3;
    }
}

var kim = new Person('kim', 10, 20);
kim.sum = function(){
    return 'this : '+(this.first + this.second);
}
var lee = new Person('lee', 10, 10);
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

console.log("##########");

var cho = new PersonPlus('cho', 100, 100);
console.log("cho.sum()", cho.sum());
console.log("cho.avg()", cho.avg());

console.log("##########");

var eun = new PersonPlus2('eun', 100, 100, 100);
console.log("eun.sum()", eun.sum());
console.log("eun.avg()", eun.avg());
