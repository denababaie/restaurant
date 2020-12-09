const panier = document.querySelector(".panier")

const table = document.createElement("table")
panier.appendChild(table)

const priceSEP = document.createElement("div")
priceSEP.innerHTML = "<hr>"
panier.appendChild(priceSEP)

const priceRESULT = document.createElement("div")
priceRESULT.style.textAlign ="end"
priceRESULT.style.marginRight ="30px"
panier.appendChild(priceRESULT)

const basket = document.querySelector("body > div.box > div:nth-child(5) > svg > path")
let bol = true
basket.addEventListener("click",function(){
    if(bol){
        panier.style.display = "none"
        bol = false
    }else{
        panier.style.display = "block"
        bol = true
    }
})

