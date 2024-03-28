import { question } from "readline-sync"

function print(mensagem){
    return console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    let valor_inicial = pegar_numero('Insira o valor inicial da pa: ')
    const razão_pa = pegar_numero('Insira a razão da pa: ')
    const limite = pegar_numero('Insira o número limite que será exibido: ')

    while(valor_inicial <= limite){
        print(valor_inicial)
        valor_inicial+=razão_pa
    }
}
main()