import './App.css';

import {BrowserRouter, Link} from 'react-router-dom'

import logo from './assets/gtCommerce-logo.png';
import {MainRouter} from './navigation/Router.js';

function App() {
  return (    
    <div className="App">
      <Header/>      
      <MainRouter/> 
    </div>
);
}

export default App;

function Header(props){
  return (
      <div className="header-div">
        <a href='/'>
          <img src={logo} className="logo" alt="logo"/>
        </a>         

         <NavBar/>
      </div>
  );
}

function NavBar(props){
  return(                    
    <div id="header-options">
        <div id="login-div">
          <Link to='/login'>
            <div id="login-option-icon">
              <i className="bi bi-person-circle"></i>              
            </div>
            <div id="login-option-message">
              My account
            </div>
          </Link>
        </div>
        <div id="signup-div">
            <a href='/signup'>
              <div id="signup-option-icon">
                <i className="bi bi-journal-plus"></i>
              </div>
              <div id="signup-option-message">
                Add account
              </div>              
            </a>
        </div>  
    </div>                      
      
  );
}

/*NOTE: Use Link if you want navigate internally
          //<Link to='/login'>Log in</Link>
    or A href if you want an itnernal navigation
          //<a href='login'>Log in</a>
*/

/* 
return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
*/