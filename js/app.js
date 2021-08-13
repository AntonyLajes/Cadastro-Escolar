let obtemNome = document.getElementById("nome");
let obtemEmail = document.getElementById("email");
let btnEnviar = document.getElementById("enviar");

class Pessoa{
    nome;
    email;
    constructor(nome, email){
        this.nome = nome;
        this.email = email;
    };

    retornaDados(){
        console.log(`Nome: ${this.nome} / Email: ${this.email}`);
    };
}

function teste(){
    console.log("ola")
};

btnEnviar.addEventListener("click", () => {
    let pessoa1 = new Pessoa(obtemNome.value, obtemEmail.value);
    console.log(pessoa1)

    let dados = document.getElementById("dados");
    let criaParagrafo = document.createElement("p");
    let recebeNome = obtemNome.value;
    let recebeEmail = obtemEmail.value;
    criaParagrafo.textContent = `Nome: ${recebeNome} | Email: ${recebeEmail}`;
    console.log(criaParagrafo)

    if(recebeNome !== "" && recebeEmail != ""){
        dados.appendChild(criaParagrafo);
    }
})


