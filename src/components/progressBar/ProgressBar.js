import { Link } from "react-router-dom";
import left from "../../resources/icons/left.png";
import right from "../../resources/icons/right.png";
const ProgressBar = ({ name, hrefLeft, hrefRight }) => {
  return (
    <div className="app-costs__donut">
      <Link to={hrefLeft}>
        <img src={left} alt="arrow-left" />
      </Link>
      <div
        className="progress "
        role="progressbar"
        aria-label="Success example"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ height: "70px", width: "400px" }}
      >
        <div
          className="progress-bar progress-bar-animated"
          style={{ width: "100%", backgroundColor: "#00a2ff" }}
        >
          {name}
        </div>
      </div>
      <Link to={hrefRight}>
        <img src={right} alt="arrow-right" />
      </Link>
    </div>
  );
};
export default ProgressBar;
