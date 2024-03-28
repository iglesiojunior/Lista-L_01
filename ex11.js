import {question} from 'readline-sync'


function verificar_primos(num){
   let contador_primos = 2
   while(contador_primos <= num){
    if(num === 2){
        return true
    }else if(num === 3){
        return true
    }
    if(num%contador_primos === 0){
        return false
    }else if((num%(contador_primos+1)) === 0){
        return false
    }else{
        return true
    }
   }
}




function mostrar(mensagem){
   console.log(mensagem)
}


function pegar_numero(mensagem){
   return Number(question(mensagem))
}


function main(){
   let lim_inferior = pegar_numero('Insira o limite inferior: ')
   let lim_superior = pegar_numero('Insira o limite superior: ')
   while(lim_inferior <= lim_superior){
       let verificação = verificar_primos(lim_inferior)
       if(verificação === true){
           mostrar(lim_inferior)
       }
       lim_inferior++
   }
  


}
main()