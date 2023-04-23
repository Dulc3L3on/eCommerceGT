import './MyStore.css'
import ScrollToTop from "react-scroll-to-top";

function MyStore(props){
    return (
        <div className="my-store-container">
            <table className="table table-hover">
                <TableHeader/>
                <TableBody/>
            </table>
            <Footer/>
        </div>
    );
}

function TableHeader(props){
    return (
        <thead className="table-light">
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Category</th>
                <th>Features</th>
                <th>Price</th>
                <th>Available</th>
                <th>Sold</th>
            </tr>
            
        </thead>
    );
}

function Row(props){
    return (
        <tr>
            <td>
                <img id="product-img" src={props.product.item.image}/>
            </td>
            <td>{props.product.item.name}</td>
            <td>{props.product.item.category}</td>
            <td>{props.product.item.features}</td>
            <td>{props.product.price}</td>
            <td>{props.product.available}</td>
            <td>{props.product.sold}</td>
        </tr>
    );
}

function TableBody(){
    const products = [
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
          seller: {id: 2, image: '../../../../assets/sellers/seller2,', name: "Franchesco Mariato"}}        
    ];//en este caso no será un componente más ya que están las celdas...

    const rows = products.map((product, index) => 
        <Row key={index} product={product}></Row>
    );

    return (
        <tbody>
            {products && rows}
        </tbody>
    );
}

function Footer(props){
    return (
        <div id="footer-section">              
            <ScrollToTop smooth color="#000" />   
        </div>
    );
}

export default MyStore;