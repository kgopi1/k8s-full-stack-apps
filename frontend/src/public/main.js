async function fetchTodos() {
  const res = await fetch(`http://${window.API_IP}:${window.API_PORT}/todos`);
  const todos = await res.json();
  const list = document.getElementById('todoList');
  list.innerHTML = '';
  todos.forEach(todo => {
    const item = document.createElement('li');
    item.textContent = `${todo.title} ${todo.done ? '(done)' : ''}`;
    item.onclick = () => toggleDone(todo.id, !todo.done);
    list.appendChild(item);
  });
}

async function addTodo() {
  const input = document.getElementById('newTodo');
  const title = input.value;
  if (!title) return;

  await fetch(`http://${window.API_IP}:${window.API_PORT}/todos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  });

  input.value = '';
  fetchTodos();
}

async function toggleDone(id, done) {
  await fetch(`http://${window.API_IP}:${window.API_PORT}/todos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ done })
  });
  fetchTodos();
}

window.onload = fetchTodos;
