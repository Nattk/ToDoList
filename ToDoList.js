function add_item (){
    var todo_item = document.getElementById("item_input").value;
    var list = document.getElementById("ToDoList_list_output");
    var item = "<p id=\"item\">"+todo_item+"</p><button>Supprimez</button>";
    list.innerHTML = list.innerHTML +item;
}