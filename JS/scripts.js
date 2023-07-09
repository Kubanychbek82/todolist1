
const ul = document.querySelector("ul")
const addInput = document.querySelector(".add_input")
const addButton = document.querySelector("add_button")

const state = {
    todos: []
}


getTodods ()


function getTodods () {
    fetch("http://localhost:8000/todos")
    .then((response) => response.json())
    .then((data) => {
        state.todos = data
        render(state.todos)
    })
}

