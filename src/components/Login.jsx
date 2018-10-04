import React, { Component } from 'react';



class Login extends Component {

  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    const emailText = document.getElementById('email');
    console.log(emailText);
  }

  
  render() {
  
    return (
      
      <div className="login-container">
        <form className="left-side" action="">
          <label htmlFor="email">email address</label>
          <input ref={this.textInput} type="password" name="email" id="email"/>

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