/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitSecuencialComponent = async (element) => {

    // !Esta versión de la implementación es lenta porque se ejecutan secuencialmente
    // const value1 = await slowPromise()
    // const value2 = await mediumPromise()
    // const value3 = await fastPromise()

    //! Versión optimizada usando Promise.all()
    const [value1, value2, value3] = await Promise.all([slowPromise(), mediumPromise(), fastPromise()])

    element.innerHTML = `
        value 1: ${value1} </br>
        value 2: ${value2} </br>
        value 3: ${value3} </br>
    `
}


const slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Slow Promise')
    }, 2000)
})

const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Medium Promise')
    }, 1500)
})

const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Fast Promise')
    }, 1000)
})