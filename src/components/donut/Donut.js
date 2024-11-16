import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import left from "../../resources/icons/left.png";
import right from "../../resources/icons/right.png";
import {Link} from 'react-router-dom';
const Donut = ({hrefLeft,hrefRight}) => {
    const data = {
        labels: [],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: [
              "#f8919b",
              "#00a2ff",
              "rgb(248, 219, 145)",
            ],
            hoverOffset: 4,
          },
        ],
      };
    
      const options = {
        title: {
          display: true,
          text: "Круговая диаграмма",
        },
        cutoutPercentage: 50,
      };
    return (
      <div className = "app-costs__donut">
        <Link to = {hrefLeft}>
        <img src={left} alt="arrow-left" />
        </Link>
       <Doughnut data={data} options={options} style={{'maxWidth':'300px','maxHeight':'300px'}}/>
       <Link to = {hrefRight}>
       <img src={right} alt="arrow-right"/>
       </Link>
      </div>
       
    )
}
export default Donut;