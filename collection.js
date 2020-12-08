const body = document.body
const inpute = document.querySelector("#navbarSupportedContent > ul > li:nth-child(6) > input")
inpute.type = "text"

const searchBox = document.createElement("div")
body.appendChild(searchBox)

const collectionSTART = [{
        title: "Aberdeen Angus rib-eye",
        image: src = "./images/Screen Shot 2020-12-07 at 21.32.03.png",
        price: "€25,00",
    },
    {
        title: "Red cabbage prawn",
        image: src = "./images/Screen Shot 2020-12-07 at 21.31.13.png",
        price: "€25,00",
    },
    {
        title: "Noix de Saint-Jacques aux Herbes slow-roasted",
        image: src = "./images/Screen Shot 2020-12-07 at 21.28.47.png",
        price: "€25,00",
    },
    {
        title: "Prawn mousse",
        image: src = "./images/Screen Shot 2020-12-07 at 21.27.05.png",
        price: "€25,00",
    },
]

const collectionMAINDISHES = [{
        title: "Seasonal vegetable salad",
        image: src = "./images/Screen Shot 2020-12-07 at 22.07.21.png",
        price: "€25,00",
    },
    {
        title: "King oyster mushroom",
        image: src = "./images/Screen Shot 2020-12-07 at 22.11.17.png",
        price: "€25,00",
    },
    {
        title: "Valdarno chicken",
        image: src = "./images/Screen Shot 2020-12-07 at 22.12.35.png",
        price: "€25,00",
    },
    {
        title: 'Scorpion fish over "sea toast"',
        image: src = "./images/Screen Shot 2020-12-07 at 21.36.46.png",
        price: "€25,00",
    },
]



const collectionDESSERTS = [{
        title: "Violet parfait",
        image: src = "./images/Screen Shot 2020-12-07 at 22.02.08.png",
        price: "€25,00",
    },
    {
        title: "Pistachio white chocolate field",
        image: src = "./images/Screen Shot 2020-12-07 at 21.35.03.png",
        price: "€25,00",
    },
    {
        title: "English strawberry panna cotta",
        image: src = "./images/Screen Shot 2020-12-07 at 21.34.04.png",
        price: "€25,00",
    },
    {
        title: 'Wild strawberry meringue',
        image: src = "./images/Screen Shot 2020-12-07 at 21.33.11.png",
        price: "€25,00",
    },
]
let list = [collectionSTART,collectionMAINDISHES,collectionDESSERTS]
for(let elem of list){
    
}
//______________________________entrée
const container = document.createElement("div")
container.classList.add("container")
body.appendChild(container)

const starterTITLE = document.createElement("h2")
starterTITLE.classList.add("text-center")
starterTITLE.innerHTML = "STARTERS"
container.appendChild(starterTITLE)

const cardColumns = document.createElement("div")
cardColumns.classList.add("card-columns")
container.appendChild(cardColumns)
//______________________________plat
const container2 = document.createElement("div")
container2.classList.add("container")
body.appendChild(container2)

const platTITLE = document.createElement("h2")
platTITLE.classList.add("text-center")
platTITLE.innerHTML = "MAIN DISHES"
container2.appendChild(platTITLE)

const cardColumns2 = document.createElement("div")
cardColumns2.classList.add("card-columns")
container2.appendChild(cardColumns2)
//______________________________desserts
const container3 = document.createElement("div")
container3.classList.add("container")
body.appendChild(container3)

const dessertsTITLE = document.createElement("h2")
dessertsTITLE.classList.add("text-center")
dessertsTITLE.innerHTML = "DESSERTS"
container3.appendChild(dessertsTITLE)

const cardColumns3 = document.createElement("div")
cardColumns3.classList.add("card-columns")
container3.appendChild(cardColumns3)

for (let u = 0; u < collectionSTART.length; u++) {
    inpute.addEventListener("keyup", function () {
        let pattern = new RegExp(inpute.value, 'gi')
        let split = collectionSTART[u].title.split("")
        let sentence = collectionSTART[u].title
        if (sentence.match(pattern)) {
            searchBox.innerHTML =""
            enter(searchBox)
            searchBox.style.width = "250px"
            searchBox.style.marginLeft = "auto"
            searchBox.style.marginRight = "auto"
            const but = document.createElement("button")
            but.classList.add("but")
            but.innerHTML="close"
            searchBox.style.textAlign = "center"
            searchBox.appendChild(but)
            but.addEventListener("click", function(){
                searchBox.innerHTML =""
                inpute.value = ""
            })
        }
    })

    function enter(x) {
        const card = document.createElement("div")
        card.classList.add("card")
        x.appendChild(card)

        const img = document.createElement("img")
        img.src = collectionSTART[u].image // image de notre collectionStart 
        img.classList.add("card-img-top")
        card.appendChild(img)

        const cardBody = document.createElement("div")
        cardBody.classList.add("card-body")
        card.appendChild(cardBody)

        const titre = document.createElement("h5")
        titre.innerHTML = collectionSTART[u].title // titre de notre collectionSTART
        titre.classList.add("card-title")
        cardBody.appendChild(titre)

        const prix = document.createElement("p")
        prix.innerHTML = collectionSTART[u].price // Prix de notre collectionSTART 
        prix.classList.add("card-text")
        cardBody.appendChild(prix)

        const cardFooter = document.createElement("div")
        cardFooter.classList.add("card-footer")
        card.appendChild(cardFooter)

        const boutonAdd = document.createElement("a")
        boutonAdd.classList.add("btn")
        boutonAdd.innerHTML = "add to cart"
        cardFooter.appendChild(boutonAdd)
    }
    enter(cardColumns)
}


for (let i = 0; i < collectionMAINDISHES.length; i++) {
        inpute.addEventListener("keyup", function () {
        let pattern = new RegExp(inpute.value, 'gi')
        let split = collectionSTART[i].title.split("")
        let sentence = collectionSTART[i].title
        if (sentence.match(pattern)) {
            searchBox.innerHTML =""
            plat(searchBox)
            searchBox.style.width = "250px"
            searchBox.style.marginLeft = "auto"
            searchBox.style.marginRight = "auto"
            const but = document.createElement("button")
            but.classList.add("but")
            but.innerHTML="close"
            searchBox.style.textAlign = "center"
            searchBox.appendChild(but)
            but.addEventListener("click", function(){
                searchBox.innerHTML =""
                inpute.value = ""
            })
        }
    })

    plat(cardColumns2)
    function plat(z) {
        const card = document.createElement("div")
        card.classList.add("card")
        z.appendChild(card)
    
        const img = document.createElement("img")
        img.src = collectionMAINDISHES[i].image // image de notre collectionMAINDISHES 
        img.classList.add("card-img-top")
        card.appendChild(img)
    
        const cardBody = document.createElement("div")
        cardBody.classList.add("card-body")
        card.appendChild(cardBody)
    
        const titre = document.createElement("h5")
        titre.innerHTML = collectionMAINDISHES[i].title // titre de notre collectionMAINDISHES
        titre.classList.add("card-title")
        cardBody.appendChild(titre)
    
        const prix = document.createElement("p")
        prix.innerHTML = collectionMAINDISHES[i].price // Prix de notre collectionMAINDISHES 
        prix.classList.add("card-text")
        cardBody.appendChild(prix)
    
        const cardFooter = document.createElement("div")
        cardFooter.classList.add("card-footer")
        card.appendChild(cardFooter)
    
        const boutonAdd = document.createElement("a")
        boutonAdd.classList.add("btn")
        boutonAdd.innerHTML = "add to cart"
        cardFooter.appendChild(boutonAdd)
    }
}

for (let i = 0; i < collectionDESSERTS.length; i++) {

        inpute.addEventListener("keyup", function () {
        let pattern = new RegExp(inpute.value, 'gi')
        let split = collectionDESSERTS[i].title.split("")
        let sentence = collectionDESSERTS[i].title
        if (sentence.match(pattern)) {
            searchBox.innerHTML =""
            desser(searchBox)
            searchBox.style.width = "250px"
            searchBox.style.marginLeft = "auto"
            searchBox.style.marginRight = "auto"
            const but = document.createElement("button")
            but.classList.add("but")
            but.innerHTML="close"
            searchBox.style.textAlign = "center"
            searchBox.appendChild(but)
            but.addEventListener("click", function(){
                searchBox.innerHTML =""
                inpute.value = ""
            })
        }
    }) 
    desser(cardColumns3)
    function desser(y) {
        const card = document.createElement("div")
        card.classList.add("card")
        y.appendChild(card)
    
        const img = document.createElement("img")
        img.src = collectionDESSERTS[i].image // image de notre collectionDESSERTS 
        img.classList.add("card-img-top")
        card.appendChild(img)
    
        const cardBody = document.createElement("div")
        cardBody.classList.add("card-body")
        card.appendChild(cardBody)
    
        const titre = document.createElement("h5")
        titre.innerHTML = collectionDESSERTS[i].title // titre de notre collectionDESSERTS
        titre.classList.add("card-title")
        cardBody.appendChild(titre)
    
        const prix = document.createElement("p")
        prix.innerHTML = collectionDESSERTS[i].price // Prix de notre collectionDESSERTS 
        prix.classList.add("card-text")
        cardBody.appendChild(prix)
    
        const cardFooter = document.createElement("div")
        cardFooter.classList.add("card-footer")
        card.appendChild(cardFooter)
    
        const boutonAdd = document.createElement("a")
        boutonAdd.classList.add("btn")
        boutonAdd.innerHTML = "add to cart"
        cardFooter.appendChild(boutonAdd)
    }
}



