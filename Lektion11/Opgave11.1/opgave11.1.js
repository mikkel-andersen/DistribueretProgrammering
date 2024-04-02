// opgave11.1.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
// const userUrl = 'https://jsonplaceholder.typicode.com/users/11';
// const userUrl = 'httpz://jsonplaceholder.typicode.com/users';

let p = fetch(userUrl)
p.then(showResult)


async function get(userUrl) {
    const respons = await fetch(userUrl);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function showResult() {
    try {
        let result = await get(userUrl)
        for (let person of result) {
            console.log(person.name)
        }
    } catch (error) {
        console.error(error)
    }
}

function showResultThen(result) {
    for (let person of result) {
        console.log(person.name)
    }
}

showResult();
