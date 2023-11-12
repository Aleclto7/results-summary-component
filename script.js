const requestURL = './data.json';
const request = new XMLHttpRequest();

const cat1 = document.querySelector(".category_1");
const cat2 = document.querySelector(".category_2");
const cat3 = document.querySelector(".category_3");
const cat4 = document.querySelector(".category_4");
const score1 = document.querySelector('.score_1')
const score2 = document.querySelector('.score_2')
const score3 = document.querySelector('.score_3')
const score4 = document.querySelector('.score_4')

/* const getData = async() => {     // Traer datos del JSON a travez de promesa y asincronia
    const response = await fetch("./data.json");
    const data = await response.json();
    console.log(data);

    printName(data)
    printImg(data)
    printScore(data)
}
getData() */

request.open('GET', requestURL);
request.responseType = 'json'
request.send();
request.onload = function () {
    const objectJson = request.response;
    object = objectJson;

    printName(object)
    printImg(object)
    printScore(object)
};

function printName (object) {
    let etiqueta1 = document.createElement('p')
    etiqueta1.innerHTML = object[0].category
    let etiqueta2 = document.createElement('p')
    etiqueta2.innerHTML = object[1].category
    let etiqueta3 = document.createElement('p')
    etiqueta3.innerHTML = object[2].category
    let etiqueta4 = document.createElement('p')
    etiqueta4.innerHTML = object[3].category

    cat1.appendChild(etiqueta1)
    cat2.appendChild(etiqueta2)
    cat3.appendChild(etiqueta3)
    cat4.appendChild(etiqueta4)
}
function printImg (object) {
    document.querySelector('.icon_1').src = object[0].icon;
    document.querySelector('.icon_2').src = object[1].icon;
    document.querySelector('.icon_3').src = object[2].icon;
    document.querySelector('.icon_4').src = object[3].icon;
}
function printScore (object) {
    let value1 = document.createElement('p')
    value1.innerHTML = object[0].score
    let value2 = document.createElement('p')
    value2.innerHTML = object[1].score
    let value3 = document.createElement('p')
    value3.innerHTML = object[2].score
    let value4 = document.createElement('p')
    value4.innerHTML = object[3].score

    score1.appendChild(value1)
    score2.appendChild(value2)
    score3.appendChild(value3)
    score4.appendChild(value4)
}

