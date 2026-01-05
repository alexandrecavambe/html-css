const numero = document.querySelector('#result');
function insert(num) {
    numero.value += num
}
function clean() {
    document.querySelector('#result').value = ""
}
function back(){
    const input = document.querySelector('#result')
    input.value = input.value.substring(0, input.value.length -1)
}
function calcular(){
    const input = document.querySelector('#result')
    if(input.value){
        try{
            input.value = eval(input.value)
        }catch{
        input.value = "Expressão Inválida"
    }
    }
}
