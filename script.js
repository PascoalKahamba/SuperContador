var inicio = document.querySelector('#t_inicio')
var fim = document.querySelector('#t_fim')
var passo = document.querySelector('#t_passo')
var butao = document.querySelector('#butao')
butao.addEventListener('click', clicar)
var res = document.querySelector('.res')


function clicar() {
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Impossivel Contar!"

    } else {

        res.innerHTML = "Contando: <br>"
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            alert("[ERRO] Passo invado! Considerando passo 1")
            p = 1
        }
        if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for (c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`

            }
        }
        res.innerHTML += `\u{1F3C1}`

    }
}