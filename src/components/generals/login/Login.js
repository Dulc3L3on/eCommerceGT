import './Login.css'

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import logo from '../../../assets/gtCommerce-bag.png'

/*const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});*/
 
 function Login(){
   return (
    <div id="login-section">
      <div id="login-header">
        <div id="image-div">
          <img src={logo} id="logo" alt="logo"/>
        </div>
        Login section
      </div>
      <div id="login-content">
        <Formik
          initialValues={{ userName: '', password: '', robot: false}}
          validationSchema={Yup.object({
            userName: Yup.string()
              .min(8, 'Username is too short')
              .max(15, 'Username is too long')           
              .required('* Required'),
            password: Yup.string()
              .min(8, 'Invalid password')
              .required('* Required'),   
            robot: Yup.boolean()
              .isTrue('Are you a robot?'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <div className='input-group mb-3' id="username-div">
              <label htmlFor="userName" 
                    className="input-group-text">
                      User Name
              </label>
              <Field name="userName" type="text" className="form-control" placeholder="Username"/>          
            </div>          
            <div id="error-div">
              <ErrorMessage name="userName" id="error-div"/>
            </div>          

            <div className='input-group mb-3' id="password-div">
              <label htmlFor="password"
                    className="input-group-text">
                      Password
              </label>
              <Field name="password" type="password" className="form-control" placeholder="Password"/>          
            </div>        
            <div id="error-div">
              <ErrorMessage name="password" className="error-div"/>
            </div>          
            
            <div className="form-check" id="robot-div">
              <Field className ="form-check-input" id="flexCheckDefault" type="checkbox" name="robot" value="robot" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                I'm not a robot              
              </label>
            </div>
            
            <div id="error-div">
              <ErrorMessage name="robot" id="error-div"/>
            </div>
        
            <button className='btn btn-primary' id="submit" type="submit">Submit</button>

            <div id="footer">
              <a href="/signup">Sign up</a>
            </div>          
          </Form>
        </Formik>
      </div>      
    </div>
     
   );
 }

export default Login;

//ReactDOM.render(<WithMaterialUI />, document.getElementById('root'));