import './Shopping-cart.css'

import {React, useEffect} from 'react';
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'

import { useState } from 'react';
import { useLocalStorage_arrays } from '../../../hooks/useLocalStorage';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartItem from '../../items/cart-item/CartItem';

function ShoppingCart(props){
  const [products, setProducts, deleteProducts] 
      = useLocalStorage_arrays('cart-products',
          JSON.parse(window.localStorage.getItem('cart-products')))//Este quedo en lugar del handler, puesto que se encarga de hcaer lo del localStorage , antes tenia - window.localStorage.getItem('cart-products'), creo que es lo ideal, porque si no hay prop pero si listado ahí se arruinaria la cosa...

          console.log("cart item: "+props.cartItem);

          useEffect(()=>{
            setProducts(props.cartItem);
          }, [props.cartItem])//asi que eso era xD, lo que debías hacer es asignar a estos [] (son corchetes por el hecho de ser un arreglo) el mismo objeto/array del que tenías intención de insertar xD
          
  return(
    <div id="cart-container">      
      {<ProductsList products={products} />}
    </div>     
  );
}

//recuerda que el handler lo enviabas a los hijos porque como con ellos se puede hacer el delete

function ProductsList(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  console.log('Products list: '+ props.products);
  console.log(props.products);
  const items = ((props.products)?getItemsList(props.products):null);

  return (
    <>
      <CartButton toogleShow={toggleShow}/>  
      
      <Offcanvas id="off-canvas" show={show} onHide={handleClose} scroll = {true} backdrop = {false}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="off-canvas-title" >My cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body id="off-canvas-body">
          {items && items}          
        </Offcanvas.Body>

        <Footer />
      </Offcanvas>            
    </>
  );
}

function CartButton(props){
  return (
      <div className="cart-button-access me-2" onClick={props.toogleShow}>
          <i className="bi bi-cart3"></i>                      
      </div>
  );
}//<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button>

function getItemsList(cartItems){   
  let items = cartItems.map((item, index) => (
    <CartItem key={index} 
              index={index+1} 
              item={item} 
              onChange={onQuantityChange}/>
  ))

  return (    
    <div id="products-list-body">
      {items}
    </div>
  );
}

function Footer(props){  
  return (
    <div id="shopping-cart-footer-section">
      <div id="cancel-option">              
        <button id="cancel-button" onClick={onDelete}>
          <span>Cancel</span>        
        </button>
      </div>    

      <Link to='payment'>
        <div id="payment-button">              
            <span id="payment-span">Purchase</span>
        </div>    
      </Link>   
    </div>    
  );
}//onClick={useLocalStorage_arrays}

function onDelete(){
  Swal.fire({
    title: 'Do you want leave it?',
    text: ("Your are going to delete all the items"),
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem('cart-products');
      window.location.reload()//quité el msje de exito porque no se muestra la cdad de tiempo debida, ya que el reload empieza su axn...
    }
  })
}//works

function onQuantityChange(index, modifiedItem){
  let products = JSON.parse(window.localStorage.getItem('cart-products'))  

  products[index] = modifiedItem;//lo quería hacer directamente con la cantidad pero mejro así xD
  localStorage.setItem('cart-products', JSON.stringify(products))  
}//if this event is activated in FACT there is an object with the ID: cart-products

export default ShoppingCart;

//ARREGLAR lo del input, basicamente si borras todo lo que tienene 
  //que ver con add la cdad modificada se irá el err
  //el handler
    //-shoping, cartIem( invocacion)
    //envio de params (item, index)
    //practicamente solo, porque store no intervino ahí....


//DESPUÉS DE hacer la venta, haremos la eliminación del storage del carrito

/*const Cart = ({ cartItems, removeFromCart, clearCart }) => {
  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((product) => (
              <li key={product.id}>
                {product.name} - {product.price}
                <button onClick={() => removeFromCart(product)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <p>Total: {}</p>
          <button onClick={() => clearCart()}>Vaciar carrito</button>
        </div>
      )}
    </div>
  );
};*/