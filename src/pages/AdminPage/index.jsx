import React, { useState } from "react";
import "./styles.css";
import api from "../../services/api";
import TableRow from "../../components/TableRow";

export default function AdminPage() {
  const [items, setItems] = useState([]);

  async function get_items() {
    const result = await api.get("/admin/get_all_items");
    if (result.data.data) {
      setItems(result.data.data);
    }
  }

  useState(async () => {
    get_items();
  }, []);
  return (
    <>
      <h1>Dados cadastrados</h1>
      <div className="admin_div">
        <table className="table">
          <tbody>
            <tr>
              <th>Data</th>
              <th>ID Funcionário</th>
              <th>Valor 1</th>
              <th>Valor 2</th>
              <th>Foto</th>
              <th>Arquivo</th>
              <th>Deletar</th>
            </tr>
            {items.map((item, index) => (
              <TableRow key={index} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
