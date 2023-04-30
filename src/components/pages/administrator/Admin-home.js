import './Admin-home.css'

import { Link, Outlet } from 'react-router-dom'

function AdminHome(props){
    return (
        <div className='admin-container'>
            <div className="header-div">
                <NavBar/>
            </div>

            <Outlet/>
        </div>
    );
}

function NavBar(props){
    return(   
        <div id="nav-bar-admin">
            <div id="nav-admin-options">
                <div id="monitor">
                    <Link to='monitor'>Monitor</Link>
                </div>
                <div id="my-report">
                    <Link to='my-report'>My Report</Link>                    
                </div>                                                  
            </div>                              
        </div>                       
    );
  }

export default AdminHome;