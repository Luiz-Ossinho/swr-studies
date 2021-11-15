import useSWR from "swr";
import todoItemsService from "../../lib/utils/TodoItems";
import Maybe from '../shared/Maybe'

const TodoItemsListing = () => {
    const { data, error } = useSWR('todoItems', async (url) => todoItemsService.getAll())

    if (error) return <p>Error getting Todo Items</p>;
    if (!data) return <p>Loading ...</p>;

    const hasTodoItems = data.length != 0;

    return (<>
        <Maybe test={hasTodoItems}>
            <table>
                <tbody>
                    {data.map((item, index) => {
                        return <tr key={index}>
                            <td>{item.Name}</td>
                            <td>{item.Id}</td>
                            {/* <td><button onClick={() => this.handleEdit(index)}>Edit</button></td>
                                <td><button onClick={() => this.handleDelete(index)}>Delete</button></td> */}
                        </tr>
                    })}
                </tbody>
            </table>
        </Maybe>
        <Maybe test={!hasTodoItems}>
            <p>No Todo Items yet</p>
        </Maybe>
    </>);
}

export default TodoItemsListing;