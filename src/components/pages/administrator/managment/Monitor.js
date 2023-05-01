import './Monitor.css'

import React from 'react';
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom'

function Monitor(){
    const employees = [
        {workID: 5623145987,
         name: 'Ricardo Venezolano',
         user:{
            username: 'ricardo-v',
            password: 'v3z?rdo@ar'
         },
         since: '2023/01/15',
         lastUpdate: '2023/01/15',
         position: 'administrator'},
        {workID: 32365985400,
           name: 'Marcella Villagran',
           user:{
              username: 'marcel-v',
              password: 'gr@la-arc3'
           },
           since: '2023/01/15',
           lastUpdate: '2023/01/15',
           position: 'deliver'},
        {workID: 5623145987,
            name: 'Josue Otoniel',
            user:{
               username: 'josh-o',
               password: 'nel=u3*su'
            },
            since: '2023/01/15',
            lastUpdate: '2023/01/15',
            position: 'deliver'},
        {workID: 60003156995,
            name: 'Ricardo Francisco',
            user:{
               username: 'ricardo-f',
               password: 'Sc0¿rDo)c@r'
            },
            since: '2023/01/15',
            lastUpdate: '2023/01/15',
            position: 'deliver'},
    ];

    return (
        <div className="monitor-container">
            <MonitorTable employees={employees}/>
            <EmployeeButton />
        </div>
    );
}

class MonitorTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {          
            employeeFilter: 'workID'
        };//si solo tiene seleccionados los checkbox, entonces solo se app orderBy, si escribe y presiona el botón de búsqueda entonces será una en específico
        
        this.adviceChange = this.adviceChange.bind(this);        
    }

    adviceChange(event){        
        const value = event.target.value;        

        console.log('monitor -checkvalue- ' + value)

        this.setState({employeeFilter: value});        
    }  

    render(){
        return (
            <div id="monitor-table-container">
                <div id="monitor-table-filter">
                    <MonitorFilter filter={this.state.employeeFilter} 

                                   adviceChange={this.adviceChange}/>
                </div>
                <div id="monitor-table-content">
                    <MonitorHeader/>
                    <MonitorBody employees={this.props.employees} 

                                 filter={this.state.employeeFilter}/>
                </div>            
            </div>
        );
    }
}

class MonitorFilter extends React.Component{
    constructor(props){
        super(props);                    

        this.handleChange = this.handleChange.bind(this);        
    }

    handleChange(event){            
        this.props.adviceChange(event);
    }        

    render(){
        return (
            <div id="monitor-filter-container">   
                <div id="monitor-input-criteria-filter">
                    <input type="text"
                           name ="monitor-searcher"
                           id="monitor-searcher"
                           placeholder="Type something..."/>
                    <div id="monitor-button-search">
                        <i className="bi bi-search"></i>
                    </div>                        
                </div>
                
                <div className="monitor-checked-div chd-1">
                    <input id="workID-check"
                           name="employeeFilter"
                           type="radio"
                           value='workID'
                           checked={((this.props.filter === 'workID')?true
                                        :((this.props.filter === 'name')?false
                                        :(this.props.filter === 'since')?false
                                        :false))}
                           onChange={this.handleChange} />    
                </div>
                <label id="monitor-checks-label" htmlFor='chd-1'>WorkID</label>   
                <div className="monitor-checked-div chd-2">
                    <input id="name-check"
                           name="employeeFilter"
                           type="radio"
                           value='name'
                           checked={((this.props.filter === 'workID')?false
                                        :((this.props.filter === 'name')?true
                                        :(this.props.filter === 'since')?false
                                        :false))}
                           onChange={this.handleChange} />    
                </div>
                <label id="monitor-checks-label" htmlFor='chd-2'>Name</label>                   
                <div className="monitor-checked-div chd-3">
                    <input id="since-check"
                           name="employeeFilter"
                           type="radio"
                           value='since'
                           checked={((this.props.filter === 'workID')?false
                                        :((this.props.filter === 'name')?false
                                        :(this.props.filter === 'since')?true
                                        :false))}
                           onChange={this.handleChange} />    
                </div>
                <label id="monitor-checks-label" htmlFor='chd-3'>Since</label>   
                <div className="monitor-checked-div chd-4">
                    <input id="lastUpdate-check"
                           name="employeeFilter"
                           type="radio"
                           value='lastUpdate'
                           checked={((this.props.filter === 'workID')?false
                                        :((this.props.filter === 'name')?false
                                        :(this.props.filter === 'since')?false
                                        :true))}
                           onChange={this.handleChange} />    
                </div>
                <label id="monitor-checks-label" htmlFor='chd-4'>Name</label>                   
            </div>
        );
    }
}

function MonitorHeader(props){    
    return(        
        <div id="monitor-table-header">
            <div id="monitor-table-title-1">
                No.
            </div>
            <div id="monitor-table-title-2">
                Work ID
            </div>
            <div id="monitor-table-title-3">
                Name
            </div>
            <div id="monitor-table-title-4">
                Username
            </div>
            <div id="monitor-table-title-5">
                Password
            </div>      
            <div id="monitor-table-title-6">
                Since
            </div>
            <div id="monitor-table-title-7">
                Last update
            </div>
            <div id="monitor-table-title-8">
                Position
            </div>                                         
        </div>
    );
}

function MonitorBody(props){
    const employees = props.employees;
    const rows = [];

    console.log(props.employees);
 
    if(employees){
        for(let index = 0; index < employees.length; index++){                                    
            rows.push(getRow(index, employees[index]));            
        }
    }                
 
    return(
        <div id="monitor-table-body">
            {employees && rows}
        </div>
    );
}

function getRow(index, employee){
    return ( <MonitorRow 
        key={index} 
        number={index+1}
        workID={employee.workID}
        name={employee.name}        
        username={employee.user.username}
        password={employee.user.password}
        since={employee.since}        
        lastUpdate={employee.lastUpdate}
        position={employee.position}/>);
}

function MonitorRow(props){
    return (
        <div id="monitor-table-row">
            <div id="monitor-table-title-1">
                {props.number}
            </div>
            <div id="monitor-table-title-2">
                {props.workID}
            </div>
            <div id="monitor-table-title-3">
                {props.name}
            </div>
            <div id="monitor-table-title-4">
                {props.username}
            </div>
            <div id="monitor-table-title-5">
                {props.password}
            </div>            
            <div id="monitor-table-title-6">
                {props.since}
            </div>                      
            <div id="monitor-table-title-7">
                {props.lastUpdate}
            </div>               
            <div id="monitor-table-title-8">
                {props.position}
            </div>        
        </div>
    );
}

function EmployeeButton(props){
    return (
        <Link to='new-employee'>
            <div className="employee-button-floating me-2">
                <i class="bi bi-person-plus-fill"></i>                     
            </div>
        </Link>        
    );
}

export default Monitor;

//NOTA
    //- Cuando quieras invocar, meodos en 
        //evnetos (onClick, onBlur...)
            //y tengan e como param
                //usa onClic((e) => method(e))
                //usa onClic((e) => method(e, var,...varn))            
                //usa onClick(() => method(var,...varn))
                //usa onClick(method)
        //para setear valores como
            //value/defaultValue={method()}
            //value/defaultValue={method(var,...varn)}
