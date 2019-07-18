import { url } from "../constants/constants";
import { headers } from "../constants/constants";

export default class userRequests {
    static auth = (user: any) => { 
        return fetch(`${url}authenticate`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(user)
    });
    };
}
