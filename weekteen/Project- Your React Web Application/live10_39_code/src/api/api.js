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
  apiKey: 'e58e3582c206680c1a9401c750a2bd8293920f8e7cc301b614c14cb5f58c1bc1'
});

// /search/photos?query=${query}

export default api;
