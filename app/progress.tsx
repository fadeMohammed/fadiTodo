"use client";

import ProgressBar from 'react-bootstrap/ProgressBar';

interface ToDo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

function Progress({ toDoList }: { toDoList: ToDo[] }) {
    const total = toDoList.length;
    const done = toDoList.filter((todolist) => todolist.completed).length;
    const notdone = total - done;

    let out;
    let color = 'warning';
    if (!done) {
        out = <div className="text-center py-2">ابدا انجازاتك القوية 🦾</div>;
    } else if (done > 0 && done < total) {
        if ((done / total) * 100 > 50) {
            out = <div className="text-center py-2"> أنجزت أكتر من النص🤩 باقي ليك [ {notdone} ] اوعك تقيف 🔥 </div>;
            color = 'primary';
        } else {
            out = <div className="text-center py-2"> أنجزت [ {done} ] من [ {total} ] باقي ليك [ {notdone} ] واصل يا شفت 😎 </div>;
        }
    } else if (done == total) {
        out = <div className="text-center py-2">🥳 خمت الشغل مررة واحدة 🥳</div>;
        color = 'success';
    }
    if (total == 0) {
        out = <div className="text-center py-2">✍️ أضيف مهامك عشان تبدا ✍️</div>;
    }
    return (
        <div className="row">
            <div className="text-center py-2">
                {out}
            </div>
            <div className="mb-4">
                <ProgressBar variant={color} animated now={(done / total) * 100} />
            </div>
        </div>
    );
}

export default Progress;
