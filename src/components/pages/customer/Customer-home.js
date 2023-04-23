import './Customer-home.css'

import { Link, Outlet } from 'react-router-dom'

function CustomerHome(props){
    return (
        <div className='customer-container'>
            <div className="header-div">
                <NavBar/>
            </div>

            <Outlet/>
        </div>
    );
}

function NavBar(props){
    return(   
        <div id="nav-bar-customer">
            <div id="nav-customer-options">
                <div id="shop">
                    <Link to='shop'>Shop</Link>
                </div>
                <div id="track">
                    <Link to='track'>Tracking</Link>                    
                </div>                  
                <div id="my-store">
                    <Link to='my-store'>My Store</Link>
                </div>                      
            </div>                              
        </div>                       
    );
  }
//al usar <a> (<a href='track'>Tracking</a>, <a href='my-store'>My Store</a>)
  //agrgar el path relativo aquí hallado, a la previa ruta es decir así como
  //en el caso de my-account/user,solo hasta my-account
//en cb el LINK, si lo hace hasta user
  //o sea que el a, busca la raiz más cercana
    //o será porque user prrácticamente no tiene nada???
        //no creo que el contenido afecte, porque esa ruta está en así 
        //combinada con user en el Router, cómo padre

export default CustomerHome;