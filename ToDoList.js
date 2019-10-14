var items = [];

function add_item (){
    var todo_item = document.getElementById("item_input").value;
    items.push({id: items.length+1, task:todo_item});
    var list = document.getElementById("ToDoList_list_output");
    var item = "<div class=\"ToDoList_list_items\" id=\""+items[items.length-1].id+"\"><p id=\"item\">"+todo_item+"</p><button>Supprimez</button></div>";
    list.innerHTML = list.innerHTML +item;
}

