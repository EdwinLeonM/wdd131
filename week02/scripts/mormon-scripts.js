const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul'); 

button.addEventListener('click', () => {
  if (input.value.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = input.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    li.append(deleteButton);

    list.append(li);

    deleteButton.addEventListener('click', () => {
      list.removeChild(li);
    });

    input.value = ''; 
    input.focus();
  }
});
