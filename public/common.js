const getRaceList = ["https://www.dnd5eapi.co/api/races/dwarf", "https://www.dnd5eapi.co/api/races/elf", "https://www.dnd5eapi.co/api/races/human", "https://www.dnd5eapi.co/api/races/dragonborn", "https://www.dnd5eapi.co/api/races/gnome", "https://www.dnd5eapi.co/api/races/half-orc", "https://www.dnd5eapi.co/api/races/halfling", "https://www.dnd5eapi.co/api/races/tiefling", "https://www.dnd5eapi.co/api/races/half-elf",]

const getClassList = ["https://www.dnd5eapi.co/api/classes/bard", "https://www.dnd5eapi.co/api/classes/warlock", "https://www.dnd5eapi.co/api/classes/barbarian", "https://www.dnd5eapi.co/api/classes/cleric", "https://www.dnd5eapi.co/api/classes/druid", "https://www.dnd5eapi.co/api/classes/fighter", "https://www.dnd5eapi.co/api/classes/monk", "https://www.dnd5eapi.co/api/classes/paladin", "https://www.dnd5eapi.co/api/classes/ranger", "https://www.dnd5eapi.co/api/classes/rogue", "https://www.dnd5eapi.co/api/classes/sorcerer", "https://www.dnd5eapi.co/api/classes/wizard",]

let myCharcter = []

async function cardContainer() {
    document.getElementById("cardContainer").innerText = ""
    let character = await getMycharacter()
    let cardBody = document.createElement("div")
    cardBody.id = "cardBody"

    let title = document.createElement("h2")
    title.id = "title"
    title.innerText = character.race

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

    cardBody.append(title, ageInfo, speedInfo, className, hitDie, saveButton);
    document.getElementById("cardContainer").appendChild(cardBody)
};

function checkconsole() {
    console.log(myCharcter)
}