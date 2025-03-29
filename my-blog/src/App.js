import React from "react";          
import "./App.css";                
import TodoList from "./todo/TodoList"; 

function App() {
    return (
        <div className="App">
            <h1>ToDo Приложение</h1>  {/* Заголовок приложения */}
            <TodoList />  {/* Встраиваем компонент списка задач */}
        </div>
    );
}

export default App;  

