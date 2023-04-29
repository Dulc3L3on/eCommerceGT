import './Payment.css'

import React from 'react'
import {Link} from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion';

import Card from '../../../items/card-payment/Card';

function Payment(props){
    return(
        <div id="payment-container">
            <GoBack/>
            <Header/>
            
            <Body/>            
        </div>
    );
}

function GoBack(props){
    return (
        <div id="payment-reverse-div">
            <Link to="/my-account/user/store">
                <div id="go-back-arrow">
                    <i className="bi bi-arrow-left"></i>
                </div>                
            </Link>                
        </div>
    );
}

function Header(props){
    return (
      <div id="payment-header">
        Payment section
      </div>
    );
}

function Body(props){
    return(
        <div id="payment-body">
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                
                <Accordion.Item eventKey="0">                
                    <Accordion.Header>
                        <div id="accordion-header">
                            Cards on File
                        </div>                        
                    </Accordion.Header>               
                    <Accordion.Body>
                        <CardBanner/>            
                    </Accordion.Body>
                </Accordion.Item>    

                <Accordion.Item eventKey="1">                
                    <Accordion.Header>
                        <div id="accordion-header">
                            Purchase's details
                        </div>                        
                    </Accordion.Header>                            
                    <Accordion.Body>
                        <PaymentDetails/>
                    </Accordion.Body>
                </Accordion.Item>      
                
            </Accordion>            
        </div>
    );
}

function CardBanner(props){
    let cards = [
        {cardNumber: '369852147123654',
         expirationDate: '12/05/2025',
         ccv: 653
        },
        {
         cardNumber: '789545123132658',
         expirationDate: '16/04/2023',
         ccv: 8756
        }
    ];

    console.log(cards);

    return (
        <div id="card-payment-section">          
            <div id="card-list">
                {cards &&
                    cards.map((card, index) => 
                        <div id="card-element">
                            <div id="card-selection">
                                <input type="radio" id="chose" name="chose"/>                                
                            </div> 
                            <Card key={index} index={index} card={card}/>
                        </div>                        
                    )
                }
            </div>
            <Link to='secure-payment' target="_blank" rel="noopener noreferrer">
                <div id="add-card">
                    <span id="more-products">+</span>
                </div>
            </Link>
        </div>
    );
}

function PaymentDetails(props){
    return (
        <div id="detail-payment-section">
            <div id="detail-header-section">
                <div id="total-detail-element">
                    Total Q.
                </div>                
            </div>
            <div id="detail-table-section">
                <PaymentTableHeader />
                <PaymentTableBody />
            </div>
        </div>
    );
}

function PaymentTableHeader(props){    
    return(        
        <div id="payment-table-header">
            <div id="payment-table-title-1">
                No.
            </div>
            <div id="payment-table-title-2">
                Product's name
            </div>
            <div id="payment-table-title-3">
                Features
            </div>
            <div id="payment-table-title-4">
                Quantity
            </div>
            <div id="payment-table-title-5">
                Price
            </div>            
            <div id="payment-table-title-5">
                Subtotal
            </div>            
        </div>
    );
}

function PaymentTableBody(props){
    let array = JSON.parse(window.localStorage.getItem('cart-products'));
    const rows = [];

    console.log('tableBody: ' + array);
    console.log(array);
 
    if(array){
        for(let index = 0; index < array.length; index++){
            console.log("index- " + index);      
            let subtotal = (array[index].quantity*array[index].product.price)
            
            rows.push( <PaymenTableRow key={index} 
                                       number={index+1}
                                       name={array[index].product.item.name}
                                       features={array[index].product.item.features}
                                       quantity={array[index].quantity}
                                       price={array[index].product.price}
                                       subtotal={subtotal}/>);
        } 
    }               
 
    return(
        <div id="payment-table-body">
            {array && rows}
        </div>
         );
}


function PaymenTableRow(props){
    return (
        <div id="payment-table-row">
            <div id="payment-table-title-1">
                {props.number}
            </div>
            <div id="payment-table-title-2">
                {props.name}
            </div>
            <div id="payment-table-title-3">
                {props.features}
            </div>
            <div id="payment-table-title-4">
                {props.quantity}
            </div>
            <div id="payment-table-title-5">
                {props.price}
            </div>            
            <div id="payment-table-title-6">
                {props.subtotal}
            </div>       
        </div>
    );
}

export default Payment;