let urlremote='https://webapidemo.herokuapp.com/';
fetch(urlremote)
    .then(response => response.json())
    .then(json => {
        for (let index = 0; index < json.length; index++) {

            let myul = document.getElementById('data')
            let x = document.createElement('li')
            x.innerHTML = json[index].username
            myul.appendChild(x)
        }
    });
