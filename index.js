const dropdownbtn = document.querySelector(".dropdown");
const cross = document.querySelector(".cross");
var temp = document.querySelector(".dropnav");
dropdownbtn.addEventListener("click", function(){
    if(temp.style.display=== "none"){
        dropdownbtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
          </svg>
    `
        temp.style.display = "initial";
    }
    else{
        dropdownbtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
      </svg>`
        temp.style.display = "none";
    }
})

var x = window.matchMedia("(min-width: 801px)")

x.addEventListener("change",function(){
    temp.style.display = "none";
    dropdownbtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
      </svg>`
})


let total = 0;
let arrtaken = [];

let arritems = [
    {
        name: "forgetmenot",
        main: "Forget Me Not",
        price: 20.99,
        source: './frgtmenot.jpg'
    },
    {
        name: "valley",
        main: "Lily of the valley",
        price: 15.99,
        source: './lilyofthevalley.jpg'

    },
    {
        name: "purpled",
        main: "Purple Daisy",
        price: 5.99,
        source: './purpledai.webp'
    },
    {
        name: "sunflower",
        main: "Sunflower",
        price: 7.99,
        source: './sunflower.jpg'
    },
    {
        name: "whited",
        main: "White Daisy",
        price: 9.99,
        source: './whitedaisy.jpg'
    },
    {
        name: "daffo",
        main: "Daffodil",
        price: 13.99,
        source: './daf.jpg'
    },
    {
        name: "gerberad",
        main: "Gerberad Daisy",
        price: 14.99,
        source: './gerbera.jpg'
    },
    {
        name: "lily",
        main: "Lily",
        price: 16.99,
        source: './lily.webp'
    },
    {
        name: "rainlily",
        main: "Rain-Lily",
        price: 10.99,
        source: "./rainlily.webp"
    },
    {
        name: "orchid",
        main: "Orchid",
        price: 19.00,
        source: "./orchid.jpg"
    },
    {
        name: "tulip",
        main: "Tulip",
        price: 12.99,
        source: "./tulip.jpg"
    },
    {
        name: "tuberose",
        main: "Tube-rose",
        price: 19.00,
        source: "./tuberose.jpg"
    }

];
var x = 0;
const takens = document.querySelector(".takens")
let arrprice = [];


$(".add").click(function(){
    const temp = this.getAttribute("class").split(" ")[0]
    for(i=0;i<arritems.length;i++){
        if(temp === arritems[i].name){
            console.log(arritems[i])
            if(!arrtaken.includes(temp)){
                arrtaken.push(arritems[i].name);
                arrprice.push(arritems[i].price);
                total += arritems[i].price;
                let divelem = document.createElement("div");
                divelem.classList.add("taken");
                divelem.innerHTML = `<div><img src="${arritems[i].source}" height="60"></div>
                <div class="named">${arritems[i].main}</div>
                <div class="quantity">
                    <button id="item-${x}" onclick="changeM('item_${x}')" class="btn minus">-</button>
                    <input class="it_${x}" readonly type="number" style="width: 50px; height: 50px; text-align: center; font-size: 25px;" value="1">
                    <button id="item#${x}" onclick="changeP('item_${x}')" class="btn plus">+</button>
                </div>
                <div>${arritems[i].price} <small>per</small></div>
                <button  class="remove rem_${x} rmvbtn" onclick="removed('rem_${x}')">Remove</button>`
                takens.appendChild(divelem);
                x+=1;
                break
            }
            else{
                let y = arrtaken.indexOf(temp);
                changeP(`item_${y}`);
                break
                
                
            }
        }
    }
    var removebtns = document.getElementsByClassName("remove");

    console.log(arrprice);
    console.log(total);
    console.log(arrtaken);
    console.log(x);

    
})


function changeP(val){
    console.log(arrtaken);
    console.log(88888);
    let num = Number(val.split("_")[1]);
    let inpval = document.querySelector(`.it_${num}`);
    console.log(inpval);
    let past  = Number(inpval.value);
    inpval.value = String(past+1);
    let random = 0;
    for(elem=0;elem<arritems.length;elem++){
        if(arritems[elem].name==arrtaken[num]){
            random = elem;
            break
        }
    }
    total += arritems[random].price;
}

function changeM(val){
    let num = Number(val.split("_")[1]);
    let inpval = document.querySelector(`.it_${num}`);
    let past  = Number(inpval.value);
    let nw = past-1;
    console.log(num)
    let random = 0;
    for(elem=0;elem<arritems.length;elem++){
        if(arritems[elem].name==arrtaken[num]){
            random = elem;
            break
        }
    }
    total -= arritems[random].price
    console.log(total)
    console.log(arrtaken[random])
    console.log(arritems[random])
    if(nw==0){
        arrtaken.splice(num,1);
        inpval.parentElement.parentElement.remove();
        x -= 1;
        arrprice.splice(num,1);
        arrtaken.splice(num,1);
        
    }
    else{
        inpval.value = String(nw);
    }
    
}

function removed(str1){
    let remo = Number(str1.split("_")[1]);
    let quanity = document.querySelector(`.it_${remo}`);
    let val = Number(quanity.value);
    let random = 0;
    for(elem=0;elem<arritems.length;elem++){
        if(arritems[elem].name==arrtaken[remo]){
            random = elem;
            break
        }
    }
    total -= arritems[random].price * val;
    if(total==NaN || total < 0){
        total = 0;
        arrtaken = [];
    }
    x -= 1
    arrtaken.splice(remo,1);
    arrprice.splice(remo,1);
    console.log(arrtaken);
    console.log(7777777777);
    console.log(total);
    quanity.parentElement.parentElement.remove();
}


function showall() {
    const body = document.querySelector("main");
    body.classList.add("blurred");
    const pop = document.querySelector(".popuptime");
    pop.style.display = "initial";
    let text = document.querySelector(".text1");
    text.innerHTML = `You Have Purchased Flowers for $${parseFloat(total).toPrecision(3)}`
}

const closed = document.querySelector(".close");



closed.addEventListener("click",function(){
    const body = document.querySelector("main");
    body.classList.remove("blurred");
    const pop = document.querySelector(".popuptime");
    pop.style.display = "none";
    window.location.reload();
})