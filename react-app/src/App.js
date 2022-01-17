import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Control from "./components/Control";
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'welcome', // welcome | read | create | update | delete
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

  getReadContent(){
    var data = this.state.contents[this.state.selected_content_id];
    return data;
  }
  
  getContent() {
    var _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'read'){
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    } else if (this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        this.max_content_id = this.max_content_id + 1;
        // var _contents = this.state.contents.concat(
        //   {id: this.max_content_id, title: _title, desc: _desc}
        // );
        // var newContents = Array.from(this.state.contents);
        // newContents.push(
        //   {id: this.max_content_id, title: _title, desc: _desc}
        // );
        var _contents = Array.from(this.state.contents);
        _contents.push({id: this.max_content_id, title: _title, desc: _desc});
        this.setState({
          contents: _contents,
          mode: 'read',
          selected_content_id: (this.max_content_id - 1)
        });
      }.bind(this)}></CreateContent>
    } else  if(this.state.mode === 'update'){
      var _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={function(_id, _title, _desc){
        var _contents = Array.from(this.state.contents);
        _contents[this.state.selected_content_id] = {id: _id, title: _title, desc: _desc};
        this.setState({
          contents: _contents,
          mode: 'read'
        });
      }.bind(this)}></UpdateContent>
    }
    
    return _article;
  }
  render() {

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
            this.setState({
              mode:'read',
              selected_content_id: Number(id)
            });
          }.bind(this)}
        ></TOC>
        <Control onChangeMode={function(_mode){
          if(_mode === 'delete'){
            if(window.confirm('really?')){
              var _contents = Array.from(this.state.contents);
              _contents.splice(this.state.selected_content_id,1);
              this.setState({
                mode:'welcome',
                contents: _contents
              });
              alert('deleted!');
            }
          } else {
            this.setState({
              mode: _mode
            });
          }
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
