const titulo = document.getElementById('titulo-post')
const autor = document.getElementById('autor-post')
const conteudo = document.getElementById('conteudo-post')
const botao = document.getElementById('cria-post')

let infoPost = {
    titulo: `${titulo.value}`,
    autor: `${autor.value}`,
    conteudo: `${autor.value}`
}

let posts = []

function inserirPosts(){
    posts.push(infoPost)
}