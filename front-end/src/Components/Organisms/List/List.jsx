import React from "react";
import { useState, useEffect } from "react";
import Item from "../../Molecules/Item/Item";

const List = ({Itemlist}) =>{

    const [list, setList] = useState([])
    useEffect(() =>{
        setList(Itemlist) 
    }, [Itemlist])

    return(
        <ul>
            {list.map(content => <li><Item text={content.text}/></li>)}
        </ul>
    )
}

export default List
