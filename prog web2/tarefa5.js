document.body.append(criaFormulario());
document.body.append(listaCidade());
function criaFormulario(){
    let formulario = document.createElement("form");
    input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("id", "ddd");
    input1.setAttribute("placeholder", "DDD");
    input1.setAttribute("size", "9");
    formulario.append(input1);
    return formulario;
}
function listaCidade(){
    lista = document.createElement("ul");
    lista.setAttribute("id", "cidades");
    lista.textContent = " ";
    return lista
}
document.querySelector("#ddd").addEventListener("change", buscaDados);
function buscaDados(evento){
    fetch(`https://brasilapi.com.br/api/ddd/v1/${evento.target.value}`)
    .then(resposta => resposta.json())
    .then(dados => {
        Avalor('cidades', dados.cities);
    })
}
function Avalor(id, valor){
    valor.forEach(cida => {
        cada = document.createElement("li");
        cada.textContent = cida;
        document.querySelector(`#${id}`).append(cada);
    });
}
