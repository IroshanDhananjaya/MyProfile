document.getElementById("btn-placeOrder").addEventListener("click",function(){
    document.getElementsByClassName("placeOrder-area")[0].style.display="block"
    document.getElementsByClassName("customer-area")[0].style.display="none"
    document.getElementsByClassName("item-area")[0].style.display="none"
})

document.getElementById("btn-customer").addEventListener("click",function(){
    document.getElementsByClassName("customer-area")[0].style.display="block"
    document.getElementsByClassName("placeOrder-area")[0].style.display="none"
    document.getElementsByClassName("item-area")[0].style.display="none"
})

document.getElementById("btn-Item").addEventListener("click",function(){
    document.getElementsByClassName("item-area")[0].style.display="block"
    document.getElementsByClassName("placeOrder-area")[0].style.display="none"
    document.getElementsByClassName("customer-area")[0].style.display="none"
})