import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {
    console.log('demo component')
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