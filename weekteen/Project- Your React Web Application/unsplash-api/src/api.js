class Api {
    constructor(config) {
        this._baseUrl = config.baseUrl
        this._apiKey = config.apiKey
    }

    getCards(searchText) {
        return fetch(`${this._baseUrl}search/photos?query=${searchText}`, {
            headers: {
                Authorization: `Client-ID ${this._apiKey}`
            }
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
    }
}

const api = new Api({
    baseUrl: 'https://api.unsplash.com/',
    apiKey: 'qy7kg1tkgsJkzmXelJ1943iRz9rYzGKJgGINT-OEFJQ'
});

// /search/photos?query=${query}

export default api;

// qy7kg1tkgsJkzmXelJ1943iRz9rYzGKJgGINT-OEFJQ

// jIiSxhk2YWMsEhC8QMk1VAo_GPBAS_Fw6sgdJX5Mj6k