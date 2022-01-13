var M = {
    v:'v',
    f:function(){
        console.log(this.v);
    }
}

module.exports = M;
// module.exports 는 약속임
// M이 사용하는 객체를 사용할 수 있게 하는 것