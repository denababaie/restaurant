const body = document.body
const inpute = document.querySelector("body > div.box > div:nth-child(4) > input[type=text]")

const searchBox = document.createElement("div")
body.appendChild(searchBox)
let result = 0;
const collection = [{
        title: "Aberdeen Angus rib-eye",
        image: src = "./images/Screen Shot 2020-12-07 at 21.32.03.png",
        price: "€25,00",
        dollar: 25
    },
    {
        title: "Red cabbage prawn",
        image: src = "./images/Screen Shot 2020-12-07 at 21.31.13.png",
        price: "€25,00",
        dollar: 25
    },
    {
        title: "Noix de Saint-Jacques aux Herbes slow-roasted",
        image: src = "./images/Screen Shot 2020-12-07 at 21.28.47.png",
        price: "€25,00",
        dollar: 25
    },
    {
        title: "Prawn mousse",
        image: src = "./images/Screen Shot 2020-12-07 at 21.27.05.png",
        price: "€25,00",
        dollar: 25
    }, {
        title: "Seasonal vegetable salad",
        image: src = "./images/Screen Shot 2020-12-07 at 22.07.21.png",
        price: "€25,00",
        dollar: 25
    },
    {
        title: "King oyster mushroom",
        image: src = "./images/Screen Shot 2020-12-07 at 22.11.17.png",
        price: "€25,00",
        dollar: 25
    },
    {
        title: "Valdarno chicken",
        image: src = "./images/Screen Shot 2020-12-07 at 22.12.35.png",
        price: "€25,00",
        dollar: 25
    },
    {
        title: 'Scorpion fish over "sea toast"',
        image: src = "./images/Screen Shot 2020-12-07 at 21.36.46.png",
        price: "€25,00",
        dollar: 25
    }, {
        title: "Violet parfait",
        image: src = "./images/Screen Shot 2020-12-07 at 22.02.08.png",
        price: "€25,00",
        dollar: 25
    },
    {
        title: "Pistachio white chocolate field",
        image: src = "./images/Screen Shot 2020-12-07 at 21.35.03.png",
        price: "€25,00",
        dollar: 25
    },
    {
        title: "English strawberry panna cotta",
        image: src = "./images/Screen Shot 2020-12-07 at 21.34.04.png",
        price: "€25,00",
        dollar: 25
    },
    {
        title: 'Wild strawberry meringue',
        image: src = "./images/Screen Shot 2020-12-07 at 21.33.11.png",
        price: "€25,00",
        dollar: 25
    },
]
const container = document.createElement("div")
container.classList.add("container")
body.appendChild(container)

const cardColumns = document.createElement("div")
cardColumns.classList.add("card-columns")
container.appendChild(cardColumns)

for (let i = 0; i < collection.length; i++) {
    inpute.addEventListener("keyup", function () {
        let pattern = new RegExp(inpute.value, 'gi')
        let split = collection[i].title.split("")
        let sentence = collection[i].title
        if (collection[i].title.match(pattern)) {
            searchBox.innerHTML = ""
            searchBox.style.width = "300px"
            searchBox.style.marginLeft = "auto"
            searchBox.style.marginRight = "auto"
            const buttonClosed = document.createElement("button")
            buttonClosed.classList.add("but")
            buttonClosed.innerHTML = "close"
            buttonClosed.addEventListener("click", function () {
                searchBox.innerHTML = ""
                inpute.value = ""
            })
            searchBox.appendChild(buttonClosed)
            plat(searchBox)
        }
    })

    plat(cardColumns)

    function plat(x) {
        const card = document.createElement("div")
        card.classList.add("card")
        x.appendChild(card)

        const img = document.createElement("img")
        img.src = collection[i].image // image de notre collectionStart 
        img.classList.add("card-img-top")
        card.appendChild(img)

        const cardBody = document.createElement("div")
        cardBody.classList.add("card-body")
        card.appendChild(cardBody)

        const titre = document.createElement("h5")
        titre.innerHTML = collection[i].title // titre de notre collectionSTART
        titre.classList.add("card-title")
        cardBody.appendChild(titre)

        const prix = document.createElement("p")
        prix.innerHTML = collection[i].price // Prix de notre collectionSTART 
        prix.classList.add("card-text")
        cardBody.appendChild(prix)

        const cardFooter = document.createElement("div")
        cardFooter.classList.add("card-footer")
        card.appendChild(cardFooter)

        const boutonAdd = document.createElement("a")
        boutonAdd.classList.add("btn")
        boutonAdd.innerHTML = "add to cart"
        boutonAdd.addEventListener("click", function () {

            const choix = document.createElement("div")
            const tr = document.createElement("tr")
            const td = document.createElement("td")
            const minus = document.createElement("button")

          

            panier.style.display = "block"
            panier.style.height = "fit-content"
            panier.style.padding = "20px"
            choix.style.display = "flex"
           

            tr.innerHTML = collection[i].title + " "
            td.innerHTML = collection[i].price + " "
            result += collection[i].dollar 
            priceRESULT.innerHTML = "<button onclick =test()>PAY</button>"+" "+"Total : "+ " € " + result 

            minus.innerHTML = "-"

           

            panier.appendChild(choix)
            table.appendChild(tr)
            tr.appendChild(td)
            td.appendChild(minus)
            
            
        
            minus.addEventListener("click", function () {
                choix.innerHTML = ""
                result -= collection[i].dollar
                priceRESULT.innerHTML = "<button onclick =test()>PAY</button>"+" "+"Total : "+ " € " + result  
                table.removeChild(tr)
                if(result == 0){
                    panier.style.display = "none"
                }
            })
            
        })
        cardFooter.appendChild(boutonAdd)


    }
}
function test(){
    alert("Le meilleur de tout les coach va payer, met toi bien... A l'aise... ")
}