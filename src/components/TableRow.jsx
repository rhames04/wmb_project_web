import React from "react";
import api from "../services/api";

const TableRow = (data) => {
  async function deleteItem(id) {
    const result = await api.delete(`/admin/delete_item/${id}`);
    if (result.data.sucess) {
      alert(result.data.sucess);
    }
    window.location.reload();
  }
  const item = data.item;

  return (
    <tr>
      <td>{item.createdAt}</td>
      <td>{item.id_employee}</td>
      <td>{item.value_1}</td>
      <td>{item.value_2}</td>
      <td>{item.photo}</td>
      <td>{item.file}</td>
      <td>
        <button onClick={() => deleteItem(item.id)}>Del</button>
      </td>
    </tr>
  );
};

export default TableRow;
