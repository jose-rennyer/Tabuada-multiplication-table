
//let num = 4

//for(let i = 0;i <= 10; i++){
//    let v = num*i
//    console.log("tabuada "+num+"x"+i+"="+v)
//}


//tabuada finalizada foi bem desafiador kkkkk ,mas eu conseguir

//basicamente o mecanismo é esse o let num é o numero que o usuario vai escolher por conta da tabuada
//ex 4 
//o for é (let i = 0 claro; enquanto i < 10 repita; no caso o i só vai seguir o seu papel de somar mais 1)
// e no fim das contas  eu criei a variavel m (multiplique) = numero escolhido x i que vai sempre estar
// mudando de forma, desse jeito, sempre que repetir ele vai fazer numero escolhido x i que vai estár com mais um
// primeira rodada num x i = 4 segunda rodada num x i = 8 porque o i agora não é mais um é 2 por conta do  + 1 que ele recebeu
// e a tag V é a tag para mostrar o resultado entre os dois



function exibir(){
    let valor = document.querySelector("#number").value
    let vezes = document.querySelector("#vezes").value
    //let ul = document.querySelector("ul")
    let algo = document.querySelector(".resposta")
    for(let i = 1; i <= vezes; i++){
        r = parseInt(valor) * i 
        console.log(r)
        algo.innerHTML += `${valor} x ${i} = ${r}<br/>`
    }
}
function limpar(){
    document.querySelector(".resposta").innerHTML = " "
}

