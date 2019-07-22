import { url } from "../constants/constants";
import { headers } from "../constants/constants";
import { LoginUser } from "../models/login";

export default class userRequests {
    static auth = (user: LoginUser) => { 
        return fetch(`${url}authenticate`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(user)
    });
    };
}
