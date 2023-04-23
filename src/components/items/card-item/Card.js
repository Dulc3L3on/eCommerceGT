import React from 'react';
import './Card.css';

/*import seller from '../../../assets/sellers/seller1.jpg'
import seller from '../../../assets/oso-de-peluche-gigante.jpg'*///no entinedo por qué aquí si neceista que se importe desde acá, peor en Carrousel que tampoco está en el mismo nivel de profundidad si lo permitio...
                                                             //será porque uso un objeto??? esa es la úncia diferencia...
class Card_item extends React.Component{
    constructor(props){
        super(props);
        this.state = {};//hasta donde sé no será útil, por eso tenia algo en contra de la clase, pero bueno xD, solo NO TE COMPLIQUES!!! please

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        //se enviará a la PAGE de producto        
    }

    render(){    
        return (
          <div className="card-item" onClick={this.handleClick}>
            <div id="image-section">
                <img id="image" src={this.props.product.item.image} alt={this.props.product.item.name} />
            </div>
            <div id="details-section">
                <h5>{this.props.product.item.name}</h5>
                <div id="features-section">
                    <p>{this.props.product.item.features}</p>
                </div>
                <div id="access-section">
                    <div>
                        <p>Price Q.{this.props.product.item.price}</p>
                    </div>
                    <div>
                        <p>available: {this.props.product.available}</p>
                    </div>
                </div>            
                <div id="owner-section">
                    <div>
                        <img src={this.props.product.seller.image} alt={this.props.product.seller.name}/>    
                    </div>                
                </div>            
            </div>
          </div>
        );  
    }     

}


 
export default Card_item;
//<button onClick={() => addToCart(product)}>Agregar al carrito</button> It will be used on the screen of the product detail

/*STRUCTURE
    product{
        item{
            image
            name
            brand
            features - no desc, features       
            category  y subcategoría?? piensalo...
        }
        price
        available
        seller{
            seller-id
            image
            name
        }
    }



*/