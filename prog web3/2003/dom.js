function abrirMenu(){
    if(document.querySelector(".sub").style.display == "grid"){
        document.querySelector(".sub").style.display = "none";
    }else{
        document.querySelector(".sub").style.display = "grid";
    }
}

function autenticar(){
    const campoUser = document.querySelector("#textUser");
    const campoSenha = document.querySelector("#textPassword");

    if(campoUser.textContent == ""){
        campoUser.style.cssText = 'border: 2px solid #f58181';
    }
}