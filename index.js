console.log('funguji');

const changeStyle = () => {
    const bodyElm = document.querySelector('body')
    bodyElm.style.backgroundColor = '#e9e9e9'

    const newsElm = document.querySelector('.news')
    newsElm.style.backgroundColor = '#fff'
    newsElm.style.maxWidth = '60rem'

    const h1Elm = document.querySelector('h1')
    h1Elm.classList.add('news__title')
    h1Elm.textContent = 'Aktuální novinky'

    const zprava1Elm = document.querySelector('#zprava1')
    zprava1Elm.classList.add('post--main')

    const imgZprava3Elm = document.querySelector('#zprava3 img')
    imgZprava3Elm.src = 'img/zprava3-novy.jpg'
}

changeStyle()

const postMain = (event) => {
    sectionArray.forEach(oneSection => {
        oneSection.classList.remove('post--main')
    })
    const targetElm = event.currentTarget
    targetElm.classList.add('post--main')
}

const sectionArray = document.querySelectorAll('.post')
sectionArray.forEach(oneSection => {
    oneSection.addEventListener('click', postMain)
})

