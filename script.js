const dados = [
    {nome:"Ernicio Jermias Chilundo", bi:"10101010MB04", nuit:"123456789", telefone:"+258840000001", cidade:"Inhambane"},
    {nome:"Djen da Lurdes Sosuke", bi:"20202020MB02", nuit:"987654321", telefone:"+258870000002", cidade:"Beira"}
];

function buscarContato(){
    const bi = document.getElementById("bi").value.trim();
    const nuit = document.getElementById('nuit').value.trim();
    const resultadoDiv = document.getElementById('resultado');

    const contato = dados.find(p=>p.bi==bi && p.nuit == nuit);

    if(contato){
        resultadoDiv.innerHTML= `
            <p><strong>Nome:</strong> ${contato.nome}</p>
            <p><strong>Telefone:</strong> ${contato.telefone}</p>
            <p><strong>Cidade:<strong> ${contato.cidade}
        `;
    }else{
        resultadoDiv.innerHTML = `<p style ="color:red;">❌ Contato nao encontrado!`;
    }

}