var kim = {
    name:'kim',
    first:10,
    second:20,
    third:30,
    sum:function(){
        return this.first+this.second+this.third;
    }
}
var lee = {
    name:'lee',
    first:10,
    second:10,
    third:10,
    sum:function(){
        return this.first+this.second+this.third;
    }
}
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());


console.log("##########");


var d1 = new Date('2022-1-14');
console.log('d1.getFullYear()', d1.getFullYear());
console.log('d1.getMonth()', d1.getMonth()+1); // 달을 0부터 카운트
console.log('d1.getMonth()', d1.getDate());


console.log("##########");


function Person(name, first, second, third){
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function(){
        return this.first + this.second + this.third;
    }
}
 
var cho = new Person('cho', 10, 20, 30);
var sin = new Person('sin', 10, 10, 10);
console.log("cho.sum()", cho.sum());
console.log("sin.sum()", sin.sum());