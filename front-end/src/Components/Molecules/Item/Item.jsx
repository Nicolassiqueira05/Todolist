const Item = ({text, func}) =>{
    return(
        <div className="Item">
            <p className="Item-text">{text}</p>
            <button className="Item-button" onClick={func}>X</button>
        </div>
    )
}
export default Item