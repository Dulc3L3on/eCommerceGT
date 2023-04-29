import './SecurePayment.css'

import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'

function SecurePayment(){
    return (
        <div id="secure-payment-container">
            <GoBack/>

            <SecurePaymentHeader/>
            <SecurePaymentBody/>            
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

function SecurePaymentHeader(props){
    return (
        <div id="secure-payment-header">
            Secure Registration            
        </div>
    );
}

function SecurePaymentBody(props){
    return (
        <div id="secure-payment-body">
            <div id="secure-payment-body-section1">
                <SecurePaymentBody_Title />
                <SecurePaymentBody_Element/>
                <SecurePaymentBody_Status/>   
            </div>
            <div id="secure-payment-body-section2">
                <button type="submit" 
                        className="btn btn-primary"
                        id="secure-payment-button"
                        onClick={onSubmit}>Save</button>             
            </div>
        </div>            
    );
}

function SecurePaymentBody_Title(props){
    return(
        <div id="secure-payment-table-title">
            <div id="secure-payment-table-title-1">
                Card Number: 
            </div>
            <div id="secure-payment-table-title-2">
                Expiration Date: 
            </div>
            <div id="secure-payment-table-title-3">
                CCV: 
            </div>            
        </div>
    );
}

function SecurePaymentBody_Element(props){
    return(
        <div id="secure-payment-table-element">
            <div id="secure-payment-table-element-1">
                <input type='number' 
                       name='card-number'
                       id='secure-payment-input1'
                       placeholder='122 4565 7893'
                       onChange={onInputChange}/>
            </div>
            <div id="secure-payment-table-element-2">
                <input type='date' 
                       name='card-expiration-date'
                       id='secure-payment-input2'
                       //defaultValue={(new Date(Date.now)).toLocaleDateString()}
                       onChange={onInputChange}/>
            </div>
            <div id="secure-payment-table-element-3">
                <input type='number' 
                       name='card-security-code'
                       id='secure-payment-input3'
                       placeholder='1234'
                       onChange={onInputChange}/>
            </div>
        </div>
    );
}

function SecurePaymentBody_Status(props){
    return(
        <div id="secure-payment-table-status">
            <div id="secure-payment-table-status-1">
                <Status_Icon index={1}/>
            </div>
            <div id="secure-payment-table-status-2">
                <Status_Icon index={2}/>
            </div>
            <div id="secure-payment-table-status-3">
                <Status_Icon index={3}/>
            </div>
        </div>
    );
}

function Status_Icon(props){       
    return (
        <div className='secure-payment-status-icon-div wrong'
             id={'-div-'+props.index}>
                <i id={'-icon-'+props.index} 
                   className='bi bi-x-lg secure-payment-status-icon'></i>
        </div>
    );
}

function onInputChange(event){
    console.log('event: '+event);

    if(event){
        console.log('name: '+event.target.name);

        if(event.target.name == 'card-number'){
            let cardNumber = document.getElementById('secure-payment-input1')
            console.log('card-number: ' + cardNumber)
    
            if(cardNumber){            
                let statusDiv = document.getElementById('-div-'+1)
                let statusIcon = document.getElementById('-icon-'+1)

                if(cardNumber.value.toString().length >= 15 && 
                cardNumber.value.toString().length <= 19){
                    statusDiv.className = 'secure-payment-status-icon-div ok'
                    statusIcon.className = 'bi bi-check2'        
                }else{
                    statusDiv.className = 'secure-payment-status-icon-div wrong'
                    statusIcon.className = 'bi bi-x-lg'        
                }
            }        
        }else if(event.target.name == 'card-expiration-date'){
            let date = document.getElementById('secure-payment-input2')
            console.log('date: ' + date)
    
            if(date){
                let statusDiv = document.getElementById('-div-'+2)
                let statusIcon = document.getElementById('-icon-'+2)

                if(!isNaN(Date.parse(date.value))){            
                    statusDiv.className = 'secure-payment-status-icon-div ok'
                    statusIcon.className = 'bi bi-check2'        
                }else{
                    statusDiv.className = 'secure-payment-status-icon-div wrong'
                    statusIcon.className = 'bi bi-x-lg'        
                }
            }
        }else{
            let ccv = document.getElementById('secure-payment-input3')
            console.log('card-number: ' + ccv)
    
            if(ccv){
                let statusDiv = document.getElementById('-div-'+3)
                let statusIcon = document.getElementById('-icon-'+3)
                
                if(ccv.value.length == 3 || ccv.value.length == 4){
                    statusDiv.className = 'secure-payment-status-icon-div ok'
                    statusIcon.className = 'bi bi-check2'        
                }else{
                    statusDiv.className = 'secure-payment-status-icon-div wrong'
                    statusIcon.className = 'bi bi-x-lg'        
                }
            }        
        }
    }    
}

function onSubmit(){
    let bandera = true;    

    for(let i=1; i<4; i++){
        if(!document.getElementById('-div-'+i).className.includes('ok')){
            bandera = false;
            break
        }
    }

    console.log('bandera: ' + bandera)

    if(bandera === true){
        //Se envian datos
        //Dependiendo de respuesta -> Swal

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your card has been saved successfully',
            showConfirmButton: false,
            timer: 1500
        })

    }
}

export default SecurePayment;