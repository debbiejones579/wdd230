
//create variables
const button =document.querySelector('button');
const input = document.querySelector('#favchap');
const list = document.querySelector('#list');

//add to list
button.addEventListener('click', () => {
    if (input.value != '') {
        const listItem = document.createElement('li');
        //const listText = document.createElement('span');
        const deleteBtn = document.createElement('button');

        listItem.textContent = input.value;
        deleteBtn.textContent = 'X';//make a button to delete if not needed
        listItem.append(deleteBtn); 
        list.append(listItem);
//listens for someone to push delete button.0321.
        deleteBtn.addEventListener('click' ,() => {
            list.removeChild(listItem);
            input.focus;
            });
        
        input.value = '';
        input.focus;
const bomList = new outputList[value];

}});

