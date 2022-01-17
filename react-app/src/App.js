import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import Control from "./components/Control";
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3; // = 마지막 contents의 id값과 동일
    this.state = {
      mode: 'create', // welcome | read | create
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
  render() {
    var _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'read'){
      _title = this.state.contents[this.state.selected_content_id].title;
      _desc = this.state.contents[this.state.selected_content_id].desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        // add content to this.state.contents
        this.max_content_id = this.max_content_id+1;
        // 방법 1: 직접 추가
        // this.state.contents.push(
        //   {id: this.max_content_id, title: _title, desc: _desc}
        // );
        // 위처럼 값을 직접 추가하면 리액트가 몰라준다
        // 방법 2: setState 활용
        // this.setState({
        //   contents: this.state.contents
        // });
        // 위처럼하면 되지만 성능 개선에 문제가 생길 수 있음
        // 방법 3: concat 활용
        // concat은 원본은 유지되고 새로운 배열이 생성됨
        // 원본을 수정하지않고 원본의 복제본을 수정하고 복제본으로 값을 수정한다.
          // 원본을 바꾸지 않는다 = 불변성(Immutable - 이뮤터블)
          // 방법 2를 사용하면 원본을 바꾸었기 때문에 TOC에서 사용한 것처럼 불필요한 로드를 막는 shouldComponentUpdate에서 감지를 하지 못함
        var _contents = this.state.contents.concat(
          {id: this.max_content_id, title: _title, desc: _desc}
        );
        // 방법 4: setState에 불변성을 적용하는 방법
        var newContents = Array.from(this.state.contents);
        newContents.push(
          {id: this.max_content_id, title: _title, desc: _desc}
        );
          // 배열 복제: Array.from() | 객체 복제: Object.assign()
        // immutable js 원본을 복제하고 이를 수정함

        this.setState({
          contents: _contents
        });
      }.bind(this)}></CreateContent>
    }

    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
        ></Subject>
        <TOC data={this.state.contents}
          onChangePage={function(id){
            // alert('hi');
            this.setState({
              mode:'read',
              selected_content_id: Number(id)
            });
          }.bind(this)}
        ></TOC>
        <Control onChangeMode={function(_mode){
          this.setState({
            mode: _mode
          });
        }.bind(this)}></Control>
        {_article}
      </div>
    );
  }
}

export default App;
