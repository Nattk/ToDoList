var items = [];

function add_item (){
    var todo_item = document.getElementById("item_input").value;
    items.push({id: items.length+1, task:todo_item});
    var list = document.getElementById("ToDoList_list_output");
    var item = "<div class=\"ToDoList_list_items\" id=\"task_"+items[items.length-1].id+"\"><p id=\"item\">"+todo_item+"</p><button onclick=\"delete_item("+items[items.length-1].id+")\">Supprimez</button><button onclick=\"update_item("+items[items.length-1].id+")\">Modifiez</button></div>\
    ";
    list.innerHTML = list.innerHTML +item;
}

function delete_item (id){
    var todo_item = document.getElementById("task_"+id);
    var list = document.getElementById("ToDoList_list_output");
    console.log(list);
    list.removeChild(todo_item);
}

function update_item (id){
    var todo_item = document.getElementById("task_"+id);

}