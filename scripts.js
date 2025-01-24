
 /*Variáveis - um pedacinho de memorio do note que se nomeia e pode armazenar o que quiser
let mundo = "Olá, Mundo"
console.log(mundo)*/

/*Funções - pedacinho de um código que só executa, quando é "chamada ou clicada" quando o usuário clicar
function trocaImagem() {
    console.log("Estou dentro da função")}*/

    /*
    Document = HTML
    Queryselector - selecionar um elemento o html

    ou seja, vá no html e seleciona um elemento do html
     */

    
    let imagem = document.querySelector(".imagem-copo")
        circulo = document.querySelector('.circulo')
    
        function trocaImagem(endereco) {
            imagem.src = endereco
        }
        
    function trocaCor(cor){
        circulo.style.background = cor
    }
   

    

