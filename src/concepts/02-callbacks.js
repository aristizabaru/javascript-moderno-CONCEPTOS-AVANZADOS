import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbackComponent = (element) => {
    const id = '5d86371f2343e37870b91ef1'
    findHero(id, ({ name }) => {
        element.innerHTML = `The hero's name is ${name}`
    })
}

/**
 * 
 * @param {String} id 
 * @param {(hero:Object)=>void} callback 
 */
const findHero = (id, callback) => {
    const hero = heroes.find(hero => hero.id === id)

    callback(hero)
}