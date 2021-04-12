import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Home() {
  return (
    <div className="main_div">
      <h1>Bem-vindo!</h1>

      <Link to="/login/admin" className="link">
        <button id="button_admin">Admin</button>
      </Link>

      <Link to="/login/employee" className="link">
        <button id="button_employee">Funcionário</button>
      </Link>
    </div>
  );
}
