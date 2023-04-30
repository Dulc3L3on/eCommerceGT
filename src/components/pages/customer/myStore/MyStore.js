import './MyStore.css'

import {Link} from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion';

function MyStore(props){
    //Me pregunto si los productos deberían tener código... o sea los que ya tienen relación con el seller. SI te vas a basar en la DB anterior (la tienda) entonces si
    const actives = [
        {item: 
            {image: '../../../../assets/products/amueblado-grey.jpg', name: 'Amueblado grey', features: 'color: grey; items: 2', category: 'hogar-muebles'},
         price: 5700.00, available: 5, sold: 1,
         seller: {id: 2, image: '../../../../assets/sellers/seller2,', name: "Franchesco Mariato"}},
         {item: 
            {image: '../../../../assets/products/Juego-de-Sala-Sahara.jpg', name: 'Juego de sala Sahara', features: 'color: gray-blue-pink-gold; items: 2', category: 'hogar-muebles'},
         price: 8500.00, available: 5, sold: 4,
         seller: {id: 2, image: '../../../../assets/sellers/seller2,', name: "Franchesco Mariato"}},
         {item: 
            {image: '../../../../assets/products/Juego-de-Sala-Tucson.jpg', name: 'Juego de Sala Tucson', features: 'color: gray; items: 2', category: 'hogar-muebles'},
          price: 8350.00, available: 5, sold: 2,
          seller: {id: 2, image: '../../../../assets/sellers/seller2,', name: "Franchesco Mariato"}},
          {item: 
            {image: '../../../../assets/products/Juego-de-Sala-Tucson.jpg', name: 'Juego de Sala Tucson', features: 'color: gray; items: 2', category: 'hogar-muebles'},
          price: 9800.00, available: 5, sold: 5,
          seller: {id: 2, image: '../../../../assets/sellers/seller2,', name: "Franchesco Mariato"}},
          {item: 
            {image: '../../../../assets/products/Juego-de-Sala-Tucson.jpg', name: 'Juego de Sala Tucson', features: 'color: gray; items: 2', category: 'hogar-muebles'},
          price: 7467.00, available: 5, sold: 0,
          seller: {id: 2, image: '../../../../assets/sellers/seller2,', name: "Franchesco Mariato"}},

          {item: 
            {image: '../../../../assets/products/amueblado-grey.jpg', name: 'Amueblado grey', features: 'color: grey; items: 2', category: 'hogar-muebles'},
         price: 5700.00, available: 5, sold: 1,
         seller: {id: 2, image: '../../../../assets/sellers/seller2,', name: "Franchesco Mariato"}},
         {item: 
            {image: '../../../../assets/products/Juego-de-Sala-Sahara.jpg', name: 'Juego de sala Sahara', features: 'color: gray-blue-pink-gold; items: 2', category: 'hogar-muebles'},
         price: 8500.00, available: 5, sold: 4,
         seller: {id: 2, image: '../../../../assets/sellers/seller2,', name: "Franchesco Mariato"}}
         
    ];//en este caso no será un componente más ya que están las celdas...

    const incomings = [
        {code: '3543123',
         username: 'Lucila Hernandez',
         item://Este no es el mismo que el de producto, pues de este no se sabe si será aprobado o no...
            {
                image: '../../../../assets/products/nokia-C1_plus-blue-front_back-int.png',
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
                image: '../../../../assets/products/serpento-nova-6.jpg',
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
                image: '../../../../assets/products/EclipseSpyder.jpg',
                name: 'Eclipse Spyder',
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
        <div className="my-store-container">
            <TableActive actives={actives}/>
            <TableIncomings incomings={incomings}/>
        </div>
    );
}

function TableActive(props){
    return (
        <div id="active-table-container">    
            <ActiveTitle />        
            <ActiveHeader/>
            <div id="active-table-content">                
                <ActiveBody products={props.actives}/>
            </div>            
        </div>
    );
}

function ActiveTitle(props){
    return(
        <div id="active-title-table">
            Current Products
        </div>
    );
}

function ActiveHeader(props){    
    return(        
        <div id="active-table-header">
            <div id="active-table-title-1">
                No.
            </div>
            <div id="active-table-title-2">
                Picture
            </div>
            <div id="active-table-title-3">
                Name
            </div>
            <div id="active-table-title-4">
                Category
            </div>
            <div id="active-table-title-5">
                Features
            </div>
            <div id="active-table-title-6">
                Price
            </div>
            <div id="active-table-title-6">
                Available
            </div>      
            <div id="active-table-title-6">
                Sold
            </div>      
        </div>
    );
}

function ActiveBody(props){
    const rows = [];
    console.log(props.products);
     
    if(props.products){
        for(let index = 0; index < props.products.length; index++){
            rows.push(getRow(index, props.products[index], 'active'));                
        }
    }                
    
    return(
        <div id="active-table-body">
            {props.products && rows}
        </div>
    );
}

function TableIncomings(props){
    return (
        <div id="incoming-table-container">
            <IncomingTitle/>
            <IncomingHeader/>
            <div id="incoming-table-content">                
                <IncomingBody products={props.incomings}/>
            </div>            
        </div>
    );
}

function IncomingTitle(props){
    return(
        <div id="active-title-table">
            Incoming Products
            <IncomingHeaderOption/>
        </div>
    );
}

function IncomingHeader(props){    
    return(        
        <div id="incoming-table-header">
            <div id="incoming-table-title-1">
                No.
            </div>
            <div id="incoming-table-title-2">
                Picture
            </div>
            <div id="incoming-table-title-3">
                Name
            </div>
            <div id="incoming-table-title-4">
                Category
            </div>
            <div id="incoming-table-title-5">
                Features
            </div>
            <div id="incoming-table-title-6">
                Price
            </div>      
        </div>
    );
}

function IncomingBody(props){
    const rows = [];
    console.log(props.products);
     
    if(props.products){
        for(let index = 0; index < props.products.length; index++){
            rows.push(getRow(index, props.products[index], 'incoming'));
        }
    }                
    
    return(
        <div id="incoming-table-body">
            {props.products && rows}
        </div>
    );
}

function getRow(index, element, type){    
    if(type === 'active'){//Estas ya se encontrarán en la tabla de productos donde están las cosas que los user vendedn
        return (<ActiveRow key={index} 
        number={index+1}
        picture={element.item.image}
        name={element.item.name}
        category={element.item.category}
        features={element.item.category}
        price={element.price}
        available={element.available}
        sold={element.sold}/>);
    }//else

    return (<IncomingRow key={index} 
        number={index+1}
        picture={element.item.image}
        name={element.item.name}
        category={element.item.category}
        features={element.item.features}
        price={element.item.product.price}/>);
}

function ActiveRow(props){
    return (        
        <div id="active-table-row">
            <div id="my-store-table-title-1">
                {props.number}
            </div>
            <div id="active-table-title-2">
                <img id="product-img" src={props.picture} alt={props.name} />
            </div>
            <div id="active-table-title-3">
                {props.name}
            </div>
            <div id="active-table-title-4">
                {props.category}
            </div>
            <div id="active-table-title-5">
                {props.features}
            </div>            
            <div id="active-table-title-6">
                {props.price}
            </div>         
            <div id="active-table-title-5">
                {props.available}
            </div>            
            <div id="active-table-title-6">
                {props.sold}
            </div>                        
        </div>        
    );

}

function IncomingRow(props){
    return (        
        <div id="incoming-table-row">
            <div id="incoming-table-title-1">
                {props.number}
            </div>
            <div id="incoming-table-title-2">
                <img src={props.picture} alt={props.name} />
            </div>
            <div id="my-store-table-title-3">
                {props.name}
            </div>
            <div id="incoming-table-title-4">
                {props.category}
            </div>
            <div id="incoming-table-title-5">
                {props.features}
            </div>            
            <div id="incoming-table-title-6">
                {props.price}
            </div>                          
        </div>        
    );

}

function IncomingHeaderOption(props){
    return (
        <Link to='add-product'>
            <div id="footer-section">              
                <span id="more-products">+</span>
            </div>    
        </Link>        
    );
}

//sería lindo que al momento de seleccionar el botón (+) no se mostrara
//la dir de la página de add-product [eso es lo que me gusta de Angular]
//que como se puede invocar a los elementos a ser colocados en cierto 
//espacio, sin problema alguno, solo por medio de una condición y tb
//hacer que en la URL no aparezca una ruta para ese componente...

export default MyStore;