var q = {
    v1:'v1',
    v2:'v2',
    f1:function (){
        console.log(this.v1);
    },
    f2:function(){
        console.log(this.v2);
    }
}
/*
function f1(){
    console.log(q.v1);
}
function f2(){
    console.log(q.v2);
}
// 유지보수를 위해 오브젝트에 넣는다
*/

q.f1();
q.f2();