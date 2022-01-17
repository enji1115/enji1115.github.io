import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';
import './App.css'

class App extends Component {
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
  render() {
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else {
      _title = this.state.contents[this.state.selected_content_id].title;
      _desc = this.state.contents[this.state.selected_content_id].desc;
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
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
