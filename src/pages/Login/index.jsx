import React, { useState } from "react";
import { useParams } from "react-router-dom";
import history from "../../utils/history";
import "./styles.css";

import api from "../../services/api";

export default function Login() {
  const { type } = useParams();

  const [user, setUser] = useState("");
  const [erro, setErro] = useState("");

  async function onSubmit() {
    setErro("");
    const result = await api.post(`/${type}/login`, {
      user,
    });

    if (result.data.sucess) {
      const user_id = result.data.data.id;
      history.push(`/${type}_page/${user_id}`);
    } else {
      setErro(result.data.error);
    }
  }

  return (
    <div className="login_div">
      <h1>Login</h1>
      <input
        placeholder="Insira seu usuário"
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={onSubmit}>Login</button>
      <p>{erro}</p>
    </div>
  );
}
