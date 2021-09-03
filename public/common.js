const getRaceList = ["https://www.dnd5eapi.co/api/races/dwarf", "https://www.dnd5eapi.co/api/races/elf", "https://www.dnd5eapi.co/api/races/human", "https://www.dnd5eapi.co/api/races/dragonborn", "https://www.dnd5eapi.co/api/races/gnome", "https://www.dnd5eapi.co/api/races/half-orc", "https://www.dnd5eapi.co/api/races/halfling", "https://www.dnd5eapi.co/api/races/tiefling", "https://www.dnd5eapi.co/api/races/half-elf",]

const getClassList = ["https://www.dnd5eapi.co/api/classes/bard", "https://www.dnd5eapi.co/api/classes/warlock", "https://www.dnd5eapi.co/api/classes/barbarian", "https://www.dnd5eapi.co/api/classes/cleric", "https://www.dnd5eapi.co/api/classes/druid", "https://www.dnd5eapi.co/api/classes/fighter", "https://www.dnd5eapi.co/api/classes/monk", "https://www.dnd5eapi.co/api/classes/paladin", "https://www.dnd5eapi.co/api/classes/ranger", "https://www.dnd5eapi.co/api/classes/rogue", "https://www.dnd5eapi.co/api/classes/sorcerer", "https://www.dnd5eapi.co/api/classes/wizard",]

let myCharcter = []

//Render the generated results from API
async function cardContainer() {
    document.getElementById("cardContainer").innerText = ""

    let character = await getMycharacter()
    let cardBody = document.createElement("div")

    cardBody.id = "cardBody"
    cardBody.style.margin = "15px"

    let title = document.createElement("h2")
    title.id = "title"
    title.innerText = character.race

    let nickname = document.createElement("input")
    nickname.id = "nickname"
    nickname.placeholder = "name your character..."

    let ageInfo = document.createElement("p")
    ageInfo.id = "ageInfo"
    ageInfo.innerText = "Age: " + character.age

    let speedInfo = document.createElement("p")
    speedInfo.id = "speedInfo"
    speedInfo.innerText = "Speed: " + character.speed

    let className = document.createElement("p")
    className.id = "className"
    className.innerText = "class: " + character.class

    let hitDie = document.createElement("p")
    hitDie.id = "hitDie"
    hitDie.innerText = "Hit Die: D" + character.hitDie

    let saveButton = document.createElement("button")
    saveButton.id = "saveButton"
    saveButton.innerText = "Save character"
    saveButton.addEventListener('click', saveNewCharacter)

    cardBody.append(title, nickname, ageInfo, speedInfo, className, hitDie, saveButton);
    document.getElementById("cardContainer").appendChild(cardBody)
};

//Renders the Character cards
async function characterCard() {
    document.getElementById("output").innerText = ""
    let character = await getCharacter()

    for (let i = 0; i < character.length; i++) {
        const cardInfo = character[i];


        let cardBody = document.createElement("div")
        cardBody.className = "cardBody"
        cardBody.style.margin = "15px"

        let title = document.createElement("h2")
        title.className = "title"
        title.innerText = cardInfo.race

        let name = document.createElement("h4")
        name.className = "name"
        name.innerText = "Name: " + cardInfo.name

        let ageInfo = document.createElement("p")
        ageInfo.className = "ageInfo"
        ageInfo.style.wordWrap = "break-word"
        ageInfo.innerText = "Age: " + cardInfo.age

        let speedInfo = document.createElement("p")
        speedInfo.className = "speedInfo"
        speedInfo.innerText = "Speed: " + cardInfo.speed

        let className = document.createElement("p")
        className.className = "className"
        className.innerText = "class: " + cardInfo.class

        let hitDie = document.createElement("p")
        hitDie.className = "hitDie"
        hitDie.innerText = "Hit Die: D" + cardInfo.hitDie

        let DeleteButton = document.createElement("button")
        DeleteButton.className = "DeleteButton"
        DeleteButton.innerText = "Delete"
        DeleteButton.addEventListener('click', () => {
            deleteCharacter()
        })
        cardBody.append(title, name, ageInfo, speedInfo, className, hitDie, DeleteButton);
        document.getElementById("output").appendChild(cardBody)
    }

};