import React, { useState } from "react"; 

function TodoList() {
    const [tasks, setTasks] = useState([]); 
    const [taskInput, setTaskInput] = useState(""); 

    const addTask = () => {
        if (taskInput.trim()) { 
            setTasks([...tasks, taskInput]); 
            setTaskInput(""); 
        }
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index)); 
    };

    return (
        <div style={{ padding: "20px", maxWidth: "400px", margin: "auto", textAlign: "center" }}>
            <h2>Список задач</h2>
            
            {/* Поле ввода и кнопка добавления */}
            <input
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)} 
                placeholder="Введите задачу"
                style={{ padding: "8px", width: "80%", marginBottom: "10px" }}
            />
            <button onClick={addTask} style={{ padding: "8px", marginLeft: "5px" }}>Добавить</button>

            {/* Список задач */}
            <ul style={{ listStyleType: "none", padding: "0" }}>
                {tasks.map((task, index) => (
                    <li key={index} style={{ margin: "10px 0", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#f3f3f3", padding: "10px", borderRadius: "5px" }}>
                        {task}
                        <button onClick={() => deleteTask(index)} style={{ backgroundColor: "red", color: "white", border: "none", padding: "5px 10px", borderRadius: "3px" }}>
                            Удалить
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList; 
