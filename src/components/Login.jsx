import React, { Component } from 'react';
import * as firebaseui from 'firebaseui';

class Login extends Component {

  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    const emailText = document.getElementById('email');
    const passwordText = document.getElementById('password');
    const btnLogin = document.getElementById('login');
    const btnSignup = document.getElementById('signup');
    const btnLogout = document.getElementById('logout');

    btnLogin.addEventListener('click', e => {
      //get meial and passwoed
      const email = emailText.value;
      const pass = passwordText.value;
      const auth = firebaseui.auth.AuthUI();

      const promise = auth.signInWithEmailAndPassword(email, pass);

      promise.catch(e => console.log(e.message));

    });

    btnSignup.addEventListener('click', e => {
      e.preventDefault();
      //get meial and passwoed
      const email = emailText.value;
      const pass = passwordText.value;
      const auth = firebaseui.AuthUI();

      const promise = auth.signInWithEmailAndPassword(email, pass);

      promise.catch(e => console.log(e.message));

    });
  }

  
  render() {
  
    return (
      
      <div className="login-container">
        <form className="left-side" action="">
          <label htmlFor="email">email address</label>
          <input ref={this.textInput} type="email" name="email" id="email"/>

          <label htmlFor="password">password</label>
          <input type="password" name="password" id="password"/>

          <button id="login">login</button>
          <button id="signup">signup</button>
          <button id="logout">logout</button>
        </form>
        <div className="right-side">
          <p> right side </p>

        </div>
       
      </div>
    ) 
  }
}

export default Login; 