// tasks.js
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('tasks');
const addTaskButton = document.getElementById('add-task');

// Função para adicionar uma tarefa
function addTask() {
  const taskText = newTaskInput.value.trim();

  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.innerText = taskText;

    // Adiciona imagem de lixeira para excluir a tarefa
    const trashIcon = document.createElement('img');
    trashIcon.src = './assets/images/trash.svg';
    trashIcon.alt = 'Excluir';
    trashIcon.className = 'delete-task delete-icon';
    taskItem.appendChild(trashIcon);

    taskList.appendChild(taskItem);
    newTaskInput.value = '';

    // Salvar tarefas no armazenamento local
    saveTasksToLocalStorage();
  }
}

// Função para excluir uma tarefa
function deleteTask(event) {
  if (event.target.classList.contains('delete-task')) {
    event.target.parentElement.remove();

    // Salvar tarefas no armazenamento local
    saveTasksToLocalStorage();
  }
}

// Adicionar evento ao botão para adicionar tarefa
addTaskButton.addEventListener('click', addTask);

// Adicionar evento à lista de tarefas para excluir tarefa
taskList.addEventListener('click', deleteTask);

// Salvar tarefas no armazenamento local
function saveTasksToLocalStorage() {
  const tasks = Array.from(taskList.children).map(task => task.innerText);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Carregar tarefas do armazenamento local ao carregar a página
window.addEventListener('load', () => {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
  savedTasks.forEach(taskText => {
    const taskItem = document.createElement('li');
    taskItem.innerText = taskText;

    // Adiciona imagem de lixeira para excluir a tarefa
    const trashIcon = document.createElement('img');
    trashIcon.src = './assets/images/trash.svg';
    trashIcon.alt = 'Excluir';
    trashIcon.className = 'delete-task';
    taskItem.appendChild(trashIcon);

    taskList.appendChild(taskItem);
  });
});
