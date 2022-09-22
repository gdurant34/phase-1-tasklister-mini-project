document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    buildToDo(e.target["new-task-description"].value);
    form.reset();
  });
});

function buildToDo(todo) {
  console.log(todo);
  let p = document.createElement('p');
  let btn = document.createElement('button');
  p.textContent = `${todo} `;
  btn.textContent = 'x';
  btn.addEventListener('click', handleDelete);
  p.appendChild(btn);
  document.querySelector('#list').appendChild(p);
};

function handleDelete(e) {
  e.target.parentNode.remove();
};


