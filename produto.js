function calcular(){
    validarDescricao();
    console.log(unit.value)
    let nTotal = unit.value * qtd.value;
    total.value = nTotal;
}

function validarDescricao(){
    if(desc.value.trim() === ""){
        desc.style.background="yellow";
        mensagem.innerHTML = "Preencha a descrição do Produto!";
        $('#alerta').modal('show');
        return false;
    }else{
        desc.style.background = "white";
        return true;
    }
}