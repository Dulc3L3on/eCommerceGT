import React, {useState, useEffect} from 'react';
import ScrollToTop from "react-scroll-to-top";

import adv1 from '../../../../assets/5.jpg'
import adv2 from '../../../../assets/6.jpg'
import adv3 from '../../../../assets/7.jpg'
import adv4 from '../../../../assets/8.jpg'

import ShoppingCart from '../../../dialogs/Shopping-cart/Shopping-cart';

//import teddy from '../../../../assets/oso-de-peluche-gigante.jpg'

import Carrousel from '../../../extras/Carousel';
import Card from '../../../items/card-item/Card.js';

import './Store.css'

function Store(props){
    return (
        <div className="store-container">
            <Advertisement/>
            <Content/>
            
        </div>
    );

}/*<Footer/>*/

function Advertisement(props){
    return (        
        <div className='adv-div'>
            <Carrousel adv1={adv1} adv2={adv2}
                       adv3={adv3} adv4={adv4}/>
        </div>
    );    
}

class Content extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render(){
        return (
            <div className="content-div">
               <SearchSection/>
               <ContentSection/>
            </div>
        );
    }
}//no se si vaya a ser nec, que sea una CLASS

class SearchContentSection extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searcher: '',
            price: 0,//es decir que no importa
            priceOrder: 'desc',
            category: 'All',//seguirá así aunque se obtenga la demás cat de la DB,
            brand: 'All'
        };

        //handlers
        this.handleChange = this.handleChange.bind(this);
        this.handleBrandChange = this.handleBrandChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        //components
        this.CriteriaSection = this.CriteriaSection.bind(this);
        this.FiltersSection = this.FiltersSection.bind(this);
        this.PriceFilter = this.PriceFilter.bind(this);
        this.CategoryFilter = this.CategoryFilter.bind(this);
        this.BrandFilter = this.BrandFilter.bind(this);
        //this.MainSearchSection = this.MainSearchSection(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value});
    }

    handleBrandChange(event){
        this.setState({brand: event.target.value});
    }

    handleSubmit(event) {        
        event.preventDefault();
      }

    //items
    CriteriaSection(props){
        return(
            <div id="criteria-section">
                    <input type="text"
                           name ="searcher"
                           id="searcher"
                           placeholder="Search on GTcommerce"
                           value={this.state.searcher}
                           onChange={this.handleChange}/>
                    <div id="button-search">
                        <i className="bi bi-search"></i>
                    </div>
                </div>
        );
    }

    FiltersSection(props){
        return(
            <div id="filters-section">                    
                <div id="filter-body-section">
                    <this.PriceFilter></this.PriceFilter>
                    <this.CategoryFilter></this.CategoryFilter>
                    <this.BrandFilter></this.BrandFilter>
                </div>
            </div>
        );
    }

    PriceFilter(props){
        return (
            <div>
               <label htmlFor="price-filter" id="lbl-price">
                    Price
                    <input type="number"
                           name="price"
                           id="price-filter"
                           value={this.state.price}
                           onChange={this.handleChange}/>    
                    <select name="priceOrder" value={this.state.priceOrder} onChange={this.handleChange} id="price-opt-filter">
                        <option value="desc">DESC</option>
                        <option value="asc">ASC</option>
                    </select>
                </label>                            
            </div>
        );
    }

    CategoryFilter(props){
        return (
            <div>
                <label htmlFor="category-filter" id="lbl-category">
                    Category
                    <select name="category" value={this.state.category} onChange={this.handleChange} id="category-filter">
                        <option value="All">All categories</option>
                        <option value="Technology">Technology</option>
                        <option value="Home">Home</option>
                        <option value="Academy">Academy</option>
                        <option value="Literature">Literature</option>
                        <option value="Decoration">Decoration</option>
                        <option value="Other">Other</option>
                    </select>
                </label>                            
            </div>
        );
    }

    BrandFilter(props){
        return (
            <div>
                <label htmlFor="brand-filter" id="lbl-brand">
                    Brand
                    <select name="brand" value={this.state.brand} onChange={this.handleBrandChange} id="brand-filter">
                        <option value="All">All brands</option>
                        <option value="Xiomi">Xiamomi</option>
                        <option value="Samsung">Samsung</option>
                        <option value="Esika">Esika</option>
                        <option value="Microsoft">Microsoft</option>                                
                        <option value="Other">Other</option>
                    </select>
                </label>                            
            </div>         
        );
    }    

    render(){        
        return(
            <div id="search-section">
                <this.CriteriaSection/>
                <this.FiltersSection/>    
            </div>            
        );        
    }    
}

function SearchSection(props){
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 200);
            console.log(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <div className={`${sticky ? "sticky after-search-section": ""}`}>
            <SearchContentSection/>
        </div>
    );    
}

class ContentSection extends React.Component{    
    constructor(props){
        super(props);
        this.state = {
            addedProduct: null            
        };

        this.handleAddedProduct = this.handleAddedProduct.bind(this);        
        //hasta donde veo el delete debe estar en el CART, proque las op de eli cada ele esta en él, al igual que ele eliminado general (cancel)
    }

    handleAddedProduct(newProduct){
        console.log('Store: product -> '+ newProduct.item.name);

        let desiredProduct = {
            product: newProduct,
            quantity: 1 //defaultValue
        }
        console.log('Store: Desired product -> '+ desiredProduct.product.item.name);

       this.setState({addedProduct: desiredProduct});
    }//recibe un objeto que será enviado desde las Card, 
    //como el Shopping cart siempre recibirá este estado cada vez que se add uno, entonces el cart debe ir acumulando lo que tiene más lo que recibe, pues esta var solo tendrá lo más reciente...

    render(){
        return (
            <div id="content-section">
                {getCards(this.handleAddedProduct) 
                    && getCards(this.handleAddedProduct)}
                <ShoppingCart action='add' cartItem={this.state.addedProduct} />
                <ScrollToTop smooth color="#000" />   
            </div>
        );
    }    
}

function getCards(addListener){//si no funciona, volveras esto un componente, luego cb de forma función a comp, y si no entonces meteras esto como comp, en la clase
    const products = [
        /*{item:
            {image: {teddy}, name: 'teddy', features: 'color: marron; tamaño: 1mt', category: 'peluche'},
         price: 205.00, available: 8,
         seller: {id: 5, image: '../../../../assets/sellers/seller5', name: "Lucila Hernandez"}},*/
        {item: 
            {image: '../../../assets/products/peluche-gato-blanco.jpg', name: 'Kitty', features: 'color: marron; tamaño: 28cm', category: 'peluche', brand: 'Teddy'},         
         price: 145.00, available: 11,
         seller: {id: 5, image: '../../../assets/sellers/seller5', name: "Lucila Hernandez"}},
         {item: 
            {image: '../../../../assets/products/peluche-perro-bebe.jpg', name: 'Puppy', features: 'color: marron; tamaño: 25cm', category: 'peluche', brand: 'Teddy'},
         price: 160.00, available: 11,
         seller: {id: 5, image: '../../../../assets/sellers/seller5', name: "Lucila Hernandez"}},
        {item: 
            {image: '../../../../assets/products/cdda31f07b0a1b8a5acb097a47160f66.jpg', name: 'rosaline desings', features: 'color: salmon; tallas: S, M, L, XL', category: 'ropa-dama', brand: 'Peppe'},
         price: 170.50, available: 12,
         seller: {id: 1, image: '../../../../assets/sellers/seller1,', name: "Reginalda Ramos"}},
        {item: 
            {image: '../../../../assets/products/adidas-terrex-ax3-whi_6.jpg', name: 'continental terrex', features: 'color: gris; tallas: 37, 38, 39', category: 'zapatos-deportivos', brand: 'Adidas'},
         price: 550.90, available: 5,
         seller: {id: 3, image: '../../../../assets/sellers/seller3,', name: "Estuardo Medina"}},
         {item: 
            {image: '../../../../assets/products/reloj-hombre-tommy-hilfiger-acero-inoxidable.png', name: 'Tommy watch', features: 'color: gris-azul; forma: esferica', category: 'accesorios-caballero', brand: 'Tommy'},
         price: 750.00, available: 5,
         seller: {id: 3, image: '../../../../assets/sellers/seller3,', name: "Estuardo Medina"}},         
         {item: 
            {image: '../../../../assets/products/49700493_1.jpeg', name: 'Tommy watch', features: 'color: azul-cafe; forma: esferica', category: 'accesorios-caballero', brand: 'Tommy'},
         price: 815.00, available: 5,
         seller: {id: 3, image: '../../../../assets/sellers/seller3,', name: "Estuardo Medina"}},
        {item: 
            {image: '../../../../assets/products/1654027407906.jpeg', name: 'water bottle 5000', features: 'color: azul, amarillo, anaranjado, rosado; capacidad: 500ml', category: 'implementos-cocina', brand: 'Oster'},
         price: 57.00, available: 20,
         seller: {id: 2, image: '../../../../assets/sellers/seller3,', name: "Estuardo Medina"}},
        {item: 
           {image: '../../../../assets/products/amueblado-grey.jpg', name: 'monsenior', features: 'color: grey; items: 2', category: 'hogar-muebles', brand: 'Premiun'},
        price: 5700.00, available: 5,
        seller: {id: 2, image: '../../../../assets/sellers/seller2,', name: "Franchesco Mariato"}},
        {item: 
           {image: '../../../../assets/products/Juego-de-Sala-Sahara.jpg', name: 'monsenior', features: 'color: gray-blue-pink-gold; items: 2', category: 'hogar-muebles', brand: 'Premiun'},
        price: 8500.00, available: 5,
        seller: {id: 2, image: '../../../../assets/sellers/seller2,', name: "Franchesco Mariato"}},
        {item: 
          {image: '../../../../assets/products/Juego-de-Sala-Tucson.jpg', name: 'monsenior', features: 'color: gray; items: 2', category: 'hogar-muebles', brand: 'August'},
        price: 8350.00, available: 5,
        seller: {id: 2, image: '../../../../assets/sellers/seller2,', name: "Franchesco Mariato"}},
        {item: 
          {image: '../../../../assets/products/Juego-de-Sala-Tucson.jpg', name: 'monsenior', features: 'color: gray; items: 2', category: 'hogar-muebles', brand: 'Mezcle'},
         price: 8350.00, available: 5,
         seller: {id: 2, image: '../../../../assets/sellers/seller2,', name: "Franchesco Mariato"}},
         {item: 
           {image: '../../../../assets/products/Juego-de-Sala-Tucson.jpg', name: 'monsenior', features: 'color: gray; items: 2', category: 'hogar-muebles', brand: 'Meteor'},
         price: 8350.00, available: 5,
         seller: {id: 2, image: '../../../../assets/sellers/seller2,', name: "Franchesco Mariato"}}        
    ];//it will be replaced by a function of a DB

    return(
        products.map((product, index) => 
            <Card key={index}
                  product={product}
                  addListener={addListener}/>)
    );
}//se va a enviar a una clase de "lógica", puesto que tiene interaccion mínima con componentes

export default Store;