import React from "react";
import List from "./List";

const list = [
    {text: "teste"},
    {text: "teste1"},
    {text: "teste2"},
]

export default {
    title: 'List',
    component: List,
}

export const basic = () =>{
    return <List Itemlist={list}/>
}
