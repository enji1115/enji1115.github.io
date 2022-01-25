import React, { Component } from 'react';

class Control extends Component {
    render(){
        var data = this.props.data;
        var branch_wel = [];
        if (data !== 'welcome') {
            branch_wel.push(<li>
                <a href="/update" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('update');
                }.bind(this)}>update</a>
            </li>);
            branch_wel.push(<li>
                <input  onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('delete');
                }.bind(this)} type="button" value="delete"></input>
            </li>);
        }
        return (
            <ul>
                <li><a href="/create" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('create');
                }.bind(this)}>create</a></li>
                {branch_wel}
            </ul>
        );
    }
}

export default Control;
