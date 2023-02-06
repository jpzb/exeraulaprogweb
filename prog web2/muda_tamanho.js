let tamanho = 2;
let h = document.querySelector("h1");
if (h == null){
    h = document.querySelector("h2");
    if (h == null){
        h = document.querySelector("h3");
        if (h == null){
            h = document.querySelector("h4");
            if (h == null){
                h = document.querySelector("h5");
                if (h == null){
                    h = document.querySelector("h6");
                }
            }
        }
    }
}
if (h != null){
    criaBotao();
}
function atualizaTamanho(){
    h.style.fontSize = `${tamanho}em`;
}
function aumentaTitulo(){
    if (tamanho < 7){
        tamanho += 1;
        atualizaTamanho();
    }
}
function diminuiTitulo(){
    if (tamanho > 1){
        tamanho -= 1;
        atualizaTamanho();
    }
}
function criaBotao(){
    bt1 = document.createElement("button");
    bt1.setAttribute("onclick", `diminuiTitulo()`)
    bt2 = document.createElement("button");
    bt2.setAttribute("onclick", `aumentaTitulo()`)
    bt1.textContent = "-";
    bt2.textContent = "+";
    document.body.prepend(bt1);
    document.body.append(bt2);
}
