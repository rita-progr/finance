import {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./appComp.css";

const AppComp = ({ name, title, price, component}) => {
  const [items,setItems] = useState([
    {
      id:1,
      title,
      price
    },
    {
      id:2,
      title,
      price
    },
    {
      id:3,
      title,
      price
    },
    {
      id:4,
      title,
      price
    },
    {
      id:5,
      title,
      price
    },
    {
      id:6,
      title,
      price
    },
  ]);
  const onAddItem = () => {
    if(items.length>0){
      setItems([...items,{id:items[items.length-1].id+1,title,price}])
    }else{
      setItems([{id:1,title,price}])
    }
  }
  const onDelItem = (id) => {
    setItems(items=>items.filter(item=>item.id!==id))
  }
  return (
    <div className="app-costs">
      <h1>{name}</h1>
      {component}
      <div className="app-costs__cards">
        {items.map((item)=>{
          return(
            <div className="app-costs__item">
          <FontAwesomeIcon icon={faXmark} 
          className="fa-xmark" 
          onClick = {()=>onDelItem(item.id)}/>
          <div className="app-costs__title">
            <p>{`${item.title}`}</p>
          </div>
          <div className="app-costs__subtitle">
            <p>{`${item.price}`}</p>
            <button className="app-costs__button">Изменить</button>
          </div>
        </div>
          )
        })}
      </div>
      <button className="button" onClick={onAddItem}>
        <p>+</p>
      </button>
    </div>
  );
};
export default AppComp;
