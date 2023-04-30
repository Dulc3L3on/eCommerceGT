import './Deliver-home.css'

import { Link, Outlet } from 'react-router-dom'

function DeliverHome(props){
    return (
        <div className='deliver-container'>
            <div className="header-div">
                <NavBar/>
            </div>

            <Outlet/>
        </div>
    );
}

function NavBar(props){
    return(   
        <div id="nav-bar-deliver">
            <div id="nav-deliver-options">                
                <div id="tracking">
                    <Link to='my-tracker'>My Tracker</Link>                    
                </div>                  
                <div id="request">
                    <Link to='request'>Request</Link>
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

export default DeliverHome;