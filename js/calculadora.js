function numero(num){
    resultado = document.getElementById("resultado");
    if(num==='='){
        resultado.value = eval(resultado.value);
    } else {
        resultado.value = resultado.value+num;
    }
}

function operacao(operacao){
    resultado = document.getElementById("resultado");
    resultado.value = resultado.value + operacao;
}

function limpar(){
    resultado = document.getElementById("resultado");
    resultado.value = null;
}

function corFundo(cor){
    document.body.style.backgroundColor = cor;
}
