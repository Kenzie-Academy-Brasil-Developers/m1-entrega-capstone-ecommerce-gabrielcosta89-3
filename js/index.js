let secaoAll = document.getElementsByClassName('vitrineAll')[0]
let tagUlaLL = document.createElement('ul')
secaoAll.appendChild(tagUlaLL)

let secaoAcessorios = document.getElementsByClassName('vitrineAcessórios')[0]
let tagUlacessorios = document.createElement('ul')
secaoAcessorios.appendChild(tagUlacessorios)

let secaoCamisetas = document.getElementsByClassName('vitrineCamisetas')[0]
let tagUlCamisetas = document.createElement('ul')
secaoCamisetas.appendChild(tagUlCamisetas)

let secaoCalçados = document.getElementsByClassName('vitrineCalçados')[0]
let tagUlCalçados = document.createElement('ul')
secaoCalçados.appendChild(tagUlCalçados)

let secaoIndividual = document.getElementsByClassName('vitrineIndividual')[0]
let tagUlIndividual = document.createElement('ul')
secaoIndividual.appendChild(tagUlIndividual)
//vitrine todos
for (let i = 0; i < data.length; i++) {
    //criar tags
    let tagLi = document.createElement('li')
    let divImagem = document.createElement('div')
    let tagImg = document.createElement('img')
    let divDescricao = document.createElement('div')
    let spanTipo = document.createElement('span')
    let h1Titulo = document.createElement('h1')
    let pDescricao = document.createElement('p')
    let spanValor = document.createElement('span')
    let buttonAdicionar = document.createElement('button')
    //adicionar classes e atributos
    tagLi.classList.add('card')
    divImagem.classList.add('div_img')
    tagImg.classList.add('img')
    tagImg.setAttribute('alt', `${data[i].nameItem}`)
    tagImg.setAttribute('src', `${data[i].img}`)
    divDescricao.classList.add('div_descricao')
    spanTipo.classList.add('tipo')
    h1Titulo.classList.add('titulo')
    pDescricao.classList.add('descricao')
    spanValor.classList.add('valor')
    buttonAdicionar.classList.add('adicionar')
    //inser texto
    spanTipo.innerText = `${data[i].tag[0]}`
    h1Titulo.innerText = `${data[i].nameItem}`
    pDescricao.innerText = `${data[i].description}`
    spanValor.innerText = `R$ ${(data[i].value).toFixed(2)}`
    buttonAdicionar.innerText = `${data[i].addCart}`
    //hierarquia
    divImagem.appendChild(tagImg)
    divDescricao.append(spanTipo, h1Titulo, pDescricao, spanValor, buttonAdicionar)
    tagLi.append(divImagem, divDescricao)
    tagUlaLL.appendChild(tagLi)



}

//vitrine acessorios
for (let i = 0; i < data.length; i++) {
    //criar tags
    if (data[i].tag[0] == "Acessórios") {
        let tagLi = document.createElement('li')
        let divImagem = document.createElement('div')
        let tagImg = document.createElement('img')
        let divDescricao = document.createElement('div')
        let spanTipo = document.createElement('span')
        let h1Titulo = document.createElement('h1')
        let pDescricao = document.createElement('p')
        let spanValor = document.createElement('span')
        let buttonAdicionar = document.createElement('button')
        //adicionar classes e atributos
        tagLi.classList.add('card')
        tagLi.setAttribute('id', `${data[i].id}`)
        divImagem.classList.add('div_img')
        tagImg.classList.add('img')
        tagImg.setAttribute('alt', `${data[i].nameItem}`)
        tagImg.setAttribute('src', `${data[i].img}`)
        divDescricao.classList.add('div_descricao')
        spanTipo.classList.add('tipo')
        h1Titulo.classList.add('titulo')
        pDescricao.classList.add('descricao')
        spanValor.classList.add('valor')
        buttonAdicionar.classList.add('adicionar')
        //inser texto
        spanTipo.innerText = `${data[i].tag[0]}`
        h1Titulo.innerText = `${data[i].nameItem}`
        pDescricao.innerText = `${data[i].description}`
        spanValor.innerText = `R$ ${(data[i].value).toFixed(2)}`
        buttonAdicionar.innerText = `${data[i].addCart}`
        //hierarquia
        divImagem.appendChild(tagImg)
        divDescricao.append(spanTipo, h1Titulo, pDescricao, spanValor, buttonAdicionar)
        tagLi.append(divImagem, divDescricao)
        tagUlacessorios.appendChild(tagLi)
    }
    else if (data[i].tag[0] == "Camisetas") {
        let tagLi = document.createElement('li')
        let divImagem = document.createElement('div')
        let tagImg = document.createElement('img')
        let divDescricao = document.createElement('div')
        let spanTipo = document.createElement('span')
        let h1Titulo = document.createElement('h1')
        let pDescricao = document.createElement('p')
        let spanValor = document.createElement('span')
        let buttonAdicionar = document.createElement('button')
        //adicionar classes e atributos
        tagLi.classList.add('card')
        tagLi.setAttribute('id', `${data[i].id}`)
        divImagem.classList.add('div_img')
        tagImg.classList.add('img')
        tagImg.setAttribute('alt', `${data[i].nameItem}`)
        tagImg.setAttribute('src', `${data[i].img}`)
        divDescricao.classList.add('div_descricao')
        spanTipo.classList.add('tipo')
        h1Titulo.classList.add('titulo')
        pDescricao.classList.add('descricao')
        spanValor.classList.add('valor')
        buttonAdicionar.classList.add('adicionar')
        //inser texto
        spanTipo.innerText = `${data[i].tag[0]}`
        h1Titulo.innerText = `${data[i].nameItem}`
        pDescricao.innerText = `${data[i].description}`
        spanValor.innerText = `R$ ${(data[i].value).toFixed(2)}`
        buttonAdicionar.innerText = `${data[i].addCart}`
        //hierarquia
        divImagem.appendChild(tagImg)
        divDescricao.append(spanTipo, h1Titulo, pDescricao, spanValor, buttonAdicionar)
        tagLi.append(divImagem, divDescricao)
        tagUlCamisetas.appendChild(tagLi)
    }
    else if (data[i].tag[0] == "Calçados") {
        let tagLi = document.createElement('li')
        let divImagem = document.createElement('div')
        let tagImg = document.createElement('img')
        let divDescricao = document.createElement('div')
        let spanTipo = document.createElement('span')
        let h1Titulo = document.createElement('h1')
        let pDescricao = document.createElement('p')
        let spanValor = document.createElement('span')
        let buttonAdicionar = document.createElement('button')
        //adicionar classes e atributos
        tagLi.classList.add('card')
        tagLi.setAttribute('id', `${data[i].id}`)
        divImagem.classList.add('div_img')
        tagImg.classList.add('img')
        tagImg.setAttribute('alt', `${data[i].nameItem}`)
        tagImg.setAttribute('src', `${data[i].img}`)
        divDescricao.classList.add('div_descricao')
        spanTipo.classList.add('tipo')
        h1Titulo.classList.add('titulo')
        pDescricao.classList.add('descricao')
        spanValor.classList.add('valor')
        buttonAdicionar.classList.add('adicionar')
        //inser texto
        spanTipo.innerText = `${data[i].tag[0]}`
        h1Titulo.innerText = `${data[i].nameItem}`
        pDescricao.innerText = `${data[i].description}`
        spanValor.innerText = `R$ ${(data[i].value).toFixed(2)}`
        buttonAdicionar.innerText = `${data[i].addCart}`
        //hierarquia
        divImagem.appendChild(tagImg)
        divDescricao.append(spanTipo, h1Titulo, pDescricao, spanValor, buttonAdicionar)
        tagLi.append(divImagem, divDescricao)
        tagUlCalçados.appendChild(tagLi)
    }
}
let todos = document.getElementById('todos')
let acessorios = document.getElementById('Acessórios')
let calcados = document.getElementById('Calçados')
let camisetas = document.getElementById('Camisetas')

todos.addEventListener('click', function () {
    secaoAll.classList.remove('hidden')
    secaoAcessorios.classList.add('hidden')
    secaoCamisetas.classList.add('hidden')
    secaoCalçados.classList.add('hidden')
    secaoIndividual.classList.add('hidden')
});

acessorios.addEventListener('click', function () {
    secaoAcessorios.classList.remove('hidden')
    secaoAll.classList.add('hidden')
    secaoCamisetas.classList.add('hidden')
    secaoCalçados.classList.add('hidden')
    secaoIndividual.classList.add('hidden')
});

calcados.addEventListener('click', function () {
    secaoCalçados.classList.remove('hidden')
    secaoAll.classList.add('hidden')
    secaoCamisetas.classList.add('hidden')
    secaoAcessorios.classList.add('hidden')
    secaoIndividual.classList.add('hidden')
});

camisetas.addEventListener('click', function () {
    secaoCamisetas.classList.remove('hidden')
    secaoAcessorios.classList.add('hidden')
    secaoAll.classList.add('hidden')
    secaoCalçados.classList.add('hidden')
    secaoIndividual.classList.add('hidden')
});

let input = document.getElementsByClassName('caixaPesquisa')[0]
let botao = document.getElementsByClassName('botaoPesquisa')[0]
botao.addEventListener('click', function () {
    for (let i = 0; i < data.length; i++) {
        secaoAcessorios.classList.add('hidden')
        secaoAll.classList.add('hidden')
        secaoCalçados.classList.add('hidden')
        secaoCamisetas.classList.add('hidden')
        secaoIndividual.classList.remove('hidden')
        let upper = (data[i].nameItem).toUpperCase()
        let upper1 = (input.value).toUpperCase()
        if (upper1 == upper) {
            tagUlIndividual.innerText = ""
            input.value = ""
            let tagLi = document.createElement('li')
            let divImagem = document.createElement('div')
            let tagImg = document.createElement('img')
            let divDescricao = document.createElement('div')
            let spanTipo = document.createElement('span')
            let h1Titulo = document.createElement('h1')
            let pDescricao = document.createElement('p')
            let spanValor = document.createElement('span')
            let buttonAdicionar = document.createElement('button')
            //adicionar classes e atributos
            tagLi.classList.add('card')
            divImagem.classList.add('div_img')
            tagImg.classList.add('img')
            tagImg.setAttribute('alt', `${data[i].nameItem}`)
            tagImg.setAttribute('src', `${data[i].img}`)
            divDescricao.classList.add('div_descricao')
            spanTipo.classList.add('tipo')
            h1Titulo.classList.add('titulo')
            pDescricao.classList.add('descricao')
            spanValor.classList.add('valor')
            buttonAdicionar.classList.add('adicionar')
            //inser texto
            spanTipo.innerText = `${data[i].tag[0]}`
            h1Titulo.innerText = `${data[i].nameItem}`
            pDescricao.innerText = `${data[i].description}`
            spanValor.innerText = `R$ ${(data[i].value).toFixed(2)}`
            buttonAdicionar.innerText = `${data[i].addCart}`
            //hierarquia
            divImagem.appendChild(tagImg)
            divDescricao.append(spanTipo, h1Titulo, pDescricao, spanValor, buttonAdicionar)
            tagLi.append(divImagem, divDescricao)
            tagUlIndividual.appendChild(tagLi)
        }

    }

}
);