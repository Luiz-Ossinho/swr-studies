import useSWR from "swr";
import todoItemsService from "../../lib/utils/TodoItems";

const TodoItemsForm = () => {
    const { data, mutate } = useSWR('todoItems', async (url) => todoItemsService.getAll())

    function readableRandomStringMaker(length) {
        for (var s = ''; s.length < length; s += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.charAt(Math.random() * 62 | 0));
        return s;
    }

    const onAdd = async event => {
        let todoItem = {
            Name: readableRandomStringMaker(10)
        }
        let result = todoItemsService.create(todoItem)

        mutate([...data, result], true);
    }

    return <button type="button" onClick={onAdd}>Click Me To Add!</button>;
}

export default TodoItemsForm;