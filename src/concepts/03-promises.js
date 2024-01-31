import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {
    const renderHero = (hero) => {
        element.innerHTML = hero.name
    }

    const renderError = (error) => {
        element.innerHTML = `<span style="color:red">Error:</span> ${error}`
    }

    const id = '5d86371f25a058e5b1c8a65e'

    findHero(id)
        // .then(hero => renderHero(hero)) -- si los parámetros son iguales se puede mandar ref de la función
        .then(renderHero)
        .catch(renderError)
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>} returns hero object
 */
const findHero = (id) => {
    return new Promise((resolve, reject) => {
        const hero = heroes.find(hero => hero.id === id)

        if (hero) {
            resolve(hero)
            return
        }

        reject(`Hero with id ${id} not found`)
    })
}