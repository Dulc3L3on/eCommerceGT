import './Employee.css'

import React from 'react';
import {Link} from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Employee(props){
    return (        
        <div id="employee-container">
            <GoBack/>
            <EmployeeHeader/>
            
            <EmployeeBody/>            
        </div>
    );     
}

function GoBack(props){
    return (
        <div id="employee-reverse-div">
            <Link to="/my-account/admin/monitor">
                <div id="go-back-arrow">
                    <i className="bi bi-arrow-left"></i>
                </div>                
            </Link>                
        </div>
    );
}

function EmployeeHeader(){
    return (
        <div id="employee-header">
            New Employee Form
        </div>
    );
}

function EmployeeBody(){
    return(
        <div id="employee-body">
            <Formik
                initialValues={
                    { employee_name_input: '', employee_birthday_input: '',
                        employee_gender_input: '', employee_address_input: '', 
                        employee_mobile_input: '', employee_alt_mobile_input: '', 
                      position_select: '', schedule_select: '',
                      employee_username_input: '', employee_password_input: ''}}
                validationSchema={Yup.object({
                    employee_name_input: Yup.string()
                    .min(2, 'Too short to be a name')
                    .required('* Required'),//tb habrá que add que no se permitan números..
                    employee_birthday_input: Yup.string()
                    .min(2, 'Too short to be a lastname')
                    .required('* Required'),
                    employee_gender_input: Yup.bool()                    
                    .required('* Required'),
                    employee_address_input: Yup.string()                    
                    .required('* Required'),
                    employee_mobile_input: Yup.number()//puesto que en todo caso debería ser el alrgo, pero no hay funciómn para eso y no la quiero hacer xD
                    .required('* Required'),
                    employee_alt_mobile_input: Yup.number()                    
                    .required('* Required'),                               
                    employee_username_input: Yup.string()
                    .min(8, 'Username is too short +8')
                    .max(15, 'Username is too long -15')   
                    .required('* Required'),
                    employee_password_input: Yup.string()
                    .min(8, 'Invalid password')
                    .required('* Required'),                    
                })}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}>
                <Form>
                    <div id="personal-employee-data-div">
                        <div id="personal-employee-data-column-1">
                            <ImageInput />  
                        </div>
                        <div id="personal-employee-data-column-2">
                            <div id="personal-info-employee-div">
                                <div id="full-name-container">
                                    <div className='input-group mb-3' id="full-name-div">
                                        <label htmlFor="employee_name_input"
                                               className="input-group-text">
                                               Full name
                                        </label>
                                        <Field id="employee_name_input" name="employee_name_input" className="form-control" placeholder="First and Last name" />
                                    </div>
                                    <div id="error-div">
                                        <ErrorMessage name="employee_name_input" id="error-div"/>
                                    </div>       
                                </div>
                                
                                <div id="DOB-container">
                                    <div className='input-group mb-3' id="DOB-div">
                                        <label htmlFor="employee_birthday_input"
                                               className="input-group-text">
                                                DOB
                                        </label>
                                        <Field type='date' id="employee_birthday_input" name="employee_birthday_input" className="form-control" placeholder="05/30/2001" />
                                    </div>
                                    <div id="error-div">
                                       <ErrorMessage name="employee_birthday_input" id="error-div"/>
                                    </div>         
                                </div>
                                
                
                                <div role="group" id="gender-container" aria-labelledby="my-radio-group">
                                    <div id="male-gender-container">
                                        <div className='input-group mb-3' id="gender-div">
                                            <label id="lbl-male-gender">
                                                <Field type="radio" id="employee_gender_input" name="employee_gender_input" className="form-control" placeholder="05/30/2001" />
                                                Male
                                            </label>                            
                                        </div>
                                        <div id="error-div">
                                           <ErrorMessage name="employee_gender_input" id="error-div"/>
                                        </div>         
                                    </div>
                                    <div id="female-gender-container">
                                        <div className='input-group mb-3' id="gender-div">
                                            <label id="lbl-female-gender">
                                                <Field type="radio" id="employee_gender_input" name="employee_gender_input" className="form-control" placeholder="05/30/2001" />
                                                Female
                                            </label>                            
                                        </div>
                                        <div id="error-div">
                                           <ErrorMessage name="employee_gender_input" id="error-div"/>
                                        </div>     
                                    </div>                                    
                                </div>
                            </div>                        
                
                            <div id="address-info-employee-div">
                                <div className='input-group mb-3' id="address-div">
                                    <label htmlFor="employee_address_input" 
                                          className="input-group-text">
                                            Mailing address
                                    </label>
                                    <Field id="employee_address_input" name="employee_address_input" className="form-control" placeholder="mailing address"/>          
                                </div>          
                                <div id="error-div">
                                  <ErrorMessage name="employee_address_input" id="error-div"/>
                                </div>     
                            </div>                        
                
                            <div id="contact-info-employee-div">
                                <div id="contact-mobile-container">
                                    <div className='input-group mb-3' id="mobile-div">
                                        <label htmlFor="employee_mobile_input"
                                              className="input-group-text">
                                                Primary Mobile:
                                        </label>
                                        <Field type="number" id="employee_mobile_input" name="employee_mobile_input" className="form-control" placeholder="(502) xxxx-xxxx"/>          
                                    </div>        
                                    <div id="error-div">
                                      <ErrorMessage name="employee_mobile_input" className="error-div"/>
                                    </div>
                                </div>
                                
                                <div id="contact-alt-mobile-container">
                                    <div className='input-group mb-3' id="alt-mobile-div">
                                        <label htmlFor="employee_alt_mobile_input"
                                              className="input-group-text">
                                                Alt Mobile:
                                        </label>
                                        <Field type="number" id="employee_alt_mobile_input" name="employee_alt_mobile_input" className="form-control" placeholder="(502) xxxx-xxxx"/>          
                                    </div>        
                                    <div id="error-div">
                                      <ErrorMessage name="employee_alt_mobile_input" className="error-div"/>
                                    </div>
                                </div>

                                
                            </div>
                        </div>    
                    </div>                    
                    
                    <div id="job-employee-data-div">
                        <div id="job-employee-data-column-1">
                            <div id="job-employee-position">
                                <label id="job-label" 
                                       htmlFor='position_select' 
                                       className="input-group-text">Position</label>                                
                                <Field as="select" id="position_select" name="position_select">
                                  <option value="administrator">Administrator</option>
                                  <option value="deliver">Deliver</option>                          
                                </Field>
                            </div>                            
                
                            <div id="job-employee-schedule">
                                <label id="job-label" 
                                       htmlFor='schedule_select' 
                                       className="input-group-text">Schedule</label>
                                <Field as="select" id="schedule_select" name="schedule_select">
                                  <option value="administrator">Opening-shift</option>
                                  <option value="deliver">Closing-shift</option>                          
                                </Field>
                            </div>                            
                        </div>
                        <div id="job-employee-data-column-2">
                            <div id="salary-container">
                                <label htmlFor="employee_salary"
                                       className="input-group-text">Salary</label>
                                <Field id="employee_salary" name="employee_salary" className="form-control" value={getSalary()} readOnly/>                                
                            </div>
                        </div>
                    </div>

                    <div id="user-employee-data-div">
                        <div id="user-employee-data-div-column-u">
                            <div id="user-name-employee-container">
                                <div className='input-group mb-3' id="username-div">
                                    <label htmlFor="employee_username_input"
                                           className="input-group-text">
                                           Username
                                    </label>
                                    <Field id="employee_username_input" name="employee_username_input" className="form-control" placeholder="Username" />
                                </div>
                                <div id="error-div">
                                    <ErrorMessage name="employee_username_input" id="error-div"/>
                                </div>       
                            </div>
                        
                            <div id="user-password-employee-container">
                                <div className='input-group mb-3' id="password-div">
                                    <label htmlFor="employee_password_input"
                                           className="input-group-text">
                                           Password
                                    </label>
                                    <Field type="password" id="employee_password_input" name="employee_password_input" className="form-control" placeholder="Password" />
                                </div>
                                <div id="error-div">
                                    <ErrorMessage name="employee_password_input" id="error-div"/>
                                </div>       
                            </div>                        
                        </div>
                        
                    </div>
         
                    <button className='btn btn-primary' id="submit" type="submit">Submit</button>                    
                </Form>
            </Formik>
        </div>
    );
}

function getSalary(){
    //este valor será obtenido a partir de la DB y el salario... si está dificil, entonces lo quitas
    //haces el div contenedor de job-fields display:row

    return '9500'
}

class ImageInput extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        filepreview: "/home/phily/Documentos/CarpetaDeEstudios/2023/Archi/Lab/Projects/eCommerce_GT/eCommerceGT/Frontend/e-commerce-gt/src/assets/camera.png"
      };
  
      this.onChange = this.onChange.bind(this);
    }
  
    onChange(e){
      this.setState(
        {filepreview:URL.createObjectURL(e.target.files[0])}      
      )  
     }
  
    render(){
      return(
        <div className='input-group mb-3 ' id="field-1"> 
          <img id="employee-img-preview" alt='recent' src={this.state.filepreview}/>
          <input id="employee-image-previewed" 
                  type="file" 
                  name="myEmployeePhoto" 
                  onChange= {this.onChange}/>
                    
          
          <div id="error-div">
                  <ErrorMessage name="myEmployeePhoto" id="error-product-div"/>
          </div>          
        </div>          
      );
    }
  }


export default Employee;