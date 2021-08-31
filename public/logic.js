const genreaterandomId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
}

async function getMycharacter() {
    console.log("getMycharacter")
    let dndRaceInfo = await getDndRace()
    let dndClassInfo = await getDndClass()
    myCharcter = {}
    myCharcter = {
        id: genreaterandomId(),
        name: "",
        race: dndRaceInfo.name,
        age: dndRaceInfo.age,
        speed: dndRaceInfo.speed,
        class: dndClassInfo.name,
        hitDie: dndClassInfo.hit_die,
    }
    return myCharcter
}

// get from JSon file
async function collectText() {
    const textToDisplay = await makeRequest("http://localhost:3000/api/", "GET")
    characterInfo = JSON.parse(textToDisplay)
    return characterInfo
}

// saves to JSON file
function checkData() {
    console.log("checkData")
    const info = getValue()
    if (info == "") {
        alert("Invalid input")
        return
    }
    saveNew()
}

function getRace() {
    console.log("getRace")
    let randomRace = getRaceList[Math.floor(Math.random() * getRaceList.length)]
    return randomRace
}
function getClass() {
    console.log("getClass")
    let randomClass = getClassList[Math.floor(Math.random() * getClassList.length)]
    return randomClass
}


async function saveNew() {
    console.log("saveNew")
    const status = await makeRequest("http://localhost:3000/api", "POST", saveTodo())
    console.log(status)
    clear()
}

async function saveNewCharacter() {
    console.log("saveNewCharacter")
    const status = await makeRequest("http://localhost:3000/api", "POST", saveCharacter())
    console.log(status)
    clear()
}

async function getDndRace() {
    console.log("getDndRace")
    const getSpecie = await makeRequest(getRace(), "GET")
    return getSpecie
}

async function getDndClass() {
    console.log("getDndClass")
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

function clear() {
    document.getElementById("textInput").value = ""
}

function getValue() {
    console.log("getValue")
    let getTodo = document.getElementById("textInput").value
    return getTodo
}

//Saves the written input
function saveTodo() {
    console.log("saveTodo")
    let todo = {}
    todo = { todo: getValue() }
    console.log(todo)
    return todo
}

function saveCharacter() {
    console.log("saveCharacter")
    let character = myCharcter
    console.log(character)
    return character
}
