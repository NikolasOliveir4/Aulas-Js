let num = document.querySelector('input#txtn')
let lista = document.querySelector('select#flist')
let res = document.querySelector('div#res')
let valores = []

function isNum(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else{
        return false
    }
}


function inList(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }
    else {
        return false
    }
} 

function adicionar(){
    
    if(isNum(num.value) && !inList(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text =`Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
        
    }
    else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }
    else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        soma = 0
        media = 0
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML +=`<p> Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior} `
        res.innerHTML += `<p>O menor valor informado foi ${menor} `
        res.innerHTML += `<p> Resultado da soma de todos os valores = ${soma}`
        res.innerHTML += `<p> A média de todos os valores é = ${media}`
        
    }
}