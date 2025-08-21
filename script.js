function toggleMode() {
const html= document.documentElement
html.classList.toggle("black")

const img= document.querySelector(".prof") //acessar imagem do perfil e trocar
    if(html.classList.contains("black")) {
    img.setAttribute("src", "./avatarblack.png")
    } else {
    img.setAttribute("src", "./avatar.png")
    }
const but= document.querySelector(".but") //acessar icone e trocar atributo
    if(html.classList.contains("black")) {
    but.setAttribute("name", "moon")
    } else {
    but.setAttribute("name", "sunny-outline")
    }
}