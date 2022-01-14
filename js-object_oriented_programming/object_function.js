var kim = {name:'kim', first:10, second:20}
var lee = {name:'lee', first:10, second:10}
function sum(prefix){
    return prefix+(this.first+this.second);
}
// sum(); = sum.call();
// 내부적으로 this를 무엇으로 할지 먼저 설정하고, 그 뒤에 인자를 받는다
console.log("sum.call(kim)", sum.call(kim, '=> ')); //apply
console.log("lee.call(kim)", sum.call(lee, ': '));


// sum.bind(kim) = sum이라는 함수에 내부를 kim으로 사용하고 인자를 '-> '로 사용하는 함수
var kimSum = sum.bind(kim, '-> ');
console.log('kimSum()', kimSum());