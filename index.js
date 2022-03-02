function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            'name': name,
            'email': email
        })
    })
    .then( res => res.json())
    .then( data => {
        const p = document.createElement('p');
        p.textContent = data.id;
        document.getElementsByTagName('body')[0].appendChild(p);
    })
    .catch( error => {
        const p = document.createElement('p');
        p.textContent = error.message;
        document.getElementsByTagName('body')[0].appendChild(p);
        console.log(error.message);
    });
}