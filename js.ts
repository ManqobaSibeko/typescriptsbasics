const btn = document.querySelector("button")
const num1 = document.querySelector("#num1")! as HTMLInputElement
const num2 = document.querySelector("#num2")! as HTMLInputElement

function add(a: number, b:number){
        return a + b;  
}

btn.addEventListener("click",function(){
    console.log(add(+num1.value, +num2.value))
})