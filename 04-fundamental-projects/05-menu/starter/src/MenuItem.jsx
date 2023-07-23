

const MenuItem = ({menu}) => {
    return ( 
        <div className="menu-item" key={menu.id}>
            <img src={menu?.img} alt={menu?.title}/>
            <div className="item-info">
                <header>{menu?.title}</header>
                <p className="item-text">{menu?.desc}</p>
                <p className="item-price">£{menu?.price}</p>
            </div>
        </div>
    )
}

export default MenuItem