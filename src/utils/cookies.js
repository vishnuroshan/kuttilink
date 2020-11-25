import Cookies from 'universal-cookie';
const cookies = new Cookies();


class CookieManager {

    constructor() {
        this.token = cookies.get('kutti-url-token') || null
    }

    get getToken() {
        return this.token;
    }

    set SetToken(token) {
        let newToken = cookies.get('kutti-url-token');
        if (newToken) {
            cookies.remove('kutti-url-token');
            cookies.set('kutti-url-token', token);
            this.token = token;
        } else {
            cookies.set('kutti-url-token', token);
            this.token = token;
        };
    }

    isToken() {
        return cookies.get('kutti-url-token') ? true : false;
    }

    removeToken() {
        this.token = null;
        cookies.remove('kutti-url-token');
    }
}

export default new CookieManager();