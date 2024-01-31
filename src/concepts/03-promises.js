import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {
    const renderHero = (hero) => {
        element.innerHTML = hero.name
    }

    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `${hero1.name} / ${hero2.name}`
    }

    const renderError = (error) => {
        element.innerHTML = `<span style="color:red">Error:</span> ${error}`
    }

    const id = '5d86371f25a058e5b1c8a65e'

    findHero(id)
        // .then(hero => renderHero(hero)) -- si los parámetros son iguales se puede mandar ref de la función
        .then(renderHero)
        .catch(renderError)


    //! FORMAS DE MANEJAR VARIAS PROMESAS
    const id1 = '5d86371fd55e2e2a30fe1ccb'
    const id2 = '5d86371fd55e2e2a30fe1ccb1'

    //! Forma 1 (RECOMENDADA - Si los valores no son dependientes)

    Promise.all([findHero(id1), findHero(id2)])
        .then(([hero1, hero2]) => renderTwoHeroes(hero1, hero2))
        .catch(renderError)

    //! Forma 2 (no recomendada - Retornar promesa)
    // let hero1

    // findHero(id1)
    //     .then(hero => {
    //         hero1 = hero
    //         return findHero(id2)
    //     }).then(hero2 => {
    //         renderTwoHeroes(hero1, hero2)
    //     })
    //     .catch(renderError)

    //! Forma 3 (no recomendada - Promise hell)
    // findHero(id1)
    //     .then(hero1 => {
    //         findHero(id2)
    //             .then(hero2 => {
    //                 renderTwoHeroes(hero1, hero2)
    //             })
    //             .catch(renderError)
    //     })
    //     .catch(renderError)
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