(() => {
    
    let toDoArray = [];


  const form = document.querySelector('.form');
  const input = document.querySelector('.task');
  const ul = document.querySelector('.toDoList');

    
  form.addEventListener('submit', event => {
    event.preventDefault();

    let itemId = Date.now();
    const toDoItem = input.value.trim();
    if (toDoItem !== '') {
      addItem(itemId, toDoItem);
      input.value = '';
      input.focus();
    }

    ul.addEventListener('click', e=> {
      let id = e.target.getAttribute('data-id');
      if (!id) return

      removeItemFromDOM(id);
      removeItemFromArray(id);
    })
  
    addItemToArray(itemId, toDoItem);
  });

  function addItem(itemId, toDoItem) {
    const li = document.createElement("li");
    li.setAttribute("data-id", itemId);

    li.innerHTML=toDoItem;
    ul.appendChild(li);
  }

  function addItemToArray(itemId, toDoItem) {
      toDoArray.push({ itemId, toDoItem});
  }

 function removeItemFromDOM(id) {

  let li = document.querySelector('[data-id="' + id + '"]');
ul.removeChild(li);
 }

function removeItemFromArray(id) {

  toDoArray = toDoArray.filter(item => item.itemId !==id);

}

})();
