let openHABService = {};

openHABService.fetchItems = async function (url) {
    return fetch(url + "?recursive=false").then((response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch items from openHAB')
        }
        return response.json();
    });
};

openHABService.postCommand = async function (url, data) {
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "text/plain",
        },
        body: data,
    }).catch((rejection) => console.error(rejection));
};

openHABService.getRestURL = function (userUri) {
    if (!userUri) {
        userUri = window.location.hostname.indexOf('grid.asterics.eu') > -1 ? "http://127.0.0.1:8080" : "http://" + window.location.hostname + ":8080";
    }

    if (userUri.indexOf('http') === -1) {
        userUri = 'http://' + userUri;
    }

    let parser = document.createElement('a');
    parser.href = userUri;
    parser.pathname = "/rest/items/";
    if (!parser.port) {
        parser.port = 8080;
    }

    return parser.href
}

export {openHABService};
