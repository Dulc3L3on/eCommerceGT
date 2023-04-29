import {useState} from 'react'

export function useLocalStorage_arrays(key, initialValue){
    const [storedValue, setStoredValue, clearStoredList] = useState(() =>{
        try{
            const item = window.localStorage.getItem(key)
            return (item ? JSON.parse(item) : initialValue)
        }catch(error){
            return initialValue
        }
    })//"GET", que será asignada a la var que externa que tb posee su set...

    const setValue = value => {
        console.log('SET value: '+ value)                      

        try{
            if(value){
                let array = []

                console.log("(window.localStorage.getItem)" 
                                + ((window.localStorage.getItem(key))
                                        ?JSON.parse(window.localStorage.getItem(key))
                                        :[]))
                
                array = ((window.localStorage.getItem(key))
                                ?JSON.parse(window.localStorage.getItem(key))
                                :[])
                array.push(value)                

                setStoredValue(array)
                window.localStorage.setItem(key, JSON.stringify(array))  
                console.log('array: '+array)              
                console.log(array)
            }            
        }catch(error){
            console.log(error)
        }
    }

    const clearValue = value => {
        console.log('CLEAR value: ' + value)

        try{
            if(value){
                if(window.localStorage.getItem(key)){
                    window.localStorage.removeItem(key)
                    //Aunque en este caso no creo que el IF sea extremadamente necesario...
                }                
            }
        }catch(error){
            console.log(error)
        }
    }

    return [storedValue, setValue, clearValue];
}