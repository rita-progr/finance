import "./appGoals.css";
import AppComp from "../appComp/AppComp.js";
import left from "../../resources/icons/left.png";
import right from "../../resources/icons/right.png";
import { Link } from "react-router-dom";
const AppGoals = () => {
  return (
<AppComp name="Финансовые цели" title="Машина" price="30000"  component ={<Progress/>}/>
  );
};
const Progress = () => {
  return(
    <div className="app-costs__donut">
      <Link to = '/saving'>
    <img src={left} alt="arrow-left" />
      </Link>
     <div
    className="progress "
    role="progressbar"
    aria-label="Success example"
    aria-valuenow="75"
    aria-valuemin="0"
    aria-valuemax="100"
    style = {{'height':'70px','maxWidth':'400px', 'width':'100%'}}
  >
    <div className="progress-bar progress-bar-animated" style={{"width" : "30%", 'backgroundColor':'#00a2ff'}}>
       30%
    </div>
    </div>
    <Link to = '/notes'>
    <img src={right} alt="arrow-right"/>
    </Link>
    </div>
   
  )
}
export default AppGoals;
