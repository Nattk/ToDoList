var items = [];

function add_item (){
    var todo_item = document.getElementById("item_input").value;
    items.push({id: items.length+1, task:todo_item});
    var list = document.getElementById("ToDoList_list_output");
    var item = "<div class=\"ToDoList_list_items\" id=\"task_"+items[items.length-1].id+"\"><p onclick=\"swicth_done_item("+items[items.length-1].id+")\" id=\"item\" class=\"undone\">"+todo_item+"</p><button onclick=\"delete_item("+items[items.length-1].id+")\">Supprimez</button><button onclick=\"update_item("+items[items.length-1].id+")\">Modifiez</button></div>\
    ";
    list.innerHTML = list.innerHTML +item;
}

function delete_item (id){
    var todo_item = document.getElementById("task_"+id);
    var list = document.getElementById("ToDoList_list_output");
    console.log(list);
    list.removeChild(todo_item);
}

// function update_item (id){
//     var todo_item = document.getElementById("task_"+id);
//     var input = document.createElement("input")
//     var update_task = document.createElement("button");
//     var cancel_update_task = document.createElement("button");
//     cancel_update_task.innerHTML = "Annulez";
//     update_task.innerHTML = "Modifiez";
//     update_task.setAttribute('onclick', 'update('+id+')')
//     cancel_update_task.setAttribute('onclick', 'cancel('+id+')')
//     input.type = "text";
//     input.value = todo_item.querySelector('p').innerHTML;
//     input.placeholder = todo_item.querySelector('p').innerHTML;
//     todo_item.querySelector('p').setAttribute('style', "display:none");
//     var buttons = todo_item.querySelectorAll('button');
//     for(i=0; i<buttons.length; i++){
//         buttons[i].setAttribute('style', 'display:none');
//     }
//     todo_item.appendChild(input);
//     todo_item.appendChild(update_task);
//     todo_item.appendChild(cancel_update_task);
// }

// function update(id){
  

// }

// function cancel(id){
//     var todo_item = document.getElementById("task_"+id);
//     todo_item.querySelector('input').remove();
//     var buttons = todo_item.querySelectorAll('buttons');
//     for(i=0; i<buttons.length; i++){
//         buttons[i].remove();
//     }    
//     todo_item.querySelector('button').setAttribute('style', "display:block");
//     todo_item.querySelector('p').setAttribute('style', "display:block");    
// }

function swicth_done_item(id){
    var todo_item = document.getElementById("task_"+id).querySelector('p');
    console.log(todo_item.getAttribute("class"));
    if (todo_item.getAttribute("class") == "undone"){
        todo_item.setAttribute("class", "done");
    }
     else {
        todo_item.setAttribute("class", "undone");
    }
}