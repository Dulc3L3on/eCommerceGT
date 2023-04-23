import React from 'react'

import './Tracking.css'
import tracking_path from '../../../../assets/tracking-path.png'
import Accordion from 'react-bootstrap/Accordion';

function Tracking(props){
    const orders = [
        {code: '3543123',
         products: 'peluche-gato-blanco, peluche-perro-bebe, amueblado-grey',
         date: '04/28/2023',
         status: 'uploading'},//el name a partir del codigo

         {code: '8987643',
         products: 'Juego-de-Sala-Sahara',
         date: '04/30/2023',
         status: 'packing'},

         {code: '5632180',
         products: 'Juego-de-Sala-Tucson, ',
         date: '23/04/2023',
         status: 'delivered'},

         {code: '7898462',
         products: 'Juego-de-Sala-Tucson, ',
         date: '05/12/2023',
         status: 'processing'},
    ];//este ya con la DB será llenado con los ele que se consigan a partir del codigo de usuario que estará en las props

    return (
        <div className='tracking-container'>
            <TrackingContent orders={orders}/>                        
        </div>
    );  
}

//solo te hace falta arreglar la apariencia del CHECK y hacer que se mantenga select... :v

function TrackingContent(props){
    return(
        <div id="accordion-container">
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">                
                    <Accordion.Header>
                        <div id="accordion-header">
                            Tracking Path
                        </div>                        
                    </Accordion.Header>                
            
                    <Accordion.Body>
                        <TrackingPicture orders={props.orders}/>
                    </Accordion.Body>
                </Accordion.Item>             
                <Accordion.Item eventKey="1">                
                    <Accordion.Header>
                        <div id="accordion-header">
                            Tracking details
                        </div>                        
                    </Accordion.Header>                
            
                    <Accordion.Body>
                        <TrackingTable orders={props.orders}/>
                    </Accordion.Body>
                </Accordion.Item>      
            </Accordion>
        </div>
    );
}

function TrackingPicture(props){
    const orders = getOrders(props.orders);//se recibirá de la DB

    return (
        <div id="tracking-picture">            
            {orders &&                
                orders.map((order, index) =>
                    <TrackingPictureBuilder key={index}
                                     code={order.code}
                                     number={index}
                                     status={order.status}
                                     position={(order.status === 'processing')?1
                                                 :((order.status === 'packing')?2
                                                    :((order.status === 'uploading')?3
                                                        :((order.status === 'carrying')?4:5)))} />
                )
            }            
        </div>            
    );
}

function getOrders(orders){
    let selectedOrders = [];    
    const today = new Date(Date.now()).toLocaleDateString();

    for(let i =0; i < orders.length; i++){
        if(orders.status !== 'delivered' || (orders.status === 'delivered' 
            && orders.date === today)){//como van a ser DATE entonces no habrá problema como si fueran string, o sea en la DB creo que se almacenará como string, luego se convertirá a date
                selectedOrders.push(orders[i]);
        }
        if(selectedOrders.length===3){
            break;
        }//si quietaras esto, se renderizarían más, solo que no lo dejé así, no porque esté dificil (pues solo tendría que add overflow y ya) sino porque no le encunetro sentido, a menos que pusiera funcioanlidad de mostrar cuando así en grafico el seleccionado(os) pues eso quiere ver el customer, estaaría bien como funcionalidad LUEGO DE TERMINAR!!!
    }

    return selectedOrders;
}//hace que las img sean de no entregados o de entregados actuales

function TrackingPictureBuilder(props){
    return (
        <div id="tracking-order">
            <div className="tracking-code">
                {props.code}
            </div>
            <div className="tracking-item">
                <div id="tracking-item-mov" className={"position-"+`${props.position}`}>
                    <span>{props.status}</span>
                    <div id="truck-icon">                
                        <i className="bi bi-truck"></i>
                    </div>            
                </div>                
                <img id="path-img" src={tracking_path} alt={props.code}/>
            </div>
        </div>        
    );
}

//NOTA: si fecha == date AND status == delivered THEN the image will be show,
 //else just will appear on the table if the option is selected
    //si no está seleccionada la opción, aunque se muestre la imagen, no será
    //mostrada en la tabla

    class TrackingTable extends React.Component{
        constructor(props){
            super(props);
            this.state = {                     
                delivered: false
            };
            
            this.adviceChange = this.adviceChange.bind(this);        
        }
    
        adviceChange(value){
            this.setState({delivered: value});
        }  

        render(){
            return (
                <div id="tracking-table-container">
                    <div id="tracking-table-filter">
                        <TrackingFilter value={this.state.delivered} adviceChange={this.adviceChange}/>
                    </div>
                    <div id="tracking-table-content">
                        <TrackingHeader/>
                        <TrackingBody orders={this.props.orders} delivered={this.state.delivered}/>
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
            this.props.adviceChange(event.target.checked);
        }        
    
        render(){
            return (
                <div id="filter-container">                        
                        <div id="checked-div">
                            <input id="delivered-check"
                                   name="delivered"
                                   type="checkbox"
                                   checked={this.props.delivered}
                                   onChange={this.handleChange} />    
                        </div>                        
                        <label htmlFor='checked-div'>Delivered  </label>                    
                    
                </div>
            );
        }
    }
    
    function TrackingHeader(props){    
        return(        
            <div id="tracking-table-header">
                <div id="tracking-table-title-1">
                    No.
                </div>
                <div id="tracking-table-title-2">
                    Order code
                </div>
                <div id="tracking-table-title-3">
                    Products list
                </div>
                <div id="tracking-table-title-4">
                    Delivery date 
                </div>
                <div id="tracking-table-title-5">
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
                if(orders[index].status === 'delivered'){
                    if(props.delivered === true){                                                
                        console.log("index: " + index);
                        rows.push( <TrackingRow key={index} 
                                                number={index+1}
                                                code={orders[index].code}
                                                products={orders[index].products}
                                                date={orders[index].date}
                                                status={orders[index].status}/>);
                    }
                }else{                                        
                    console.log("index- " + index);                    
                    rows.push( <TrackingRow key={index} 
                                            number={index+1}
                                            code={orders[index].code}
                                            products={orders[index].products}
                                            date={orders[index].date}
                                            status={orders[index].status}/>);
                }
            }
        }                
     
        return(
            <div id="tracking-table-body">
                {orders && rows}
            </div>
        );
    }
    
    function TrackingRow(props){
        return (
            <div id="tracking-table-row">
                <div id="tracking-table-title-1">
                    {props.number}
                </div>
                <div id="tracking-table-title-2">
                    {props.code}
                </div>
                <div id="tracking-table-title-3">
                    {props.products}
                </div>
                <div id="tracking-table-title-4">
                    {props.date}
                </div>
                <div id="tracking-table-title-5">
                    {props.status}
                </div>            
            </div>
        );
    }

export default Tracking;