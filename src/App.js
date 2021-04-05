import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';


class App extends Component {
  state = {
    person: [
      {username: 'Duck'},
      {username: 'Owl'},
      {username: 'Eagle'}
    ]
  }

  usernameChangeHandler = (event) => {
    this.setState({
        person: [
            {username: event.target.value},
            {username: event.target.value},
            {username: event.target.value}
          ]
    })
}

  render(){
    return (
      <div className="App">
       <UserInput 
       changed={this.usernameChangeHandler}
       currentName={this.state.username}
       />
       <UserOutput 
       username={this.state.person[0].username} />
       <UserOutput username={this.state.person[1].username} />
       <UserOutput username={this.state.person[2].username}/>
      </div>
    );
  }
 
}

export default App;