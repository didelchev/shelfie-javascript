const serverURL = 'http://localhost:5000/catalog'


const request = (method, url, data) => { 
    let options = {}

    if( method != 'GET'){
        options = { 
            method,
            headers: { 
                'content-type': 'application/json'
            }
        }
    }

    if (data) { 
        options.body = JSON.stringify(data)
    }

    return fetch(url, options)
        .then(res => res.json())
        .then(data => console.log(data))
}



request('GET', serverURL)


