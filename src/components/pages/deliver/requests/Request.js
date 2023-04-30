import './Request.css'

import React from 'react';
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom'

function Request(){
    const requests = [
        {code: '3543123',
         username: 'Lucila Hernandez',
         item://Este no es el mismo que el de producto, pues de este no se sabe si será aprobado o no...
            {
                image: '',
                name: 'Interestelar-NebulaS',
                brand: 'Nokia',
                category: 'technology-smartphone',
                features: 'type: smartphone; color: gray, sylver, gold;size: 15.9x9.8',
                product: {
                    price: 9548.5,
                    available: 9
                }
            },//esto es lo que necesito de producto, pero si no estoy mal al final aquí estará el objeto completo...            
         since: '2023/01/15',
         status: 'pending'},
         {code: '2563547',
         username: 'Estuardo Medina',
         item: 
            {
                image: '',
                name: 'Nova-21',
                brand: 'Serpento',
                category: 'vehicle-motorcycle',
                features: 'motor: 150cc; color: customizable; vehicle-type: motorcicle',
                product: {
                    price: 13200.99,
                    available: 9
                }
            },//esto es lo que necesito de producto, pero si no estoy mal al final aquí estará el objeto completo...            
         since: '2023/04/28',
         status: 'pending'},         
         {code: '9632587',
         username: 'Estuardo Medina',
         item: 
            {
                image: '',
                name: 'Mirato-sayana',
                brand: 'Mitsubishi',
                category: 'vehicle-car',
                features: 'motor: v5; color: aquamarine; vehicle-type: car',
                product: {
                    price: 63990,
                    available: 2
                }
            },//esto es lo que necesito de producto, pero si no estoy mal al final aquí estará el objeto completo...            
         since: '2023/04/28',
         status: 'pending'},         
    ];

    return (
        <div className="request-container">
            <RequestTable requests={requests}/>
        </div>
    );
}

class RequestTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {          
            pending: true,
            completed: false
        };
        
        this.adviceChange = this.adviceChange.bind(this);        
    }

    adviceChange(event){        
        const value = event.target.checked;
        const name = event.target.name;

        this.setState({[name]: value});        
    }  

    render(){
        return (
            <div id="request-table-container">
                <div id="request-table-filter">
                    <RequestFilter pending={this.state.pending} 
                                    completed={this.state.completed}

                                    adviceChange={this.adviceChange}/>
                </div>
                <div id="request-table-content">
                    <RequestHeader/>
                    <RequestBody requests={this.props.requests} 
                                 pending={this.state.pending} 
                                 completed={this.state.completed} />
                </div>            
            </div>
        );
    }
}

class RequestFilter extends React.Component{
    constructor(props){
        super(props);                    

        this.handleChange = this.handleChange.bind(this);        
    }

    handleChange(event){            
        this.props.adviceChange(event);
    }        

    render(){
        return (
            <div id="request-filter-container">   
                <div id="input-date-container">
                    <div className="input-date-div id-1">
                        <input type="date"
                               name="from"
                               className='input-date'/>
                    </div>                    
                    <div className="input-date-div id-2">
                        <input type="date"
                               name="to"
                               className='input-date'/>
                    </div>                  
                </div>
                
                <div className="checked-div chd-1">
                    <input id="pending-check"
                           name="pending"
                           type="checkbox"
                           checked={this.props.pending}
                           onChange={this.handleChange} />    
                </div>
                <label id="checks-label" htmlFor='chd-1'>Pending</label>   
                <div className="checked-div chd-2">
                    <input id="completed-check"
                           name="completed"
                           type="checkbox"
                           checked={this.props.completed}
                           onChange={this.handleChange} />    
                </div>
                <label id="checks-label" htmlFor='checked-div chd-2'>Completed</label>                   
            </div>
        );
    }
}

function RequestHeader(props){    
    return(        
        <div id="request-table-header">
            <div id="request-table-title-1">
                No.
            </div>
            <div id="request-table-title-2">
                Request code
            </div>
            <div id="request-table-title-3">
                Username
            </div>
            <div id="request-table-title-4">
                Product
            </div>
            <div id="request-table-title-5">
                Brand
            </div>
            <div id="request-table-title-6">
                Price
            </div>                        
            <div id="request-table-title-7">
                Status
            </div>           
        </div>
    );
}

function RequestBody(props){
    const requests = props.requests;
    const rows = [];

    console.log(props.requests);
 
    if(requests){
        for(let index = 0; index < requests.length; index++){            
            if(requests[index].status === 'completed'){
                if(props.completed === true){
                console.log('pusheado [completed] ' + index)
                    rows.push(getRow(index, requests[index]));
                }
            }else{
                if(props.pending === true){
                    console.log('pusheado [pending]' + index)
                    rows.push(getRow(index, requests[index]));
                }                
            }
        }
    }                
 
    return(
        <div id="request-table-body">
            {requests && rows}
        </div>
    );
}

function getRow(index, request){
    return ( <RequestRow 
        key={index} 
        number={index+1}
        code={request.code}
        username={request.username}        
        productName={request.item.name}
        brand={request.item.brand}
        price={request.item.product.price}        
        status={request.status}/>);
}

function RequestRow(props){
    return (
        <div id="request-table-row">
            <div id="request-table-title-1">
                {props.number}
            </div>
            <div id="request-table-title-2">
                {props.code}
            </div>
            <div id="request-table-title-3">
                {props.username}
            </div>
            <div id="request-table-title-4">
                {props.productName}
            </div>
            <div id="request-table-title-5">
                {props.brand}
            </div>            
            <div id="request-table-title-6">
                {props.price}
            </div>                      
            <div id="request-table-title-7">
                {props.status}
            </div>   
            {props.status === 'pending' &&
                <RequestOptions index={props.number}/>
            }
        </div>
    );
}

function RequestOptions(props){
    return (
        <div id="request-options">
            <div id="request-option-accept" onClick={() => handleRequestOptions('accept', props.index)}>
                <i class="bi bi-check2"></i>
            </div>
            <div id="request-option-denied" onClick={() => handleRequestOptions('denied', props.index)}>
                <i class="bi bi-x"></i>
            </div>
        </div>
    );
}

function handleRequestOptions(type, index){//index, para saber cual afectar...
    if(type==='accept'){
        //Se registra en la DB

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Product added succesfully',
            showConfirmButton: false,
            timer: 1300
          })
    }else{
        //se registra en la DB
    }

    setTimeout('document.location.reload()',1000);
}

export default Request;

//NOTA
    //- Cuando quieras invocar, meodos en 
        //evnetos (onClick, onBlur...)
            //y tengan e como param
                //usa onClic((e) => method(e))
                //usa onClic((e) => method(e, var,...varn))            
                //usa onClick(() => method(var,...varn))
                //usa onClick(method)
        //para setear valores como
            //value/defaultValue={method()}
            //value/defaultValue={method(var,...varn)}
