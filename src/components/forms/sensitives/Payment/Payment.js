import './Payment.css'

import React from 'react'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
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
            <Accordion defaultActiveKey={['0', '1']} alwaysOpen>
                
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
    let cards = getCards(-1)

    console.log(cards);

    return (
        <div id="card-payment-section">          
            <div id="card-list">
                {cards &&
                    cards.map((card, index) => 
                        <div key={index} id="card-element">
                            <div id="card-selection">
                                <input type="radio" 
                                       id={'chose-'+index} 
                                       className ={'chose-'+index}
                                       name="chose"/>
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
            <div id="detail-table-section">
                <PaymentTableHeader />
                <PaymentTableBody />
                <PaymentTableFooter />
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

function PaymentTableFooter(props){
    let array = JSON.parse(window.localStorage.getItem('cart-products'));    
    let quantity = 0, total = 0
    let rowFooter;
 
    if(array){
        for(let index = 0; index < array.length; index++){
            quantity += parseInt((array[index].quantity), 10)//NOTA: si no usas el parse, concatena los datos o sea que por defecto los datos se toman como de tipo String
            total += (array[index].quantity*array[index].product.price)                        
        } 
        rowFooter= (<PaymentTableFooter_Row quantity={quantity} total={total}/>);
    }               
 
    return(
        <div id="payment-table-body">
            {array && rowFooter}
            <div id="button-payment-section-div">                
                <button type='submit' 
                        id="payment-submit"
                        className='btn btn-primary'
                        disabled={((array!=null)?false:true)}
                        onClick={onPayment}>Purchase</button>                                     
            </div>
        </div>
    );
}

function PaymentTableFooter_Row(props){
    return (
        <div id="payment-table-footer">
            <div id="payment-table-title-1">
                
            </div>
            <div id="payment-table-title-2">
                
            </div>
            <div id="payment-table-title-3">
                
            </div>
            <div id="payment-table-title-4">
                {props.quantity}
            </div>
            <div id="payment-table-title-5">
                
            </div>            
            <div id="payment-table-title-6">                
                <div id="total-section">
                    Q. <input type="number"
                                    id="input-total"
                                    defaultValue={props.total}                                    
                                    readOnly/>       
                </div>
                         
            </div>       
        </div>
    );
}

function getCards(index){
    let cards = [
        {cardNumber: '369852147123654',
         expirationDate: '12/05/2025',
         ccv: 653,
         capital: 1500
        },
        {
         cardNumber: '789545123132658',
         expirationDate: '16/04/2023',
         ccv: 8756,
         capital: 800
        }
    ];

    if(index == -1){
        return cards;
    }else{
        return cards[index]
    }

}//será reemplazado pro el método respectivo de la DB

function onPayment(){
    let radio = document.querySelector('input[name="chose"]:checked')
    let index = 1
    console.log('radio' + radio)

    if(radio){
        console.log('radio' + radio)
        index = radio.className.slice(6, 7)

        let card = getCards(parseInt(index, 10))
        let total = parseFloat(document.getElementById('input-total').value)
        let today = new Date(Date.now())//lo deje así porque si lo convierto del string a Date con toLovalDate no se que, me da error, porque el otro lo convierte a versión inles y el otro (today) está en español

        console.log((new Date(card.expirationDate))  + ', ' + today)
        console.log('card.expirationDate > today' + (new Date(card.expirationDate) > today))

        if(card.capital >= total && ((new Date(card.expirationDate)) > today)){
            card.capital = (total - card.capital)//se exe el método para actualizar la cdad en la card en la DB!!!
            //Se cb por una actualizacion de la cantidad de la card en la DB
                //nada de localStorage, puesto que no se requiere ni en el obejto directamente, despues das reload() para actualizar update
            
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'your payment has been process successfully',
                showConfirmButton: false,
                timer: 1500
            })

            localStorage.removeItem('cart-products');
            setTimeout('document.location.reload()',1500);
        }
    }
    
}

export default Payment;