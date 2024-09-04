//opg 1
/*
let fruktarray = []

function leggtilfrukt() {
    const fruktinput = document.getElementById("fruktinput")
    const frukt = fruktinput.value.trim()
    if (frukt) {
        fruktarray.push(frukt)
        oppdaterliste()
        fruktinput.value = ""
    }
}

function oppdaterliste() {
    const fruktliste = document.getElementById("fruktliste")
    fruktliste.innerHTML = ""

    fruktarray.forEach(frukt => {
        const li = document.createElement("li")
        li.textContent = frukt
        fruktliste.appendChild(li)
    })
}
*/

//opg 2
/*
function tilfeldig() {
    const low = document.getElementById("low").value
    const high = document.getElementById("high").value

    const randomNumber = Math.floor(Math.random() * (high - low + 1) + low)

    alert("det tilfeldige taller er: " + randomNumber)
    return;
}
*/

//opg 3 
/*
function tellElementer() {
    const input = document.getElementById("listInput").value
    const list = input.split(",").map(item => item.trim())
    const count = {}

    list.forEach(item => {
        count[item] = (count[item] || 0) + 1
})
    const resultatDiv = document.getElementById("resultat")
    resultatDiv.innerHTML = ""

    for(const item in count)  {
        const p = document.createElement("p")
        p.textContent = `${item}: ${count[item]}`
        resultatDiv.appendChild(p)
    }

}
*/

//opg 4

// window.onload = function() {
    
// }


function generateColorButtons() {
    const colorInput = document.getElementById("colorInput").value
    const colors = colorInput.split(",").map(color => color.trim().toLowerCase())

    const colorList = document.getElementById("colorList");
    colorList.innerHTML = ""

    colors.forEach(color => {
        const button = document.createElement("button")
        button.textContent = color
        button.className = "color-button"
        button.style.backgroundColor = color
        console.log(color);
        
        button.addEventListener("click", () => {
            document.body.style.backgroundColor = color
            console.log(color);
            console.log(document.body.style.backgroundColor);
            
            
        })

        colorList.appendChild(button)
    });
}

document.querySelector('button').onclick = generateColorButtons
