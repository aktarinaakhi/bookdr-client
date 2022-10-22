export async function getAllBooks() {
  const response = await fetch('/api/tasks');
  return await response.json();
}

export async function createBook(data) {
  const response = await fetch('http://localhost:5000/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ book: data })
  });
  return await response.json();
}

export async function deleteBook(taskId) {
  const response = await fetch(`/api/task/${taskId}`, { method: 'DELETE' });
  return await response.json();
}

export async function editBook(data) {
  const response = await fetch(`/api/task`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ task: data })
  });
  return await response.json();
}

export async function fetchSettings() {
  const response = await fetch('/api/settings');
  return await response.json();
}
