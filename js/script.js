function listItem(name, price){    
    let items = document.querySelector('.items')

    let item = document.createElement('div')
    item.classList.add('item')

    let namePrice = document.createElement('div')
    namePrice.classList.add('name-price')

    let h4 = document.createElement('h4')
    let h5 = document.createElement('h5')
    let p = document.createElement('p')
    
    h4.innerHTML = `Nome: <span>${name}</span>`
    h5.innerHTML = `Preço: <span>R$${price}</span>`
    p.innerHTML = `Unidade: <span>${"1"}</span>`

    namePrice.appendChild(h4)
    namePrice.appendChild(h5)
    namePrice.appendChild(p)    

    let actions = document.createElement('div')
    actions.classList.add('actions')

    let trash = document.createElement('div')
    let plus = document.createElement('div')

    trash.classList.add('action')
    plus.classList.add('action')

    trash.innerHTML = `<i class="fas fa-trash"></i>`
    plus.innerHTML = `<i class="fas fa-plus"></i>`

    plusItem(plus)
    removeItem(trash)

    actions.appendChild(trash)
    actions.appendChild(plus)

    item.appendChild(namePrice)
    item.appendChild(actions)

    let hr = document.createElement('hr')

    items.appendChild(item)
    items.appendChild(hr)

}

function fullItems(){
    let items = document.querySelector('.items')
    return items.children.length
}

function addItem(element){
    let items = fullItems() 
    if(items >= 6) {
        alert('Seu carrinho já está lotado! Tira algum item ou finalize a compre.')
    } else {
        let id = getID(element)
        let h3 = ($("#"+id).find(".modal-body").find("h3").text())
        let span = ($("#"+id).find(".modal-body").find("span").text())
        listItem(h3, span)
        let total = calcPriceTotal()
        $('#valorTotal').find('span').text(total)
    }
}


function getID(id){
    let element = id.parentNode.parentNode.parentNode.parentNode
    return element.id
}



function plusItem(btn){
    let cont = 1
    btn.addEventListener('click', ()=>{
        let parentElement = btn.parentNode.parentNode
        cont = $(parentElement).find('p').children().text()
        if(cont >= 4) {  
            alert("Você alcançou o limite de unidade")
        } else {
            cont++
            $(parentElement).find('p').children().text(cont)
            let price = $(parentElement).find('h5').children().text()
            let replace = price.replace('R$', '').replace(',', '.')*cont
            let format = replace.toFixed(2)
            $(parentElement).find('h5').children().text("R$"+format)
            let total = calcPriceTotal()
            $('#valorTotal').find('span').text(total)

        }
    })
}


function arrayPrices(){
    let arr = []
    let list = ($('.name-price').find('h5').find('span'))
    for(let i = 0; list.length > i; i++){
        let t = (list[i].firstChild.data).replace('R$', '').replace(',', '.')
        let numberFormat = format(t)
        arr.push(numberFormat)
    }
    return arr
}

function calcPriceTotal(){
    let total = 0
    let arr = arrayPrices()
    let arrayInNumber = arr.map(item => Number(item))
    if(arrayInNumber.length > 0) {
        total = arrayInNumber.reduce((accumulator, currentValue) => accumulator+currentValue)
    } else {
        total = 0
    }
    return total.toFixed(2)
}

function removeItem(btn){
    btn.addEventListener('click', ()=>{
        let parentElement = btn.parentNode.parentNode
        let currentUnit = $(parentElement).find('p').children().text()
        if(currentUnit > 1) {
            let calc = $(parentElement).find('p').children().text() - 1
            $(parentElement).find('p').children().text(calc)
        } else {
            $(parentElement).next().remove()
            parentElement.remove()
        }
        recalcPrice(parentElement, currentUnit)
        let total = calcPriceTotal()
        $('#valorTotal').find('span').text(total)
    })
}

function recalcPrice(btn, currentUnit){
    let price = $(btn).find('h5').children().text()
    let replace = price.replace('R$', '').replace(',', '.')/currentUnit
    let format = replace.toFixed(2)
    $(btn).find('h5').children().text("R$"+format)

}

function format(number){
    let format = number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return format
}
 

function finish(){
    let items = document.querySelector('.items').innerHTML = ''
    let total = $('#valorTotal').find('span').text(0)
    setTimeout(()=>{
        alert('Compra finalizada!')
    }, 100)
}

let btnFinish = document.querySelector('#finalizar').addEventListener('click', finish)