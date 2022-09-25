document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('#create-task-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(e.target[2].value);
    const priority = (e.target[2].value);
    const input = e.target['new-task-description'].value;
    const li = document.createElement('li');
    const btn = document.createElement('button');
    const ul = document.querySelector('#tasks');

    btn.addEventListener('click', e => {
      e.target.parentNode.remove();
    });
    btn.textContent = "X";
    li.textContent = `${input} `;
    li.className = priority.toLowerCase();
    ul.appendChild(li);
    li.appendChild(btn);
    form.reset();
  });
  const select = document.createElement('select');
  const options = ['Select Priority', 'High', 'Medium', 'Low'];

  options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.textContent = option;
    select.appendChild(optionElement);
  });

  form.appendChild(select);
  console.log(form);
});
