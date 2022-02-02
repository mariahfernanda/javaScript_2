'use strict'

const iniciarRange= (idRange)=> {

    const range = document.getElementById(idRange)
    const span = document.getElementById(`valor-${idRange}`)
 
    const atualizarValor = () => span.textContent = range.value
    range.addEventListener('input', atualizarValor)
 }
 export {
    iniciarRange
 }