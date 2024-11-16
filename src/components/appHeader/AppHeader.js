import { useState, useContext} from "react";
import "./appHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { MenuContext } from "../../contexts/menuContext/MenuContext.js";
import {Link} from 'react-router-dom';
const AppHeader = () => {
  const {menuActive,setMenuActive} = useContext(MenuContext);
  return (
    <>
      <div className="app-header">
        <FontAwesomeIcon
          icon={faBars}
          color="#FFF"
          style={{ fontSize: "24px" }}
          onClick={() => setMenuActive(!menuActive)}
        />
        <div className="app-header__balance">
          <p
            style={{
              padding: "5px 10px",
              border: "1px solid #fff",
              borderRadius: "5px",
              marginBottom: "0",
            }}
          >
            Баланс: 1000 p.
          </p>
        </div>
        <Link to = "/user">
        <div className="app-header__authoriz">
          <FontAwesomeIcon
            icon={faUser}
            color="#FFF"
            style={{ fontSize: "24px" }}
          />
        </div>
        </Link>
      </div>
    </>
  );
};

export default AppHeader;
