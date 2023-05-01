//Used: when a card is clicked - Cx
import './Product.css'

import camera from '../../../../../assets/camera.png'

import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2'

function Product(props){
    return (
        <div id="add-product-container">                        
            <GoBack/>

            <Header/>
            <ProductForm/>
        </div>
    );
}
//lo que puse en link no es la mejor manera pero para mientras xD

function GoBack(){
    return (
        <div id="add-product-reverse-div">
            <Link to="/my-account/user/my-store">
                <div id="go-back-arrow">
                    <i className="bi bi-arrow-left"></i>
                </div>                
            </Link>                
        </div>
    );
}

function Header(props){
  return (
    <div id="add-product-header">
      Add New Product
    </div>
  );
}

function ProductForm(props){
    return (
        <div id="add-product-body">
            <Formik
          initialValues={{ productName: '', category: '', price: 1000, available: 1, features: ''}}
          validationSchema={Yup.object({
            productName: Yup.string()
              .min(8, 'Username is too short')
              .max(15, 'Username is too long')           
              .required('* Required'),
            category: Yup.string()
              .min(3, 'Unvalid category')
              .required('* Required'),   
            price: Yup.number()
              .min(1, 'The minimun price is Q1')
              .required('* Required'),   
            available: Yup.number()
              .min(1, 'Must be at least 1')
              .required('* Required'),   
            features: Yup.string()
              .max(275, 'Too much features')
              .required('* Required')
            /*robot: Yup.boolean()
              .isTrue('Are you a robot?'),*///si tuviera timpo haría que esto fuera para una oferta de 10,15,35
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <div id="product-form-container">
            <Form>              
              <div id="product-info-section-1">
                <ImageInput/>    
              
                <div id="product-detail-container">
                  <div id="product-name-container">
                    <div className='input-group mb-3' id="field-2">
                        <label htmlFor="productName"
                              className="input-group-text">
                                Name: 
                        </label>
                        <Field name="productName" className="form-control" id="productName" placeholder="Product name"/>          
                      </div>        
                      <div id="error-div">
                        <ErrorMessage name="productName" className="error-product-div"/>
                      </div>          
                  </div>

                  <div id="product-brand-container">
                    <label id="product-brand-label" 
                           htmlFor='brand_select' 
                           className="input-group-text">Brand</label>                                
                    <Field as="select" id="brand_select" name="brand_select">
                      <option value="Asus">Administrator</option>
                      <option value="Esika">Deliver</option>                          
                    </Field>
                  </div>      
            
                  <DataList/>

                  <div id="product-numbers-container">
                    <div id="product-price-container">
                      <div className='input-group mb-3' id="field-4">
                        <label htmlFor="price"
                              className="input-group-text">
                                Price: 
                        </label>
                        <Field name="price" type="number" className="form-control" id="price"/>          
                      </div>            
                      <div id="error-div">
                        <ErrorMessage name="price" id="error-product-div"/>
                      </div>
                    </div >

                      <div id="product-availability-container">
                        <div className='input-group mb-3' id="field-5">
                          <label htmlFor="available"
                                className="input-group-text"
                                id="available">
                                  Available: 
                          </label>
                          <Field name="available" type="number" className="form-control"/>          
                        </div>            
                        <div id="error-div">
                          <ErrorMessage name="available" id="error-product-div"/>
                        </div>
                      </div>                                
                  </div>
                </div>                                
              </div>
                

              <div id="product-info-section-2">
                <div className='mb-3' id="field-6">
                  <label htmlFor="features" id="lbl-features"className="form-label">Features</label>
                  <Field name="features" 
                         as="textarea" 
                         className="form-control"
                         id="features"
                         rows="6"/>          
                </div>            
                <div id="error-div">
                  <ErrorMessage name="features" id="error-product-div"/>
                </div>
              </div>                              
              <button type="submit" id="product-submit" className="btn btn-primary">Submit</button>              
            </Form>            
          </div>          
        </Formik>
      </div>
    );    
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
      <div className='input-group mb-3' id="product-image-container"> 
        <img id="product-img-preview" alt='recent' src={this.state.filepreview}/>
        <input id="product-image-previewed" 
                type="file" 
                name="myProductPicture" 
                onChange= {this.onChange}/>
                  
        
        <div id="error-div">
                <ErrorMessage name="myProductPicture" id="error-product-div"/>
        </div>          
      </div>          
    );
  }
}

class DataList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newOne: ''
    };//hasta donde sé no será útil, por eso tenia algo en contra de la clase, pero bueno xD, solo NO TE COMPLIQUES!!! please

    this.handleNewCategory = this.handleNewCategory.bind(this);    
  }

  handleNewCategory(event){
     //code to send the new element to the element and with that update the whole form    
    
    console.log("categoría agregada: " + document.getElementById('category').value);

    this.setState({newOne: document.getElementById('category').value});       
  }

  render(){
    return (
      <div id="category-section">
        <div className='input-group mb-3' id="field-3">
          <label htmlFor="category" className="input-group-text">Category: </label>
          <Field name="category"
                 className="form-control"
                 placeholder="Type the category"
                 list="datalistOptions"
                 id="category"/>          

          <datalist id="datalistOptions">
            <CategoryOptions/>
          </datalist>

          <div id="add-more-categories">
            <span id="more-categories" onClick={this.handleNewCategory}>+</span>
          </div>
        </div>        
        <div id="error-div">
          <ErrorMessage name="category" className="error-product-div"/>
        </div>          
      </div>      
    );
  }//hace falta add el error para la img
}

//No sabia que si tenia una función que corresponda a un compoentne
//(así como esta), que podría emplearla dentro de una clase, solo debes
//no colocar this, solo la etiqueta así con normlaidad y eso es todo
  //Eso me hubiera servido micho al estar haciendo lo del mapeo en Tracking :v...
function CategoryOptions(props){
    const categories = [
      'peluche', 'ropa-dama', 'zapatos-deportivos', 'accesorios-caballero',
      'implementos-cocina', 'hogar-muebles'
    ];//the same, this will be getted from the DB    

    return(
      <div id="category-options">
        {
          categories.map((category, index) =>             
              <option key={index} value={category}/>            
          )
        }
      </div>
    );
}



//en categoría debo add un select, pero tb debería poder add si no existe...
  //pero por el momento TÚ vas a hacer la add

//recuerda llenar los input con lo de formik... así como en login/signup

//buscar la optión en la que tienes para cargar imaǵenes de maera mútliple
//y alone, tu entraste a lapágina y tocaste/interactuaste con eso...

export default Product;