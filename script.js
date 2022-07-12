let img1 = document.getElementById("brasil")
let img2 = document.getElementById("cruz")
let img3 = document.getElementById("barca")
let caixa = document.getElementById("caixa-principal")
let imag = document.getElementById("img-brasil")
let ima = document.getElementById("img-cruz")
let im = document.getElementById("img-barca")
let menutg= document.querySelector(".toggle")
let ulx = document.querySelector(".ulx")


function butt() {

  im.style.display = "inline"
  imag.style.display = "none"
  ima.style.display = "none"
  caixa.style.background = "#A2214B"
}

function button() {

  im.style.display = "none"
  imag.style.display = "none"
  ima.style.display = "inline"
  caixa.style.background = "#065AA2"






}


function buttons() {
  im.style.display = "none"
  imag.style.display = "none"
  ima.style.display = "none"
  imag.style.display = "inline"
  caixa.style.background = "yellow"


}

function menu(){
 
  menutg.classList.toggle("active")
  ulx.classList.toggle("active")

}



menutg.addEventListener("click" , menu)
img3.addEventListener("click", butt)
img2.addEventListener("click", button)
img1.addEventListener("click", buttons)