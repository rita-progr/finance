import Donut from "../donut/Donut.js";
import AppComp from "../appComp/AppComp.js";
import "./appCosts.css";
const AppCosts = () => {
  return (
<AppComp name = 'Расходы' title = 'Продукты' price = '1000p' component = {<Donut hrefLeft={'/'} hrefRight={'/income'}/>}/>
  )
};
export default AppCosts;
