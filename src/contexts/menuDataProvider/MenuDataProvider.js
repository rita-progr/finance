import {useState,createContext} from 'react';
const MenuDataContext = createContext();
const MenuDataProvider = ({children}) => {
const [menuItems,setMenuItems] = useState([
    {
        value:'Главная',
        href:'/'
      },
      {
        value:'Расходы',
        href:'/costs'
      },
      {
        value:'Доходы',
        href:'/income'
      },
      {
        value:'Сбережения',
        href:'/saving'
      },
      {
        value:'Финансовые цели',
        href:'/goals'
      },
      {
        value:'Заметки',
        href:'/notes'
      }
])
return(
    <MenuDataContext.Provider value = {{menuItems,setMenuItems}}>
        {children}
    </MenuDataContext.Provider>
)
}
export {MenuDataContext,MenuDataProvider}
