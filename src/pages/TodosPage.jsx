import React, { useState, useEffect, useContext } from "react";
import Layout from "../components/Layout";
import Input from "../components/common/Input";
import { DatePicker } from "antd";
import TodoItem from "../components/Todos/TodoItem/TodoItem";
import ButtonComponent from "../components/common/ButtonComponent";
import DataGridComponent from "../components/common/DataGrid";
import { AppContext } from "../components/App";
import { toDoActionTypes } from "../actionTypes";

function TodosPage() {
  const [taskToAdd, setTaskToAdd] = useState({
    date: { dateObj: null, dateStr: "" },
    text: "",
  });

  const [tasksList, setTasksList] = useState([]);
  const [state, dispatch] = useContext(AppContext);

  useEffect(() => {
    dispatch({ type: toDoActionTypes.COUNTER_INCREMENT, payload: 4 });
  }, []);

  //remove or add "disable" property to "addTodo" button
  const hideAddTodoButton = !taskToAdd.date.dateObj || !taskToAdd.text; // скрываем кнопку "Добавить таск" если пусто в инпуте или календаре. Смотрим в taskToAdd обьекте пусто ли там

  //function which gets inputed text and adds this text to taskToAdd state variable({date:{dateObj:null,dateStr:""}, text: ""}) to field "text"
  //добавляем введенные в инпут данные в стейт в переменную taskToAdd(обьект с текстом из инпута и датой из календаря) в поле text(текст из инпута).
  // Где e.target.value это введенный пользователем в инпут текст
  function taskInputHandler(e) {
    setTaskToAdd({ ...taskToAdd, text: e.target.value });
  }

  //function which gets picked date from calendar and puts date object and date string to task object fields "dateObj" и "dateStr"
  //функция , которая принимает выбранную из календаря дату. У функции 2 аргумента: обьект с датой и строка с той же датой для удобства.
  //мы можем использовать любой из эти атрибутов.Добавляем выюранную дату в стейт в переменную taskToAdd в поле date
  function pickDateHandler(date, dateString) {
    setTaskToAdd({
      ...taskToAdd,
      date: { dateObj: date, dateStr: dateString },
    });
  }

  //push new task to tasks List
  function pushNewTaskToTasksList() {
    //fullTaskToAdd - variable with "id", "done", "text" and date("dateObj" and "dateStr" fields inside "date" field) fields
    //we copy taskToAdd item from state and add "id" and "done" field to it
    //"done" field has default value - false
    // создаем новый обьект fullTaskToAdd: спредом копируем стейт переменную taskToAdd и добавляем поля done и id.
    //Это и будет наше 1todo в общем массиве tasksList
    const fullTaskToAdd = { ...taskToAdd, id: Date.now(), done: false }; //копируем спредом таск из stata. В нем сейчас находятся только текст и дата. Добавляем поля id и done
    const newTasksList = [...tasksList]; // копируем массив с тасками из стейта. Изначально он пустой. Затем там будет 1,2,3 таска(обьекты) и т.д
    newTasksList.push(fullTaskToAdd); //пушим в массив новый таск
    setTasksList(newTasksList); //обновляем переменую с массивом тасков в стейте
  }

  return (
    <Layout>
      <div className="todos-page">
        <div className="create-todo__wrapper">
          <h2>Create new task</h2>
          <div className="create-todo__inner">
            {/*Task input*/}
            <Input taskInputHandler={taskInputHandler} />
            {/*Task Date picker*/}
            <DatePicker onChange={pickDateHandler} />
            <ButtonComponent
              disabledProp={hideAddTodoButton}
              name="Add ToDo"
              eventHandler={pushNewTaskToTasksList}
            />
          </div>
        </div>

        <div className="todo-item">
          {tasksList.map((item) => (
            <TodoItem key={item.id} item={item} />
          ))}
        </div>

        <div style={{ height: 400, width: "100%" }}>
          <DataGridComponent rows={tasksList} />
        </div>
      </div>
    </Layout>
  );
}

export default TodosPage;
