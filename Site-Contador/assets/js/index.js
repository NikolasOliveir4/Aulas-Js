function contar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.querySelector('div#res')


    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados')
        res.innerHTML = 'Impossível contar'
    }
    else {
       res.innerHTML = 'Contando: <br>'
       let i =Number(inicio.value)
       let f =Number(fim.value)
       let p =Number(passo.value)

       if (p <= 0){
           window.alert('Passo inválido, considerando PASSO = 1')
           p = 1
           
       }

       if(i<f){
           //contagem crescente
            for (let c= i; c<= f; c += p){
                res.innerHTML += ` ${c} \u{1F47D}`
            }
            
       }
       else{
           //contagem regressiva
           for(let c = i; c>=f; c -= p){
               res.innerHTML += `${c} \u{1F47D}` 
           }
           
           
       }
       res.innerHTML += `\u{1F47E}`
       
    }
}