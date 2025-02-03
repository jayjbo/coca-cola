let formulario = document.getElementById("meuFormulario");

formulario.addEventListener("submit", function() {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let data = document.getElementById("data").value;
    let cpf = document.getElementById("cpf").value;

    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("data", data);
    localStorage.setItem("cpf", cpf);

});

let tabela = document.getElementById("tabelaDados");

let nomeArmazenado = localStorage.getItem("nome");
let emailArmazenado = localStorage.getItem("email");
let dataArmazenado = localStorage.getItem("data");
let cpfArmazenado = localStorage.getItem("cpf");

let novaLinha = tabela.insertRow();
novaLinha.innerHTML = `
    <td>${nomeArmazenado}</td>
    <td>${emailArmazenado}</td>
    <td>${dataArmazenado}</td>
    <td>${cpfArmazenado}</td>
    <td>
        <a href="#">Editar</a>
        <a href="#">Excluir</a>
    </td>
`;


