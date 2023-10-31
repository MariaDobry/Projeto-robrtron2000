const subtrair = document.querySelector("#subtrair")
const ssomar = document.querySelector("#somar")
const braco = document.querySelector("#braco")

somar.addEventListener("click", (evento ) => {
    braco.valua = perseInt(braco.value) + 1
})