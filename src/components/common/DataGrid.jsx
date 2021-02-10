import React, { useState, useEffect, useContext } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { AppContext } from "../App";

const todosTableColumns = [
  { field: "id", headerName: "ID", width: 200 },
  { field: "text", headerName: "Text", width: 200 },
  {
    field: "date",
    headerName: "Date",
    width: 200,
    valueGetter: (params) => {
      //в Материал есть параметр params(обьект),
      //в котором есть поле rows. В поле rows t есть есть все вложенные поля из 1 row(1 item вtodo liste).
      //мы через params.row.date.dateStr извекаем очень вложенное свойство dateStr и ложим его в return
      //но сначала проверяем есть ли что-то вообще в свойстве date в 1 iteme(params.row.date ? ).
      console.log({ params });
      return params.row.date ? params.row.date.dateStr : ""; //в return можно положить тернарный оператор. И в зависимости
      //от условия тернарка вернет выражение 1 или выражение 2. Одно из этих выражений положится в return
    },
  },
];

function DataGridComponent({ rows }) {
  let obj = useContext(AppContext);

  return (
    <DataGrid
      rows={rows}
      columns={todosTableColumns}
      pageSize={5}
      // checkboxSelection
    />
  );
}

export default DataGridComponent;
