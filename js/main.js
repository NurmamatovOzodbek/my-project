let wrapper = document.querySelector(".wrapper")
let inner = document.querySelector(".inner")
let error = document.querySelector(".error")
let btnBack = document.querySelector(".back")
let correct = document.querySelector(".correct")
let btnSelect = document.querySelectorAll(".btn__one")
let span = document.querySelectorAll(".btn__one span")
let btnSumbit = document.querySelector("button")
let count = document.querySelector(".checked p span")
let res = 0
function selectBtn(btnLength){
  btnSelect.forEach((value) => {
    value.style.background = "#262E38"
  })
  for(let i =0; i<=btnLength;i++){
    btnSelect[i].style.background = "#FC7614"
    // span[i].style.color = "white"
  }
}

btnSelect.forEach((value,index) => {
  value.addEventListener("click", () => {
    value.style.background = "#FC7614"
    // span.style.color = "white"
    res = index+1

    selectBtn(index)
  })
})
btnBack.addEventListener("click", () => {
  error.style.display = "none"
  wrapper.style.display = "flex"
})
btnSumbit.addEventListener('click', () => {
  if(res == 0){
    wrapper.style.display = "none"
    error.style.display = "flex"
  }else{
    wrapper.style.display = "none"
    correct.style.display = "flex"
    count.innerText = res
  }
})