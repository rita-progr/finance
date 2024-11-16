import {useState,createContext} from 'react';
const MenuContext = createContext();
const MenuProvider = ({children})=>{
    const [menuActive,setMenuActive] = useState(false);
    return(
        <MenuContext.Provider value = {{menuActive,setMenuActive}}>
            {children}
        </MenuContext.Provider>
    )
}
export {MenuContext,MenuProvider};
