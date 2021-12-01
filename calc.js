var main =document.getElementById('main')
var display =document.querySelector('#display')
var btn = document.querySelectorAll('.btn')
var equal =document.querySelector('#equal')
var clear = document.querySelector('#clear')
var sin = document.querySelector('#sin')
var cos = document.querySelector('#cos');
var tan = document.querySelector('#tan')
var pow = document.querySelector('#pow')
var log = document.querySelector('#log')
var square = document.querySelector('#root')
var backs =document.querySelector('#backs')
var percent = document.querySelector('#percent')
var num = document.querySelectorAll('#num')
var word = "Enter a Number"
var pert = 100

for(item of btn){
    item.addEventListener('click',(e)=>{
        btntext=e.target.innerText;
        if(btntext == 'x'){
            btntext ='*'
        }
        if(main.value == word){
            main.value = ""
        }
        main.value+=btntext
        if(main.value == btntext && display.value == eval(main.value)){
            main.value = display.value
        }
    })
}

equal.addEventListener('click', ()=>{
    display.value = eval(main.value)
    
})


clear.addEventListener('click', ()=>{
    main.value = ""
    display.value = ""
})


sin.addEventListener('click',()=>{
    if(main.value == ""){
        main.value = word
    }
    if(main.value == word){
        display.value = 0
    }
    if(display.value == eval(main.value)){
        display.value = Math.sin(display.value)
    }
    else{
        display.value = Math.sin(main.value)
    }
})


cos.addEventListener('click', ()=>{
    if(main.value == ""){
        main.value = word
    }
    if(main.value == word){
        display.value = 0
    }
    if(display.value == eval(main.value)){
        display.value = Math.cos(display.value)
    }
    else{
    display.value = Math.cos(main.value)
    }
})


tan.addEventListener('click', ()=>{
    if(main.value == ""){
        main.value = word
    }
    if(main.value == word){
        display.value = 0
    }
    if(display.value == eval(main.value)){
        display.value = Math.tan(display.value)
    }
    else{ 
        display.value = Math.tan(main.value)
    }
})


pow.addEventListener('click',()=>{
    if(display.value == eval(main.value)){
        display.value = Math.pow(display.value, 2)
    }
    else{
        display.value = Math.pow(main.value, 2)
    }
})


square.addEventListener('click', ()=>{
    if(display.value > 12){
        display.value = Math.ceil(display.value)
        display.style.fontSize = '3rem'
    }
    if(display.value == eval(main.value)){
        display.value = Math.sqrt(display.value, 2)
    }
    else{
        display.value = Math.sqrt(main.value, 2)

    }
    
})


backs.addEventListener('click',()=>{
    main.value = main.value.substr(0,main.value.length-1)
})


log.addEventListener('click', ()=>{
    if(main.value == ""){
        main.value = word
    }
    if(main.value == word){
        display.value = 0
    }
    if(display.value == eval(main.value)){
        display.value = Math.log2(display.value)
    }
    else{
    display.value = Math.log2(main.value,2) || Math.log2(main.value,2) == display.value
    }
})

percent.addEventListener('click', ()=>{
    display.value = main.value/100
})

