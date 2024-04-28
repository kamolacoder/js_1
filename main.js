const button1=document.querySelector(`.btn1`)
const button2=document.querySelector(`.btn2`)
const big=document.querySelector(`.aa`)
const pic=document.querySelector(`.pic`)
const h4=document.querySelector(`.h4`)
button1.addEventListener(`click`,()=>{
    button1.textContent=`Clicked`
    button1.classList.add(`new`)
    button2.textContent=`button2`
    button2.classList.remove(`new`)
    big.classList.add(`big`)
    pic.classList.add(`foto`)
    h4.classList.add(`margin`)
    h4.textContent=(`BAY`)
})
button2.addEventListener(`click`,()=>{
    button2.textContent=`Clicked`
    button2.classList.add(`new`)
    button1.textContent=`button1`
    button1.classList.remove(`new`)
    big.classList.remove(`big`)
    pic.classList.remove(`foto`)
    h4.classList.remove(`margin`)
    h4.textContent=(`HELLO`)
})