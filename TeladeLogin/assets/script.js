

/* email - variavel, global*/
var email = "willhenrique791@gmail.com";
/* cons variavel cujo valor é fixo. somente leitura */
const nome = "willian"
/* permite variavel local, que respeita  escopo, precisar mudar variaveis. */
let idade = "23"
console.log(email);
console.log("O seu e-mail é:" + email);
console.log(`O seu e-mail é: ${email}`);
console.log(nome)
console.log(idade)
/* eventos criados, document desreve qualquer tipo de documento(html...) */
document.getElementById('vesez-clicado').addEventListener('click', e => {

    console.log('O botao foi clicado!');
});
/* apontador (geralmente um mouse) é inicialmente movido para que seu ponto de acesso esteja dentro do elemento no qual o evento foi acionado. */
document.getElementById('Mouse').addEventListener('mouseenter', e => {
    console.log('o mouse está sobre o formulario');
});
/* O mouseleave evento é disparado Element quando o cursor de um dispositivo apontador (geralmente um mouse) é movido para fora dele. */
document.querySelector('#Mouse').addEventListener('mouseleave', e => {
    console.log('o mouse esta fora do formulario');
});
/* evento submit é disparado quando clica no botao */
document.querySelector('#Mouse').addEventListener('submit', e=> {
    e.preventDefault();/* parar a acao de enviar */


    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    console.log(email, password)

    /*aqui esta em objeto  */
    let json ={
         email,/* esse variavel */
         password
    };
    
   

/*  validar as informacoes */
/* ! quer dzer not*/
    if (!json.email) {
        console.error("o campo e-mail deve ser preenchido!");
    }else if(!json.password) {
        console.error("o campo e-mail deve ser preenchido!");
    }else {
        console.info("Dados valido com sucesso!")
    }

});




