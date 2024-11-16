import { Link } from 'react-router-dom';
import './appFooter.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faMoneyBill1Wave, faCoins, faComment,faBullseye} from "@fortawesome/free-solid-svg-icons";

const AppFooter = () => {
    return (
        <div className="app-footer">
            <Link to = "/"><FontAwesomeIcon 
            icon={faHouse}
             color = "#FFF"
             style={{ fontSize: "24px" }}
             /></Link>
            <Link to = "/income">
            <FontAwesomeIcon 
            icon={faMoneyBill1Wave}
             color = "#FFF"
             style={{ fontSize: "24px" }}
             />
             </Link>
            <Link to = "/saving">
            <FontAwesomeIcon 
            icon={faCoins}
             color = "#FFF"
             style={{ fontSize: "24px" }}
             /></Link>
            <Link to = "/notes">
            <FontAwesomeIcon 
            icon={faComment}
             color = "#FFF"
             style={{ fontSize: "24px" }}
             /></Link>
            <Link to = "/goals">
            <FontAwesomeIcon 
            icon={faBullseye}
             color = "#FFF"
             style={{ fontSize: "24px" }}
             /></Link>
        </div>
    )
}
export default AppFooter;