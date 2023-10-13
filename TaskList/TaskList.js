function addTask(){
    let taskInput = document.getElementById("task_input");
    let taskText = taskInput.value;
    
    if(taskText == ""){
        return;
    }

    let taskList = document.getElementById("task_list");
    let taskItem = document.createElement("li");
    taskItem.innerText = taskText;

    taskItem.addEventListener("click", function(){ taskItem.classList.toggle("completed"); });

    taskList.appendChild(taskItem); 
    taskInput.value = "";
}