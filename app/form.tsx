import { useState } from "react";
interface ToDo {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}


function Form({ onAddTodo }: { onAddTodo: (todo: ToDo) => void }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function FormSubmit(e: React.FormEvent) {
        e.preventDefault();

        const newTodo: ToDo = { title, description, completed: false, id: Date.now() };
        if (!title) return;
        onAddTodo(newTodo);
        setTitle("");
        setDescription("");
    }

    return (
        <div className="row mt-4">
            <h3 className="text-center my-2">اضافة مهمة جديدة</h3>
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
                    ></textarea>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary mb-3">اضافة</button>
                </div>
            </form>
        </div>
    );
}

export default Form;