import "./appSaving.css";
import AppComp from "../appComp/AppComp.js";
import ProgressBar from "../progressBar/ProgressBar.js";
const AppSaving = () => {
  return (
    <AppComp name = 'Сбережения' title = "Накопительный счёт" price = "10000" component = {<ProgressBar name = "1000 p" hrefLeft={'/income'} hrefRight={'/goals'}/>}/>
  );
};

 export default AppSaving;
