import { url } from "../constants/constants";
import { headers } from "../constants/constants";

export default class userRequests {
    // static get = () => fetch(`${url}todos`, {
    //     method: 'GET'
    // });

    static auth = (user: any) => { return fetch(`${url}authenticate`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(user)
    })};

    // static delete = id => fetch(`${url}todos/${id}`, {
    //     method: 'DELETE'
    // })
}
