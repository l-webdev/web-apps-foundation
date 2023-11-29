// Funktion zum Hinzufügen eines neuen Todos
function addTodo() {
  let todoInput = document.querySelector("#todo-input");
  let todoText = todoInput.value.trim();

  // Prüfen auf Duplikate
  if (isDuplicate(todoText)) {
    alert("Todo with the same description already exists!");
    return;
  }

  // Prüfen auf Mindestlänge
  if (todoText.length >= 5) {
    let newTodo = {
      id: generateUniqueId(),
      description: todoText,
      done: false,
    };
    todos.push(newTodo);
    saveTodos();
    todoInput.value = "";
    renderTodos();
  } else {
    alert("Todo description must have 5 or more characters!");
  }
}

// Funktion zum Überprüfen auf Duplikate
function isDuplicate(description) {
  let lowerCaseDescription = description.toLowerCase();
  return todos.some(
    (todo) => todo.description.toLowerCase() === lowerCaseDescription
  );
}

// Funktion zum Rendern der Todo-Liste
function renderTodos() {
  let todoList = document.querySelector("#todo-list");
  todoList.innerHTML = "";
  let filter = document.querySelector('input[name="filter"]:checked').id;
  todos.forEach(function (todo) {
    if (
      filter === "all" ||
      (filter === "open" && !todo.done) ||
      (filter === "done" && todo.done)
    ) {
      let todoElement = document.createElement("li");
      todoElement.textContent = todo.description;
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todo.done;
      checkbox.addEventListener("change", function () {
        todo.done = this.checked;
        saveTodos();
        renderTodos();
      });
      todoElement.appendChild(checkbox);
      todoList.appendChild(todoElement);
    }
  });
}

// Funktion zum Speichern der Todos im Local Storage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Funktion zum Laden der Todos aus dem Local Storage oder mit default Todos
function loadTodos() {
  let storedTodos = localStorage.getItem("todos");
  todos = storedTodos ? JSON.parse(storedTodos) : getDefaultTodos();
  renderTodos();
}

// Funktion zum Erhalten der default Todos
function getDefaultTodos() {
  return [
    { id: 1, description: "Learn HTML", done: false },
    { id: 2, description: "Learn CSS", done: false },
    { id: 3, description: "Learn JavaScript", done: false },
  ];
}

// Funktion zum Generieren einer eindeutigen ID
function generateUniqueId() {
  return new Date().getTime();
}

// Event-Listener für den "Add" Button
document.querySelector("#add-button").addEventListener("click", addTodo);

// Event-Listener für die Enter-Taste
document
  .querySelector("#todo-input")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTodo();
    }
  });

// Event-Listener für die Radio-Buttons
document.querySelectorAll('input[name="filter"]').forEach(function (filter) {
  filter.addEventListener("change", renderTodos);
});

// Laden der Todos beim Start der Anwendung
loadTodos();

// Event-Listener für den "Clear Local Storage" Button
document
  .querySelector("#clear-storage-button")
  .addEventListener("click", clearLocalStorage);

// Funktion zum Löschen des Local Storage und Laden der default Todos
function clearLocalStorage() {
  localStorage.removeItem("todos");
  todos = getDefaultTodos();
  renderTodos();
}

// Event-Listener für den "Remove Done Todos" Button
document
  .querySelector("#remove-done-button")
  .addEventListener("click", removeDoneTodos);

// Funktion zum Entfernen der erledigten Todos
function removeDoneTodos() {
  todos = todos.filter((todo) => !todo.done);
  saveTodos();
  renderTodos();
}
