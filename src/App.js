import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = { loggedIn: false, password: '' }

  setPassword = e => this.setState({ password: e.target.value })

  login = ()=> fetch('/test/login', {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, mode: 'cors',
    body: JSON.stringify({ password: this.state.password})
  })
    .then(response => response.statusCode > 400 ? console.error(401) : this.setState({ loggedIn: true }))
    
  render() {
    const { loggedIn, password } = this.state;
    
    return (
      <div className="App">
        { loggedIn ? (
            <img src='https://3k92h7oq73.execute-api.us-west-2.amazonaws.com/test/static?key=five-out2.png' />
        ) : (
            <div>
              <input onChange={this.setPassword} type='password' value={password}/>
              <button onClick={this.login}>LOGIN</button>
            </div>
        ) }
      </div>
    );
  }
}

export default App;
