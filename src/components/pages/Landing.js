import './Landing.css';

import Store from './customer/store/Store';

function Landing(props){
    return (
        <div className="landing-container">            
            <Store/>
        </div>        
    );
}

export default Landing;
