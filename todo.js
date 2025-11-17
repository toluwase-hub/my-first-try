document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
    const form = document.querySelector('.input-area');

    

    const addTask = (text, completed = false) => {
        const taskText = text || taskInput.value.trim();
        if(!taskText){
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `<input type="checkBox" class="checkbox" ${completed ? 'checked' : ''} />
        <span>${taskText}</span>
        <div class="Task-buttons">
        <button class="edit-btn">🖊️</button> 
         <button class="delete-btn">🗑️</button>
         </div> `;

         const checkbox = li.querySelector('.checkbox');

         const editbtn  = li.querySelector('.edit-btn');

        if(completed){
            li.classList.add('completed');
            editbtn.disabled = true;
            editbtn.style.opacity = '0.5';
            editbtn.style.pointerEvents = 'none';
        }

        checkbox.addEventListener('change', () => {
            const isChecked = checkbox.checked;
            li.classList.toggle('completed', isChecked);
            editbtn.disabled = isChecked;
            li.style.textDecoration = isChecked ? 'line-through' : 'none';
            li.style.background = isChecked ? "grey" : "none"
            editbtn.style.opacity = isChecked ? '0.5' : '1';
            editbtn.style.pointerEvents = isChecked ?  'none' : 'auto';
        });

         editbtn.addEventListener('click', () => {
            if(!checkbox.checked){
                taskInput.value = li.querySelector('span').textContent;
                li.remove();
            }
         });

    



         li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
         });
        
        taskList.appendChild(li);
        taskInput.value = "";
    
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask()
    })

    // addTaskBtn.addEventListener('click', () => addTask());
    // taskInput.addEventListener('keypress', (e) => {
    //     if(e.key === 'Enter'){
    //     e.preventDefault();
    //         addTask();
    //     }
    // });
});