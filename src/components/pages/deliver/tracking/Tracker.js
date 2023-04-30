import './Tracker.css'

import React from 'react';
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom'

function Tracker(){
    const orders = [
        {code: '3543123',
         products: 'peluche-gato-blanco, peluche-perro-bebe, amueblado-grey',
         date: '2023/07/22',
         status: 'uploading'},//el name a partir del codigo

         {code: '8987643',
         products: 'Juego-de-Sala-Sahara',
         date: '2023/04/30',
         status: 'packing'},

         {code: '5632180',
         products: 'Juego-de-Sala-Tucson',
         date: '2023/04/23',//due-date
         status: 'delivered'},

         {code: '7898462',
         products: 'Juego-de-Sala-Tucson',
         date: '2023/12/05',
         status: 'processing'},
    ];

    return (
        <div className="my-tracker-container">
            <TrackingTable orders={orders}/>
        </div>
    );
}

class TrackingTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {          
            processing: true,
            packing: false,
            uploading: false,
            carrying: false,
            delivered: false
        };
        
        this.adviceChange = this.adviceChange.bind(this);        
    }

    adviceChange(event){        
        const value = event.target.checked;
        const name = event.target.name;

        console.log("name: " +name + " value: " +value)

        this.setState({[name]: value});
        console.log('STATES')
        console.log("Processing: " + this.state.processing)
        console.log("Packing: " + this.state.packing)
        console.log("Uploading: " + this.state.uploading)
        console.log("Carrying: " + this.state.carrying)
        console.log("Delivered: " + this.state.delivered)

    }  

    render(){
        return (
            <div id="my-tracker-table-container">
                <div id="my-tracker-table-filter">
                    <div id="my-tracker-input-filter">
                        <input type="number"
                               name ="my-tracker-searcher"
                               id="my-tracker-searcher"
                               placeholder="Search the order"/>
                        <div id="my-tracker-button-search">
                            <i className="bi bi-search"></i>
                        </div>                        
                    </div>
                    
                    <TrackingFilter processing={this.state.processing} 
                                    packing={this.state.packing} 
                                    uploading={this.state.uploading} 
                                    carrying={this.state.carrying} 
                                    delivered={this.state.delivered} 

                                    adviceChange={this.adviceChange}/>
                </div>
                <div id="my-tracker-table-content">
                    <TrackingHeader/>
                    <TrackingBody orders={this.props.orders} 
                                  processing={this.state.processing} 
                                  packing={this.state.packing} 
                                  uploading={this.state.uploading} 
                                  carrying={this.state.carrying} 
                                  delivered={this.state.delivered} />
                </div>            
            </div>
        );
    }
}

class TrackingFilter extends React.Component{
    constructor(props){
        super(props);                    

        this.handleChange = this.handleChange.bind(this);        
    }

    handleChange(event){            
        this.props.adviceChange(event);
    }        

    render(){
        return (
            <div id="my-tracker-filter-container">                        
                    <div className="checked-div chd-1">
                        <input id="processing-check"
                               name="processing"
                               type="checkbox"
                               checked={this.props.processing}
                               onChange={this.handleChange} />    
                    </div>
                    <label id="checks-label" htmlFor='chd-1'>Processing  </label>   
                    <div className="checked-div chd-2">
                        <input id="packing-check"
                               name="packing"
                               type="checkbox"
                               checked={this.props.packing}
                               onChange={this.handleChange} />    
                    </div>
                    <label id="checks-label" htmlFor='checked-div chd-2'>Packing  </label>   
                    <div className="checked-div chd-3">
                        <input id="uploading-check"
                               name="uploading"
                               type="checkbox"
                               checked={this.props.uploading}
                               onChange={this.handleChange} />    
                    </div>
                    <label id="checks-label" htmlFor='checked-div chd-3'>Uploading  </label>   
                    <div className="checked-div chd-4">
                        <input id="carrying-check"
                               name="carrying"
                               type="checkbox"
                               checked={this.props.carrying}
                               onChange={this.handleChange} />    
                    </div>
                    <label id="checks-label" htmlFor='checked-div chd-4'>Carrying  </label>   
                    <div className="checked-div chd-5">
                        <input id="delivered-check"
                               name="delivered"
                               type="checkbox"
                               checked={this.props.delivered}
                               onChange={this.handleChange} />    
                    </div>                        
                    <label id="checks-label" className="label-chd-5" htmlFor='checked-div chd-5'>Delivered  </label>                    
                
            </div>
        );
    }
}

function TrackingHeader(props){    
    return(        
        <div id="my-tracker-table-header">
            <div id="my-tracker-table-title-1">
                No.
            </div>
            <div id="my-tracker-table-title-2">
                Order code
            </div>
            <div id="my-tracker-table-title-3">
                Products list
            </div>
            <div id="my-tracker-table-title-4">
                Delivery date 
            </div>
            <div id="my-tracker-table-title-5">
                Status
            </div>            
        </div>
    );
}

function TrackingBody(props){
    const orders = props.orders;
    const rows = [];

    console.log(props.orders);
 
    if(orders){
        for(let index = 0; index < orders.length; index++){            
            console.log('index ' + index)
            console.log('status' + orders[index].status)            

            if(orders[index].status === 'processing' && props.processing === true){
                console.log('pusheado [processing] ' + index)
                    rows.push(getRow(index, orders[index]));
            }else if(orders[index].status === 'packing' && props.packing === true){                                                                        
                console.log('pusheado [packing]' + index)
                rows.push(getRow(index, orders[index]));
            }else if(orders[index].status === 'uploading' && props.uploading === true){                                                        
                console.log('pusheado [uploading]' + index)
                rows.push(getRow(index, orders[index]));
            }else if(orders[index].status === 'carrying' && props.carrying === true){                                                                        
                console.log('pusheado [carrying]' + index)
                rows.push(getRow(index, orders[index]));
            }else if(orders[index].status === 'delivered' && props.delivered === true){
                console.log('pusheado [delivered]' + index)
                rows.push(getRow(index, orders[index]));
            }
        }
    }                
 
    return(
        <div id="my-tracker-table-body">
            {orders && rows}
        </div>
    );
}

function getRow(index, order){
    return ( <TrackingRow key={index} 
        number={index+1}
        code={order.code}
        products={order.products}
        date={order.date}
        status={order.status}/>);
}

function TrackingRow(props){
    return (
        <div id="my-tracker-table-row">
            <div id="my-tracker-table-title-1">
                {props.number}
            </div>
            <div id="my-tracker-table-title-2">
                {props.code}
            </div>
            <div id="my-tracker-table-title-3">
                {props.products}
            </div>
            <div id="my-tracker-table-title-4">
                <div className="date-div" id={"date-div-"+props.number} onClick={() => resetDate(props.number)}>
                    {props.date}                           
                </div>             
                <input type='date' 
                       name='my-tracker-due-date'
                       className='my-tracker-input-date'
                       id={'my-tracker-input-date-' + props.number}
                       onBlur={onInputDateChange}/>                
            </div>
            <div id="my-tracker-table-title-5">
                {props.status}
            </div>            
        </div>
    );
}

function resetDate(id){    
    console.log("index: "+id)

    var inputDiv = document.getElementById('date-div-'+id)
    var inputDate = document.getElementById('my-tracker-input-date-' + id)

    console.log(inputDate)    
    console.log(inputDiv)

    if(inputDate && inputDiv){
        inputDate.style.visibility = 'visible';        

        inputDiv.style.visibility = 'hidden';        
    }
}

function onInputDateChange(){
    let date = document.getElementById('my-tracker-input-date')
    console.log('date: ' + date)
    
    if(date){
        //Se actualiza la DB        
    }

    window.location.reload()//para que si en dado caso la fecha esta mal, entonces se arregle
    //o en todo caso vuelves a invocar la función RESET_DATE, pues parece que al invocar a reload, el componente se vuelve a montar...
    //o copias su contenido y le haces el valor igual al nuevo que ya se guardo en la DB xDxd
}//si la fecha está de manera correcta entonces se procede a almacenar, de lo contrario
 //no se cambiara nada, entonces al reloadear, volverá a aparecer la fecha
 //original

export default Tracker;

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
