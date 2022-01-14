console.log("Math.PI", Math.PI);
console.log("Math.random()", Math.random());
console.log("Math.floor(3,9)", Math.floor(3.9)); // 내림
console.log("Math.round(3,9)", Math.round(3.9)); // 반올림


var MyMath = {
    PI: Math.PI,
    random: function(){
        return Math.random();
    },
    floor: function(val){
        return Math.floor(val);
    }
}
console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random()", MyMath.random());
console.log("MyMath.floor(3.9)", MyMath.floor(3.9));

// object를 사용하지 않으면 이렇게 접두사(MyMath_)로 표현해야 했다.
var MyMath_PI = Math.PI;
function MyMath_random(){
    return Math.random();
}
function MyMath_floor(val){
    return Math.floor(val);
}