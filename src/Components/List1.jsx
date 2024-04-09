import React from 'react'
import Context from '../Store/Store';
import { useContext } from 'react';

function List1() {
    const {info, setInfo} = useContext(Context);
  return (
    <div>
        list 1: {info.name}
        <button onClick={() =>setInfo({name: 'Mina'}) }>Click Me!</button>
    </div>
  )
}

export default List1;