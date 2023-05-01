import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from '../components/pages/Landing.js';
import Signup from '../components/generals/signup/Signup.js';
import Login from '../components/generals/login/Login.js';

import CustomerHome from '../components/pages/customer/Customer-home.js';

import Store from '../components/pages/customer/store/Store.js';
import Tracking from '../components/pages/customer/tracking/Tracking.js'
import MyStore from '../components/pages/customer/myStore/MyStore.js'
import Product from '../components/pages/customer/myStore/product/Product.js';
import Payment from '../components/forms/sensitives/Payment/Payment.js';
import SecurePayment from '../components/forms/sensitives/Payment/SecurePayment.js';
import DeliverHome from '../components/pages/deliver/Deliver-home.js';
import Tracker from '../components/pages/deliver/tracking/Tracker.js';
import Request from '../components/pages/deliver/requests/Request.js';
import AdminHome from '../components/pages/administrator/Admin-home.js';
import MyReport from '../components/pages/administrator/reports/MyReport.js';
import Monitor from '../components/pages/administrator/managment/Monitor.js';
import Employee from '../components/forms/sensitives/Employee/Employee.js';



//Owner: LANDING
function MainRouter(props){//yo imagino que debe tener props puesto que debe devolver un componente JSX...
    return (        
            <Routes>
                <Route index element={<Landing/>}/>
                <Route path='/' element={<Landing/>}/>
                <Route path='/GTCommerce' element={<Landing/>}/>
                    <Route path='payment' element={<Payment/>}/>
                        <Route path='payment/secure-payment' element={<SecurePayment/>}/>
                                
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>

                <Route path='my-account/user' element={<CustomerHome/>}>
                    <Route path='store' element={<Store/>}/>
                        <Route path='store/payment' element={<Payment/>}/>                        
                            <Route path='store/payment/secure-payment' element={<SecurePayment/>}/>
                    <Route path='track' element={<Tracking/>}/>
                    <Route path='my-store' element={<MyStore/>}/>                        
                        <Route path='my-store/add-product' element={<Product/>}/>                       
                    
                </Route>

                <Route path='my-account/deliver' element={<DeliverHome/>}>
                    <Route path='my-tracker' element={<Tracker/>}/>
                    <Route path='request' element={<Request/>}/>
                </Route>
                <Route path='my-account/admin' element={<AdminHome/>}>
                    <Route path='monitor' element={<Monitor/>}/>
                        <Route path='monitor/new-employee' element={<Employee/>}/>
                    <Route path='my-report' element={<MyReport/>}/>
                </Route>

            </Routes>        
    );//lo de my accoutn está aqui temporalmente

    //ya en el router de login y signup ya usaras el Guard para ver a donde direcionar...
    //cuando se vaya usar el Outlet, entonces Router 2 las eti si solo con children (1) entonces 1 eti y "{}""

        //NOTA: en la app o store, la verdad no se donde exacatamente
        //(mas seguro en store ahora que lo pienso) no fue nec colocar
        //el <Outlet/> es mas en ese caso se puso al centro el contenido
        //del Payment, deplano porque así está seteado el contiedo, de
        //la Store

    //NOTA - secure payment
        //IF: secure-payment - creo que no tb funciona con store y nada mas o no funciona para nada :v
        //IF: payment/secure-payment - solo renderizará esto, es decir si pones algo antes de esto que no sea localhost, entonces no se abre
        //IF: store/payment/secure-payment - ahí si renderizará cuando se ponga la ruta [correcta] que lleva a renderizar a store...       

    //Si te da tiempo
        //my-account->customer-home
        //my-account-user...->user_profile
        //my-account->deliver-home
        //my-account-deliver...->deliver-profile
        //my-account->admin-home
        //my-account-admin...->admin-profile
    //lo de los profile está bien, pero que onda con my.account :v o sea, me refiero que aun no he hallado su utilidad o el funcionamiento que tiene para mi...
    //creo que en realidad la cuestión está en que
        //user7deliver/admin, deberían estar al principio y my-account ser una opción, pero para evitar inconvenientes con el mismo nombre fue que lo hice así xD

}//login, sign in and just that

function HomeRouter(){
    return (        
        <Routes>      
            <Route path='my-account/user/*' element={<CustomerHome/>}/>
            <Route path='/my-account/admin/' element={<Tracking/>}/>
            <Route path='/my-account/deliver/' element={<MyStore/>}/>
        </Routes>        
    );
}//esto lo tengo que hacer ejecutar en App.js porque si lo hago en login me va a costar, entonces tendré que hacer algo como un levantamiento de estado, para modificar esto, solo que no se como si el login se add automaticamente y no de manera directa y explícita...
 //entonces tengo que hacer que el render del div se vuelva a exa para así llegar al métodoo de las decisiones del router que será add al App.js para asó revisar esa var (bandera) para así saber que se han logeado y por lo tanto se debe hacer el envío al home respectivo...
    //voy a probar usar una funcion que App.js va a exportar y haga un cambio en la interfaz, solo que para eso tendría que volver app.Js en una clase... para así hacer posibel esto... basate en MyStore, pues ahí creo que haces algo asi xD

//luego tengo que hacer que sea usre:id para que así no tenga problemas... como en el tuto

function CustomerRouter(props){
    return (        
        <Routes>     
            <Route path='shop' element={<Store/>}/>
            <Route path='track' element={<Tracking/>}/>
            <Route path='my-store' element={<MyStore/>}/>
        </Routes>        
    );
}

export {MainRouter, CustomerRouter};

/*NOTES
    - absolutas: add "/" antes del nombre del path
    - relativas: add NOTHING before the path name
    + descendant
        vs
    + nested

*/


//POR HACER
//lo que harás es probar si colocando todas las rutas, es decir invocar
//las funciones que ibas a usar ndivdualmente, dentro del MainRouter,
//para ver si no da ningun problema
    //es decir si no sse logra abrir desde otros lugar solo cuando esté
    //dentro del padre correcto
//usando outlet
    //hasta donde sé solo lo deberías colocar dentro donde quieres que aparezca
    //El contenido es decir debajo de los nav
    //luego ya con eso si funciona entonces ya la hicicste
        //proque quiere decir que si lo detecta
            //pero si deberás probar que no se pueda acceder estando en otra parte
    //eso con el ultimo video
        //tb lee el tuto prevo, el que no entendiste por estar pensando

    //en la noche harás lo de arqui!!!
        //después de las 20