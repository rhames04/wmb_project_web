import React, { useState } from "react";
import "./styles.css";

import api from "../../services/api";
import { useParams } from "react-router";

export default function EmployeePage() {
  const { id } = useParams();
  const [value_1, setValue_1] = useState("");
  const [value_2, setValue_2] = useState("");
  const [photo, setPhoto] = useState(null);
  const [file, setFile] = useState(null);

  const [message, setMessage] = useState("");

  var formData = new FormData();
  formData.append("id", id);
  formData.append("value_1", value_1);
  formData.append("value_2", value_2);
  formData.append("photo", photo);
  formData.append("file", file);

  async function onSubmit() {
    const result = await api.post("employee/add_item", formData, {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
      },
    });

    if (result) {
      setMessage("Upload realizado com sucesso.");
    }
  }

  return (
    <div className="employee_div">
      <h1>Insira os dados</h1>
      <input
        placeholder="Insira um valor"
        onChange={(e) => setValue_1(e.target.value)}
      />
      <input
        placeholder="Insira um valor"
        onChange={(e) => setValue_2(e.target.value)}
      />
      <p>Selecione uma foto: </p>
      <input
        type="file"
        accept="image/*"
        placeholder="Insira uma foto"
        onChange={(e) => setPhoto(e.target.files[0])}
      />
      <p>Selecione um arquivo: </p>
      <input
        type="file"
        placeholder="Insira um arquivo"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={onSubmit}>Enviar</button>
      <p>{message}</p>
    </div>
  );
}
