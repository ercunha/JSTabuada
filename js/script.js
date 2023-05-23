

document.getElementById('btn-calcular').addEventListener('click',Calcular)
let btn = document.getElementById('btn-calcular')
let icon = 
btn.innerHTML = `<h2>\u{1F5A9} Calcular</h2> ` 

function Calcular(){

    let input = Number(document.getElementById('inputNumero').value)
    let inputLimit = Number(document.getElementById('inputMaximo').value)
    let number = document.getElementById('spanNumero')
    let result = document.getElementById('tabuada')
    number.innerHTML = `${input}`

    if(input == '' || inputLimit ==''){
        alert('Todos os campos devem ser preenchidos !')

    }else{
        Reset()
        for(let i = 0; i<=inputLimit; i++)
        {
                var option = document.createElement('option')
                let total = input * Number(i)
                option.text = `${input} X ${i} = ${total}`
                result.appendChild(option)
        }
    }
}

function Reset(){
    document.getElementById('inputNumero').value = '';
    document.getElementById('inputMaximo').value = '';
    document.getElementById('tabuada').innerHTML =''
}