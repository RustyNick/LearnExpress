const getRaceList = ["https://www.dnd5eapi.co/api/races/dwarf", "https://www.dnd5eapi.co/api/races/elf", "https://www.dnd5eapi.co/api/races/human", "https://www.dnd5eapi.co/api/races/dragonborn", "https://www.dnd5eapi.co/api/races/gnome", "https://www.dnd5eapi.co/api/races/half-orc", "https://www.dnd5eapi.co/api/races/halfling", "https://www.dnd5eapi.co/api/races/tiefling", "https://www.dnd5eapi.co/api/races/half-elf",]

const getClassList = ["https://www.dnd5eapi.co/api/classes/bard", "https://www.dnd5eapi.co/api/classes/warlock", "https://www.dnd5eapi.co/api/classes/barbarian", "https://www.dnd5eapi.co/api/classes/cleric", "https://www.dnd5eapi.co/api/classes/druid", "https://www.dnd5eapi.co/api/classes/fighter", "https://www.dnd5eapi.co/api/classes/monk", "https://www.dnd5eapi.co/api/classes/paladin", "https://www.dnd5eapi.co/api/classes/ranger", "https://www.dnd5eapi.co/api/classes/rogue", "https://www.dnd5eapi.co/api/classes/sorcerer", "https://www.dnd5eapi.co/api/classes/wizard",]

let myCharcter = []

async function cardContainer() {
    document.getElementById("cardContainer").innerText = ""
    let character = await getMycharacter()
    let cardBody = document.createElement("div")
    cardBody.id = "cardBody"
    cardBody.style.margin = "15px"

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

async function characterCard() {
    document.getElementById("output").innerText = ""
    let character = await collectText()
    /* let character = "dum dum" */
    for (let i = 0; i < character.length; i++) {
        const cardInfo = character[i];
        console.log(character)


        let cardBody = document.createElement("div")
        cardBody.className = "cardBody"
        cardBody.style.margin = "15px"

        let title = document.createElement("h2")
        title.className = "title"
        title.innerText = cardInfo.race

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
            console.log("clicked")
        })

        cardBody.append(title, ageInfo, speedInfo, className, hitDie, DeleteButton);
        document.getElementById("output").appendChild(cardBody)
    }

};