import Context from '../Store/Store';
import { useContext } from 'react';
import React from 'react'

function List2() {
    const {info} = useContext(Context);
  return (
    <div>
        list 2: {info.name}
    </div>
  )
}

export default List2;