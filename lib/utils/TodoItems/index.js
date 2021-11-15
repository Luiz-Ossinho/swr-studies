const FecthAllTodoItems = () => {
    const localStorageValue = localStorage.getItem('todoItems');

    console.log(localStorageValue);

    if (localStorageValue == null)
        localStorage.setItem('todoItems', JSON.stringify([]))

    return JSON.parse(localStorage.getItem('todoItems'));
};

const TodoItemCount = 0;

const CreateNewTodoItem = async todoItem => {
    let todoItems = FecthAllTodoItems();
    todoItem.Id = ++TodoItemCount;
    todoItems.push(todoItem);
    localStorage.setItem('todoItems', JSON.stringify(todoItems))
    return todoItem;
};

const todoItemsService = {
    create: CreateNewTodoItem,
    getAll: FecthAllTodoItems
}

export default todoItemsService;