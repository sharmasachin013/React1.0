document.addEventListener("DOMContentLoaded", () => {
    const todoForm = document.getElementById("todo-form");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");
    const editModal = document.getElementById("edit-modal");
    const editForm = document.getElementById("edit-form");
    const editInput = document.getElementById("edit-input");
    const closeBtn = document.querySelector(".close-btn");

    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    let editIndex = null;

    function saveTodos() {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    function renderTodos() {
        todoList.innerHTML = "";
        todos.forEach((todo, index) => {
            const li = document.createElement("li");
            li.className = todo.completed ? "completed" : "";
            li.innerHTML = `
                <span>${todo.text}</span>
                <div>
                    <button class="edit" onclick="editTask(${index})">Edit</button>
                    <button class="delete" onclick="deleteTask(${index})">Delete</button>
                </div>
            `;
            li.addEventListener("click", () => toggleStatus(index));
            todoList.appendChild(li);
        });
    }

    function addTask(text) {
        todos.push({ text, completed: false });
        saveTodos();
        renderTodos();
        todoInput.value = "";
    }

    window.deleteTask = function(index) {
        todos.splice(index, 1);
        saveTodos();
        renderTodos();
    };

    window.editTask = function(index) {
        editIndex = index;
        editInput.value = todos[index].text;
        editModal.style.display = "flex";
    };

    function toggleStatus(index) {
        todos[index].completed = !todos[index].completed;
        saveTodos();
        renderTodos();
    }

    todoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (todoInput.value.trim()) {
            addTask(todoInput.value.trim());
        }
    });

    editForm.addEventListener("submit", (e) => {
        e.preventDefault();
        todos[editIndex].text = editInput.value.trim();
        saveTodos();
        renderTodos();
        editModal.style.display = "none";
    });

    closeBtn.addEventListener("click", () => {
        editModal.style.display = "none";
    });

    window.onclick = function(event) {
        if (event.target === editModal) {
            editModal.style.display = "none";
        }
    };

    renderTodos();
});

window.deleteTask = function(index) {
    const listItem = document.querySelectorAll("li")[index];
    listItem.classList.add("removing");
    setTimeout(() => {
        todos.splice(index, 1);
        saveTodos();
        renderTodos();
    }, 300);
};

function addTask(text) {
    todos.push({ text, completed: false });
    saveTodos();
    renderTodos();
    const newItem = todoList.lastElementChild;
    newItem.classList.add("adding");
}

