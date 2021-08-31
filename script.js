$('document').ready(function () {


    // $("#formGorjeta").submit(function(e){

    // });

    $(".btn-porcentagem").click(function (e) {
        const value = this.value;
        removerClasseBtnPorcentagem();
        $(this).addClass("btn-porcentagem-selecionado")
        $("#personalizado").val(value);
        calcular();
    });

    $("#personalizado").keypress(function (e) {
        removerClasseBtnPorcentagem();
    })

    $(`#total-pessoas,#personalizado,#valor-pedido`).change(function(e){
        calcular();
    });
});


function removerClasseBtnPorcentagem() {
    $('.btn-porcentagem-selecionado').each(function (i, obj) {
        $(this).removeClass("btn-porcentagem-selecionado")
    });
}

function ehValorPedidoValido() {
    const valorPedido = $(`#valor-pedido`).val();
    if (!!valorPedido) {
        $(`#valor-pedido`).removeClass("is-invalid");
        return true
    }
    $(`#valor-pedido`).addClass("is-invalid")
    return false;
}


function ehPersonlizadoValido() {
    const personalizado = $(`#personalizado`).val();
    if (!!personalizado) {
        $(`#personalizado`).removeClass("is-invalid");
        return true
    }
    $(`#personalizado`).addClass("is-invalid")
    return false;
}


function ehTotalPessoasValido() {
    const totalPessoas = $(`#total-pessoas`).val();
    if (!!totalPessoas) {
        $(`#total-pessoas`).removeClass("is-invalid");
        $(`#total-pessoas-icone`).attr("src", "img/icone-verde.svg");
        return true
    }
    $(`#total-pessoas`).addClass("is-invalid");
    $(`#total-pessoas-icone`).attr("src", "img/icone-vermelho.svg");
    return false;
}

function calcular(){
    const ehPersonlizadoValidoLocal = ehPersonlizadoValido();
    const ehTotalPessoasValidoLocal = ehTotalPessoasValido();
    const ehValorPedidoValidoLocal = ehValorPedidoValido();
    if (ehPersonlizadoValidoLocal && ehTotalPessoasValidoLocal && ehValorPedidoValidoLocal) {
        const valorPedido = parseFloat($(`#valor-pedido`).val());
        const personalizado = parseFloat($(`#personalizado`).val());
        const totalPessoas = parseFloat($(`#total-pessoas`).val());
        const valorTotal = valorPedido * (personalizado/100);
        $("#valor-total-gorjeta").val(valorTotal.toFixed(2));
        const valorPessoa =  valorTotal / totalPessoas;
        $("#valor-pessoa-gorjeta").val(valorPessoa.toFixed(2));
    }
}

