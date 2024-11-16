import { useContext } from 'react';
import { MenuDataContext } from '../../contexts/menuDataProvider/MenuDataProvider';
import { MenuContext } from '../../contexts/menuContext/MenuContext';
import { Link } from 'react-router-dom';
import './menu.css';
const Menu = ({header}) => {
    const {menuActive,setMenuActive} = useContext(MenuContext);
    const {menuItems} = useContext(MenuDataContext);
    return(
<div className= {`menu ${menuActive?'active':''}`} onClick={()=>setMenuActive(false)}>
    <div className="menu__content" onClick={e=>e.stopPropagation()}>
        <div className="menu__header">{header}</div>
        <ul>
            {menuItems.map(item=>{
                return(
                    <li>
                    <Link to={item.href}>{item.value}</Link>
                </li>
                )
            })}
        </ul>
    </div>
</div>
    )
}
export default Menu;