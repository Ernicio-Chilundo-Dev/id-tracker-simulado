dadps[
    {nome:"Ernicio Chilundo", bi:"10101010MB04", nuit:"123456789", telefone:"+258870568953", cidade:"Inhambane"},
    {nome:"Ricardo Chilundo", bi:"20202020MB02", nuit:"987654321", telefone:"+258851966466", cidade:"Beira"}
]

bi = input("Digite o BI: ")
nuit = input("Digite o NUIT: ")

encontrado = next((p for p in dados if p['bi'] == bi and p['nuit']==nuit),none)

if encontrado:
    print(f`✅ Contato encontrado Nome: ${[nome]}\nTelefone: ${[telefone]}\nCidade: ${[cidade]}`)
else:
    print("")