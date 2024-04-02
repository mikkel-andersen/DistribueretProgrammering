
let url = 'https://jsonplaceholder.typicode.com/users'
let p = fetch(url)
console.log("her er p: " + p)
//    p.then(showNumbers)

// function showNumbers(respons) {
//     console.log("her er respons.status " + respons.status)
//     let jsonPromise = respons.json()
//     jsonPromise.then(showJson)


//     //Printer hele json
//     // respons.text().then(body => {
//     //     console.log("respons.body: " + body)
//     // });
// }

// function showJson(json) {
//     for (let person of json) {
//         console.log(person.name)
//     }
//     console.log("respons.json: " + json)
// }

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) { //OK
        throw new Error(respons.status)
    } 
    return await respons.json();
}

async function showResult() {
    let result = await get(url)
    for (let person of result) {
        console.log(person.name)
    }
}

showResult()
