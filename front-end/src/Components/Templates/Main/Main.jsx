import React from "react";
import { useState, useEffect } from "react";
import Inputitem from "../../Molecules/Inputitem/Inputitem";
import List from "../../Organisms/List/List"
import fetchList from "../../../Apis/fetchList"

const Main = ({id}) =>{
    const [List, setList] = useState([])
    useEffect(() => {
        setList(fetchList(id))
    })
    return(
        <div id="Main">
            <Inputitem />
            <List Itemlist={[]}/>
        </div>
    )
}

export default Main