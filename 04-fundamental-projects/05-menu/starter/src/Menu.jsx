import MenuItem from "./MenuItem"
const Menu = ({ menus }) => {

    return (
        <div className="menu">
            {menus.map(item => (<MenuItem menu={item} />))}
        </div>

    )
}

export default Menu