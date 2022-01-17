import React, { Component } from 'react';

class TOC extends Component {
  shouldComponentUpdate(newProps, newState) {
    // shouldComponentUpdate를 사용하지 않고 그냥 render로 실행하면 업데이트, 다른페이지를 여는 경우 모두 다시 로드됨
    console.log('===>TOC shouldComponentUpdate', 
      newProps.data, 
      this.props.data);

    // return false;
    // 기본값이 true
    // false로 하면 render함수가 호출되지 않음

    if(this.props.data === newProps.data) {
      return false;
    }
    return true;
  }
  render() {
    console.log('===>TOC render');
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while(i<data.length){
      lists.push(<li key={data[i].id}>
        <a href={"/content/"+data[i].id}
          data-id={data[i].id}
          onClick={function(e){
            e.preventDefault();
            this.props.onChangePage(e.target.dataset.id-1);
          }.bind(this)}>{data[i].title}</a>
      </li>);
      i = i + 1;
    }
    return (
      <nav>
          <ul>
              {lists}
          </ul>
      </nav>
    );
  }
}

export default TOC;
