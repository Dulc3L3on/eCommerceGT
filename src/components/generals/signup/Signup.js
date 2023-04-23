import './Signup.css'

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import logo from '../../../assets/gtCommerce-bag.png'

function Signup(props){
    return (
     <div id="signup-section">
       <div id="signup-header">
         <div id="image-div">
           <img src={logo} id="logo" alt="logo"/>
         </div>
         SignUp section
       </div>
       <div id="signup-content">
         <Formik
           initialValues={{ firstName: '', lastName: '', userName: '', password: '', agreement: false}}
           validationSchema={Yup.object({
             firstName: Yup.string()
               .min(2, 'Too short to be a name')
               .required('* Required'),//tb habrá que add que no se permitan números..
             lastName: Yup.string()
               .min(2, 'Too short to be a lastname')
               .required('* Required'),
             userName: Yup.string()
               .min(8, 'Username is too short')
               .max(15, 'Username is too long')           
               .required('* Required'),
             password: Yup.string()
               .min(8, 'Invalid password')
               .required('* Required'),   
             agreement: Yup.boolean()
               .isTrue('You must agree the terms and conditions'),
           })}
           onSubmit={(values, { setSubmitting }) => {
             setTimeout(() => {
               alert(JSON.stringify(values, null, 2));
               setSubmitting(false);
             }, 400);
           }}
         >
         <Form>
            <div className='input-group mb-3' id="firstName-div">
                <label htmlFor="firstName"
                       className="input-group-text">
                        First Name
                </label>
                <Field id="firstName" name="firstName" className="form-control" placeholder="First name" />
            </div>
            <div id="error-div">
               <ErrorMessage name="firstName" id="error-div"/>
             </div>       

             <div className='input-group mb-3' id="lastName-div">
                <label htmlFor="lastName"
                       className="input-group-text">
                        Last Name
                </label>
                <Field id="lastName" name="lastName" className="form-control" placeholder="First name" />
            </div>
            <div id="error-div">
               <ErrorMessage name="lastName" id="error-div"/>
             </div>         



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
             
             <div className="form-check" id="agreement-div">
               <Field className ="form-check-input" id="flexCheckDefault" type="checkbox" name="agreement" value="agreement" />
               <label className="form-check-label" htmlFor="flexCheckDefault">
                 I agree with the terms and conditions        
               </label>
             </div>
             
             <div id="error-div">
               <ErrorMessage name="agreement" id="error-div"/>
             </div>
         
             <button className='btn btn-primary' id="submit" type="submit">Submit</button>
               <div id="footer">
               <a href="/login">Return to login</a>
             </div>          
           </Form>
         </Formik>
       </div>      
     </div>      
    );
}

export default Signup;