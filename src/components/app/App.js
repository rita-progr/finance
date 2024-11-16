import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader.js";
import Menu from "../menu/Menu.js";
import { MenuProvider} from "../../contexts/menuContext/MenuContext.js";
import { MenuDataProvider } from "../../contexts/menuDataProvider/MenuDataProvider.js";
import AppIncome from "../appIncome/AppIncome.js";
import AppCosts from '../appCosts/AppCosts.js';
import Authoriz from "../authoriz/Authoriz.js";
import AppSaving from "../appSaving/AppSaving.js";
import AppGoals from "../appGoals/AppGoals.js";
import AppNotes from "../appNotes/AppNotes.js";
import AppFooter from "../appFooter/AppFooter.js";
import AppMain from "../appMain/AppMain.js";
function App() {
  return (
    <MenuProvider>
      <MenuDataProvider>
      <Router>
      <div className="App">
        <AppHeader />
        <main>
          <Routes>
            <Route path = "/" element = {<AppMain/>}/>
            <Route path = "/costs" element = {<AppCosts/>}/>
            <Route path = "/income" element = {<AppIncome/>}/>
            <Route path = "/user" element = {<Authoriz/>}/>
            <Route path ="/saving" element = {<AppSaving/>}/>
            <Route path = "/goals" element = {<AppGoals/>}/>
            <Route path = "/notes" element = {<AppNotes/>}/>
          </Routes>
        </main>
        <Menu header ={'Навигация по приложению'}/>
        <AppFooter/>
      </div>
    </Router>
      </MenuDataProvider>
    </MenuProvider>
  );
}

export default App;
