import React, { useEffect, useId, useState } from 'react'

function List({getItems}) {
    // const userId = useId();
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(getItems);
        // setItems(getItems());
    },[getItems])
  return (
    items.map((item,index) => {
        return <div key={index}>{item? item : 0}</div>
    })
  )
}

export default List