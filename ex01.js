import { question } from "readline-sync"

function print(mensagem){
    return console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    const numero_limite = pegar_numero('Insira um número: ')
    let numeros_intervalos = 1
    while(numeros_intervalos <= numero_limite){
        print(numeros_intervalos)
        numeros_intervalos++
    }
}
main()