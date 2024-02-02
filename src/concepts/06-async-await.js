import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = (element) => {

    const id1 = '5d86371fd55e2e2a30fe1ccbs'

    findHero(id1)
        .then(name => element.innerText = name)
        .catch(error => element.innerText = error)
}


/**
 * 
 * @param {String} id 
 */
const findHero = async (id) => {

    const hero = heroes.find(hero => hero.id === id)
    if (!hero) throw `Hero with id ${id} not found`

    return hero.name
}