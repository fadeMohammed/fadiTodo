"use client";

// output todos main design
function Todos({ toDos, onDeletTodo, doneToDo }) {
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

// inechlize one todo templeate
function ToDo({ todo, onDeletTodo, doneToDo }) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 ms-auto" style={todo.completed ? { textDecoration: "line-through", textDecorationColor: "red", textDecorationStyle: "wavy" } : {}}>
                <div className="fw-bold">{todo.title}</div>
                <p>
                    {todo.description}
                </p>
            </div>
            <button className="btn bg-info rounded-pill mx-2" onClick={() => doneToDo(todo.id)}>{todo.completed ? '🎉' : '💪'}</button>
            <button className="btn bg-danger rounded-pill" onClick={() => onDeletTodo(todo.id)}>🗑️</button>
        </li>
    )
}

export default Todos;