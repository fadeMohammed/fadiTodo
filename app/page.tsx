"use client";

import { useState } from "react";
import Form from "./form";
import Todos from "./todos";
import Progress from "./progress";

interface ToDo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export default function Home() {
  const [toDoList, setToDoList] = useState<ToDo[]>([
    {
      id: 21546,
      title: 'مثال لعنوان النص',
      description: 'مثال لوصف المهمة امسحو من هناك 👈',
      completed: false
    }
  ]);

  function handelAddToDo(todo: ToDo) {
    setToDoList((toDoList) => [...toDoList, todo]);
  }

  function deleteToDo(id: number) {
    setToDoList((toDoList) => toDoList.filter((todo) => todo.id !== id));
  }

  function doneToDo(id: number) {
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