// Efeito filtro feminino

$(document).ready(()=> {
    $('.listFem').click(function() {
        const value = $(this).attr('data-filter')
        if(value == 'allFem') {
            $('.cardFem').show(500)
        } else {
            $('.cardFem').not('.' + value).hide(500)
            $('.cardFem').filter('.' + value).show(500)
        }
    })

    $('.listFem').click(function(){
      $(this).addClass('active').siblings().removeClass('active')
    })
})



// Efeito filtro masculino

$(document).ready(()=>{
    $('.listMas').click(function() {
        const value = $(this).attr('data-filter')
        if(value == 'allMas') {
            $('.cardMas').show(500)
        } else {
            $('.cardMas').not('.' + value).hide(500)
            $('.cardMas').filter('.' + value).show(500)
        }
    })

    $('.listMas').click(function(){
      $(this).addClass('active').siblings().removeClass('active')
    })
})



// Efeito filtro unisex

$(document).ready(()=>{
    $('.listUni').click(function(){
        const value = $(this).attr('data-filter')
        if(value == 'allUni') {
            $('.cardUni').show(500)
        } else {
            $('.cardUni').not('.' + value).hide(500)
            $('.cardUni').filter('.' + value).show(500)
        }
    })

    $('.listUni').click(function(){
      $(this).addClass('active').siblings().removeClass('active')
    })
})


// Efeito abrir o carrinho com slideToggle  

$('#btn-carrinho').click(function(){
    $('.carrinho').slideToggle()
    let carrinho = document.querySelector('.carrinho')
    carrinho.style.display = 'flex'
})

// Efeito abrir carrinho ao clicar em um item com slideDown e fecha o modal
$('.modal-footer').children().click(function(){
    $('.carrinho').slideDown()
    $('.modal').modal('hide')

})

// Efeito fechar o carrinho com slideUp
$('.exit').click(function(){
    $('.carrinho').slideUp()
})

