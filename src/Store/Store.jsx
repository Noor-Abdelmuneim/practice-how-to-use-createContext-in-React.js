import React from 'react'
import { createContext, useState } from 'react'

const Context = createContext();

export function StoreInfo({children}) {
    const [info, setInfo] = useState({ name: 'Noor'});

    return<Context.Provider value={{info, setInfo}}>{children}</Context.Provider>
  
}

export default Context;