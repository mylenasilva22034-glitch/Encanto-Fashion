
function simularCompra() {
    const bolsa = 80;
    const oculos = 35;
    const brincos = 20;

    const qtdBolsa = Number(prompt(
        "Quantas bolsas elegantes deseja? (R$ 80,00)"
    ));

    if (!Number.isInteger(qtdBolsa) || qtdBolsa < 0) {
        alert("Digite uma quantidade inteira válida.");
        return;
    }

    const qtdOculos = Number(prompt(
        "Quantos óculos de sol deseja? (R$ 35,00)"
    ));

    if (!Number.isInteger(qtdOculos) || qtdOculos < 0) {
        alert("Digite uma quantidade inteira válida.");
        return;
    }

    const qtdBrincos = Number(prompt(
        "Quantos brincos delicados deseja? (R$ 20,00)"
    ));

    if (!Number.isInteger(qtdBrincos) || qtdBrincos < 0) {
        alert("Digite uma quantidade inteira válida.");
        return;
    }

    const totalBolsa = bolsa * qtdBolsa;
    const totalOculos = oculos * qtdOculos;
    const totalBrincos = brincos * qtdBrincos;

    const subtotal = totalBolsa + totalOculos + totalBrincos;

    if (qtdBolsa === 0 && qtdOculos === 0 && qtdBrincos === 0) {
        alert("Nenhum produto foi selecionado!");
        return;
    }

    let desconto = 0;

    if (subtotal >= 100) {
        desconto = subtotal * 0.10;
    }

    const totalFinal = subtotal - desconto;

    alert(
        "ENCANTO FASHION\n\n" +
        "Bolsa elegante: " + qtdBolsa +
        " unidade(s) = R$ " + totalBolsa.toFixed(2) + "\n" +
        "Óculos de sol: " + qtdOculos +
        " unidade(s) = R$ " + totalOculos.toFixed(2) + "\n" +
        "Brincos delicados: " + qtdBrincos +
        " unidade(s) = R$ " + totalBrincos.toFixed(2) + "\n\n" +
        "Subtotal: R$ " + subtotal.toFixed(2) + "\n" +
        "Desconto: R$ " + desconto.toFixed(2) + "\n" +
        "TOTAL A PAGAR: R$ " + totalFinal.toFixed(2)
    );
}
