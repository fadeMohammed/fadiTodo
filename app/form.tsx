"use client";

import { useState } from "react";

// function to handel form
function Form({ onAddTodo }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // stop default behaviuor
    function FormSubmit(e) {
        e.preventDefault();

        // resive data
        const newTodo = { title, description, completed: false, id: Date.now() };
        // stop send when tite is empty
        if (!title) return;

        // call function to add todo
        onAddTodo(newTodo);

        // reset all data
        setTitle("");
        setDescription("");
    }
    return (
        <div className="row">
            <h3 className="text-center mb-3">اضافة مهمة جديدة</h3>
            <form onSubmit={FormSubmit}>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="عنوان المهمة"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <textarea className="form-control" placeholder="وصف المهمة..."
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        maxLength={255}
                    ></textarea>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-success mb-3">اضافة</button>
                </div>
            </form>
        </div>
    );
}

export default Form;