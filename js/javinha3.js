// function  serve para ativar o recebimento de informações 
function entrar(){
    var nome = document.getElementById("cxnome").value;
    var senha = document.getElementById("cxsenha").value;
    
    if (nome =="ADM" && senha == "123") {
        alert("Acesso Permitido");
    } else {
        alert("Acesso negado");
    }
}
