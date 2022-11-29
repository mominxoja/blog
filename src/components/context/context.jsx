import React, { createContext, useEffect } from 'react';
import { useState } from 'react';

const context = createContext()

const Context = ({children}) => {

    useEffect(() =>{
      fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(res => setState(res))
      .catch()
    },[])

    const [state,setState] = useState()
    return (
        <context.Provider value={{state,setState/*,message,setMessage*/}}>
          <context.Consumer>
          {
               () => children
            }
          </context.Consumer>
        </context.Provider>
    );
}

export {context}
export default Context;
