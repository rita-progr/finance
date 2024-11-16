import { Bar } from "react-chartjs-2";
import "./appMain.css";
import left from "../../resources/icons/left.png";
import right from "../../resources/icons/right.png";
import { Link } from "react-router-dom";
const AppMain = () => {
  const data = {
    labels: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь"],
    datasets: [
      {
        label: "Доходы",
        data: [100, 200, 300, 400, 500, 600],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Расходы",
        data: [50, 100, 150, 200, 250, 300],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="app-main">
      <h2>Главная</h2>
      <p style={{ margin: "2% auto 5% 0" }}>График доходов и расходов</p>

      <div className="app-main__container">
        <div className="app-main__bar">
          <Link to="/notes">
            <img src={left} alt="arrow-left" />
          </Link>
          <Bar data={data} />
          <Link to="/costs">
            <img src={right} alt="arrow-right" />
          </Link>
        </div>
      </div>
      <div className="table">
        <h2 style = {{'fontSize':'20px','fontWeight':'700'}}>Статистика до и после использования этого приложения</h2>
  <table style = {{'marginTop':'5%'}}>
    <thead>
      <tr>
        <th>Категория</th>
        <th>До использования приложения</th>
        <th>После использования приложения</th>
        <th>Улучшение</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Доходы</td>
        <td>1000₽</td>
        <td>1200₽</td>
        <td>+20%</td>
      </tr>
      <tr>
        <td>Расходы</td>
        <td>800₽</td>
        <td>600₽</td>
        <td>-25%</td>
      </tr>
      <tr>
        <td>Сбережения</td>
        <td>0₽</td>
        <td>200₽</td>
        <td>+100%</td>
      </tr>
      <tr>
        <td>Кредитный рейтинг</td>
        <td>400</td>
        <td>500</td>
        <td>+25%</td>
      </tr>
      <tr>
        <td>Финансовая независимость</td>
        <td>2 месяца</td>
        <td>4 месяца</td>
        <td>+100%</td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  );
};
export default AppMain;
