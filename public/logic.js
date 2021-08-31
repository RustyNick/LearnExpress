// get from JSon file
async function collectText() {
    const textToDisplay = await makeRequest("http://localhost:3000/api", "GET")
    const header = document.getElementsByTagName('h3')[0]
    header.innerText = textToDisplay
}

// saves to JSON file

function checkData() {
    const info = getValue()
    if (info == "") {
        alert("Invalid input")
        return
    }
    saveNew()
}

function getRace() {
    let randomRace = getRaceList[Math.floor(Math.random() * getRaceList.length)]
    return randomRace
}
function getClass() {
    let randomClass = getClassList[Math.floor(Math.random() * getClassList.length)]
    return randomClass
}


async function saveNew() {

    const status = await makeRequest("http://localhost:3000/api", "POST", saveTodo())
    console.log(status)
    clear()
}

async function getDndRace() {
    const getSpecie = await makeRequest(getRace(), "GET")
    return getSpecie
}

async function getDndClass() {
    const getDnDClass = await makeRequest(getClass(), "GET")
    return getDnDClass
}

async function makeRequest(url, method, body) {
    try {
        const response = await fetch(url, {
            headers: { "Content-Type": "Application/json" },
            method,
            body: JSON.stringify(body)
        })
        const result = await response.json()
        return result

    } catch (error) {
        console.log(Error)
    }

}

function getlocation() {


}

function clear() {
    document.getElementById("textInput").value = ""
}

function getValue() {
    let getTodo = document.getElementById("textInput").value
    return getTodo
}

//Saves the written input
function saveTodo() {
    let todo = {}
    todo = { todo: getValue() }
    return todo
}
