import AppComp from "../appComp/AppComp.js"
import Donut from "../donut/Donut.js";
const AppIncome = () => {
    return (
        <AppComp name = 'Доходы' title = 'Зарплата' price = '3000 р' component = {<Donut hrefLeft={'/costs'} hrefRight={'/saving'}/>}/>
    )
}
export default AppIncome;