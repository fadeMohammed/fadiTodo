"use client";

import { useState } from "react";
import Form from "./form";
import Todos from "./todos";
import Progress from "./progress";

export default function Home() {
  // const of todos list to 
  const [toDoList, setToDoList] = useState([
    {
      id: 21546,
      title: 'مثال لعنوان النص',
      description: 'مثال لوصف المهمة امسحو من هناك 👈',
      completed: false
    }
  ]);

  // function to add new todo
  function handelAddToDo(todo) {
    setToDoList((toDoList) => [...toDoList, todo]);
  }

  // function to delet todo
  function deleteToDo(id) {
    setToDoList((toDoList) => toDoList.filter((todo) => todo.id !== id));
  }

  // function to update compeleted to do
  function doneToDo(id) {
    setToDoList((toDoLists) =>
      toDoLists.map((toDoList) =>
        toDoList.id === id ? { ...toDoList, completed: !toDoList.completed } : toDoList
      )
    );
  }

  return (
    <>
      <main className="text-white">
        <div className="container">
          <h1 className="text-center py-4">أنجز يا شفت 💪</h1>
          <div className="todolist">
            <Todos toDos={toDoList} onDeletTodo={deleteToDo} doneToDo={doneToDo} />
            <Progress toDoList={toDoList} />
            <Form onAddTodo={handelAddToDo} />
          </div>
        </div>
      </main >
      <footer className="text-center bg-dark text-light py-2">
        👨‍💻هوي الكود دا حق فادي اوعك تجازفو. &copy;
      </footer>
    </>
  );
}
