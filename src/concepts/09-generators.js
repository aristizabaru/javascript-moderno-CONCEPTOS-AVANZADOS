/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = (element) => {

    const genId = idGenerator()

    const button = document.createElement('button')
    button.innerText = 'Click Me'
    element.append(button)

    const renderButton = () => {
        const { value } = genId.next()
        button.innerText = `Click ${value}`
    }

    button.addEventListener('click', renderButton)

}

function* idGenerator() {
    let currentId = 0

    while (true) {
        yield ++currentId
    }
}

function* myFirstGenerator() {

    yield 'primer valor'
    yield 'segundo valor'
    yield 'tercer valor'

    return 'Ya no hay más valores'
}