window.addEventListener("load", init)

async function init() {
    characterCard()
}

const genreaterandomId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
}

async function getMycharacter() {
    let dndRaceInfo = await getDndRace()
    let dndClassInfo = await getDndClass()
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
async function getCharacter() {
    const textToDisplay = await makeRequest("http://localhost:3000/api", "GET")
    characterInfo = JSON.parse(textToDisplay)
    return characterInfo
}

function getRace() {
    let randomRace = getRaceList[Math.floor(Math.random() * getRaceList.length)]
    return randomRace
}
function getClass() {
    let randomClass = getClassList[Math.floor(Math.random() * getClassList.length)]
    return randomClass
}

async function saveNewCharacter() {
    getNickname()
    const status = await makeRequest("http://localhost:3000/api/", "POST", saveCharacter())
    console.log(status)
    cleatField()
    characterCard()
}

async function deleteCharacter() {
    const status = await makeRequest("http://localhost:3000/api/:id", "DELETE")
    console.log(status)
}

//Getting D&D info from D&D api
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

function getNickname() {
    myCharcter.name = document.getElementById("nickname").value
    if (myCharcter.name == "") myCharcter.name = ""

    return getNickname
}

function cleatField() {
    return document.getElementById("cardContainer").innerText = ""
}

function saveCharacter() {
    let character = myCharcter
    return character
}
