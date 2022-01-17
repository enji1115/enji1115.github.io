import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';
import './App.css'

// ※ 하나의 class return안에 하나의 부모태그만 있어야 한다!
// ※ class명은 첫글자가 대문자여야 한다!

class App extends Component {
  // 초기화 담당
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read', // welcome
      selected_content_id: 2,
      welcome: {title:'Welcome', desc:'Hello, React!!'},
      subject: {title: 'WEB', sub: 'world wide web!'},
      contents: [
        {id: 1, title: 'HTML', desc:'HTML is for information ...'},
        {id: 2, title: 'CSS', desc:'CSS is design ...'},
        {id: 3, title: 'JavaScript', desc:'JavaScript is for interactive ...'},
      ]
    }
  }
  // React에서 props나 state값이 바뀌면 render함수가 다시 그려준다
  render() {
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else {
      // _title = this.state.contents[0].title;
      // _desc = this.state.contents[0].desc;
      _title = this.state.contents[this.state.selected_content_id].title;
      _desc = this.state.contents[this.state.selected_content_id].desc;
    }

    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            // alert('onChangePage working~');
            this.setState({mode:'welcome'});
          }.bind(this)}
        ></Subject>
        {/* <header>
          <h2><a href="/" onClick={function(e){
            e.preventDefault();
            // this.state.mode = 'welcome';
            // 위의 방법으로 state를 바꾸면 리액트가 감지하지 못함 반드시 setState 함수를 사용해야 함
            this.setState({
              mode:'welcome'
            });

            // bind는 this를 엮어주는 역할을 함
          }.bind(this)}>{this.state.subject.title}</a></h2>
          {this.state.subject.sub}
        </header> */}
        <TOC data={this.state.contents}
          onChangePage={function(id){
            // alert('hi');
            this.setState({
              mode:'read',
              selected_content_id: Number(id)
            });
          }.bind(this)}
        ></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
