import React from 'react';
import {Form, Field} from 'react-final-form';

const onSubmit = data => {
  alert('Submit login: ' + data.Login);
}

const LoginForm = () => (
  <Form
    onSubmit={onSubmit}
    initialValues={({ rememberMe: false })}
    render={({handleSubmit}) => (
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="Login" component="input" type="text" placeholder="Login"/>
        </div>

        <div>
          <Field name="Password" component="input" type="password" placeholder="Password"/>
        </div>

        <div>
          <Field name="rememberMe" component="input" type="checkbox"/>
          <label>Remember me</label>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    )}
  />
)

const Login = (props) => {
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginForm />
    </div>
  );
}

export default Login;
