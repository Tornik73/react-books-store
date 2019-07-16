import { url } from "../constants/constants";
import { headers } from "../constants/constants";

export default class userRequests {
    // static get = () => fetch(`${url}todos`, {
    //     method: 'GET'
    // });

    static auth = (user: any) => fetch(`${url}authenticate`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(user)
    }).then(data => console.log(data));

    // static delete = id => fetch(`${url}todos/${id}`, {
    //     method: 'DELETE'
    // })
}
