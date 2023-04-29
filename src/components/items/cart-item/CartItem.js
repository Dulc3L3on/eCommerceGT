import './CartItem.css'

import Swal from 'sweetalert2'

function CartItem(props){
    return (
        <div id="cart-content">
            <div id="card-index-section">
                {props.index}
            </div>
            <div id="cart-item-section">
                <div id="cart-image-section">
                    <img src={props.item.product.available} alt={props.item.product.item.brand}/>
                </div>
                <div id="cart-information-section">
                    <div id="name-brand-div">
                        {props.item.product.item.name} - {props.item.product.item.brand}
                    </div>
                    <div>
                        <p>Price: Q.{props.item.product.price}</p>
                    </div>
                    <div id="available-item">
                        <p>Available: {props.item.product.available}</p>
                    </div>
                </div>                
                <div id="cart-aquisition-section">
                    <input type="number"
                           name="aquisition-button" 
                           id="aquisition-button"
                           min={0}
                           max={props.item.product.available}    
                           defaultValue={props.item.quantity} 
                           onChange={(e) => handleChange(props.onChange, (props.index-1), props.item, e.target.value)}/>
                </div>
            </div>
        </div>
    );  
}

function handleChange(onChange, index, item, value){
    item.quantity = document.getElementById('aquisition-button').value;
    console.log('item.quantity' + item.quantity)
    console.log('value: '+value)
    console.log('value == 0 '+ (value == 0))

    onChange(index, item);

    if(value == 0){//=0
        Swal.fire({
            title: 'Are you sure?',
            text: ("Your are going to delete " + item.product.item.name),
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              onDelete(index);

              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }
}

function onDelete(key){
    let array = JSON.parse(window.localStorage.getItem('cart-products'))

    array.splice((key), 1)//se eliminará el elemento en la posi = key, y el 1 es para que solo se app a 1 solo elemento, es decir el específico xD
    localStorage.setItem('cart-products', JSON.stringify(array))//reemplazo del anterior
    window.location.reload()
}//works

//Cuando el input-aquisition-element llegue a 0, se mostrará el alert, preguntando
//Si desea eliminar el item de carrito

export default CartItem;
//hize este componente una función, porque al seleccionar el 
    // boton (+) -> se va a hacer la axn aquí mismo, no afecta el carrito general, solo el item
    // boton (-) -> se afecta todo el carrito, por lo tanto se exe
    //              el método que el padre (Shopping-cart) envió, el
    //              cual recibirá el tipo de la axn (delete parcial/completo)
    //              y el codigo o nombre del objeto a eliminar