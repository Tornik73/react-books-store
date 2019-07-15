import {url} from "../Constants/constants";
import {headers} from "../Constants/constants";

export default class TodoRequests {
    static getTodos = () => fetch(`${url}todos`, {
        method: 'GET'
    });

    static createTodos = (data: any) => fetch(`${url}todos`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    });

    static deleteTodo = (id: number) => fetch(`${url}todos/${id}`, {
        method: 'DELETE'
    })
}
