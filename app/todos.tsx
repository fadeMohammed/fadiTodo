"use client";
interface ToDo {
    id: number;
    title: string;
    description: string;
    completed: boolean;
  }
// Todos component
function Todos({ toDos, onDeletTodo, doneToDo }: { toDos: ToDo[], onDeletTodo: (id: number) => void, doneToDo: (id: number) => void }) {
    return (
        <div className="row">
            <ol className="list-group list-group-numbered">
                {toDos.map((todo) => (
                    <ToDo todo={todo} key={todo.id} onDeletTodo={onDeletTodo} doneToDo={doneToDo} />
                ))}
            </ol>
        </div>
    );
}

// ToDo component
function ToDo({ todo, onDeletTodo, doneToDo }: { todo: ToDo, onDeletTodo: (id: number) => void, doneToDo: (id: number) => void }) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 ms-auto" style={todo.completed ? { textDecoration: "line-through", textDecorationColor: "red", textDecorationStyle: "wavy" } : {}}>
                <div className="fw-bold">{todo.title}</div>
                {todo.description}
            </div>
            <button className="btn bg-info rounded-pill mx-2" onClick={() => doneToDo(todo.id)}>{todo.completed ? '🎉' : '💪'}</button>
            <button className="btn bg-danger rounded-pill" onClick={() => onDeletTodo(todo.id)}>🗑️</button>
        </li>
    );
}


export default Todos;