// const labData = {
//     name: 'Steve',
//     email: 'steve@steve.com',
// };

function submitData(name,email){
    return fetch("http://localhost:3000/users", {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
        name: name,
        email: email
    })

    })
    .then(res => res.json())
    // .then(data => submitData(data))
}