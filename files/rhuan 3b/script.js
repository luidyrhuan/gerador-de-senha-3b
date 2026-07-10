function gerarSenha(){

    const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*?";

    let senha = "";
    const tamanho = 12;

    for(let i = 0; i < tamanho; i++){

        let indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];

    }

    const campo = document.getElementById("senha");

    campo.value = senha;

    campo.classList.remove("animar");
    void campo.offsetWidth;
    campo.classList.add("animar");
}