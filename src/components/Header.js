import React from 'react'

function Header({todos, setTodos, setFilter}) {
    function inputTextHandler() {
        let todo = document.getElementById("addTodo");
        if (todo.value !== "") {
            const today = new Date();
            setTodos([...todos, {name: todo.value, completed: false, date: today.toLocaleDateString()}]);
            todo.value = "";
        };
    };

    function filterHandler(e) {
        switch(e.target.value) {
            case "todos":
                setFilter(false);
                break;
            case "completed":
                setFilter(true);
                break;
            default:
                setFilter("");
                break;
        };
    };

    return (
        <header>
        <div className="line">
            <label htmlFor="addTodo">Add a Todo</label>
            <input type="text" className="addTodo" id="addTodo"/>
            <button className="btn addBtn" id="btn" onClick={inputTextHandler}>+</button>
        </div>
        <div className="line">
            <h2>To Do List:</h2>
            <select name="list" id="list" onChange={filterHandler}>
                <option value="all">All</option>
                <option value="todos">Todos</option>
                <option value="completed">Completed</option>
            </select>
        </div>
    </header>
    )
}

export default Header
