// get from JSon file
async function collectText() {
    const textToDisplay = await makeRequest("http://localhost:3000/api", "GET")
    const header = document.getElementsByTagName('h3')[0]
    header.innerText = textToDisplay
}

// saves to JSON file
async function saveNew() {
    const status = await makeRequest("http://localhost:3000/api", "POST", saveTodo())
    console.log(status)
}

async function getDnd() {
    const getInfo = await makeRequest("https://www.dnd5eapi.co/api/", "GET")
    const text = document.getElementById("dndText")
    text.innerText = JSON.stringify(getInfo)
    console.log(getInfo)
}

async function makeRequest(url, method, body) {
    try {
        const response = await fetch(url, {
            headers: { "Content-Type": "Application/json" },
            method,
            body: JSON.stringify(body)
        })
        console.log(response)
        const result = await response.json()
        return result

    } catch (error) {
        console.log(Error)
    }

}


function getValue() {
    let getTodo = document.getElementById("textInput").value
    return getTodo
}

//Saves the written input
function saveTodo() {
    let todo = {}
    todo = { todo: getValue() }
    console.log(todo)
    return todo
}