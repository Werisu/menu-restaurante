$(document).ready(function(){
    cardapio.metodos.obterItensCardapio();
})
var cardapio = {};

cardapio.eventos={
    init:() => {
        cardapio.metodos.obterItensCardapio();
    }
}

cardapio.metodos={
    //obtem a lista de itens json co cardapio
    obterItensCardapio:()=>{
        var filtro = MENU['burgers'];
        console.log(filtro);

        
        $.each(filtro, (i, e)=>{

            let temp = cardapio.templates.item.replace(/\${img}/g, e.img);

            $("#itensCardapio").append(temp);
        })
    },
}



cardapio.templates = {
    item: `
        <div class="col-3 mb-5">
            <div class="card card-item">
                <div class="img-produto">
                    <img src="\${img}"/>
                </div>
                <p class="title-produto text-center mt-4">
                    <b>nome</b>
                </p>
                <p class="price-produto text-center">
                    <b>R$ 154,90</b>
                </p>
                <div class="add-carrinho">
                    <spam class="btn-menos"><i class="fas fa-minus"></i></spam>
                    <spam class="add-numero-itens">0</spam>
                    <spam class="btn-mais"><i class="fas fa-plus"></i></spam>
                    <spam class="btn btn-add"><i class="fas fa-shopping-bag"></i></spam>
                </div>
            </div>
        </div>
    `
}