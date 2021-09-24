import React from 'react'

function TodoList({todos, setTodos, todo, index}) {
    function deleteHandler(e) {
        const array = [...todos];
        array.splice(index, 1);
        setTodos(array);
    };

    function checkHandler(e) {
        if (todo.completed === true) {
            const array = [...todos];
            array[index].completed = false;
            setTodos(array);
        } else {
            const array = [...todos];
            array[index].completed = true;
            setTodos(array);
        }
    };

    function editHandler () {
        const editLine = document.getElementsByClassName("editTodo")[index];
        const values = document.getElementsByClassName("values")[index];
        console.log(values)
        if (editLine.classList.contains("hidden")) {
            editLine.classList.remove("hidden");
            values.classList.add("hidden");
        } else {
            const array = [...todos];
            array[index].name = editLine.value;
            setTodos(array);
            editLine.classList.add("hidden");
            values.classList.remove("hidden");
        }
    }

    return (
        <div className="row">
            <input type="checkbox" className="checkbox btn" onChange={checkHandler} checked={todo.completed} />
            <div className="values">
                <h3 className={`text ${todo.completed ? 'green': ''}`}>{todo.name}</h3>
                <sup className="date">{todo.date}</sup>
            </div>
            <input type="text" className="editTodo hidden" defaultValue={todo.name} />
            <div className="buttons">
                <button className="btn editBtn" onClick={editHandler}>...</button>
                <button className="btn deleteBtn" onClick={deleteHandler}>X</button>
            </div>
        </div>
    )
}

export default TodoList
