import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async (element) => {

    const id2 = '5d86371fd55e2e2a30fe1ccb1'

    try {
        const { name: name } = await findHero(id)

        element.innerHTML = name
    }
    catch (error) {
        element.innerHTML = error
    }

}


/**
 * 
 * @param {String} id 
 */
const findHero = async (id) => {

    const hero = heroes.find(hero => hero.id === id)
    if (!hero) throw `Hero with id ${id} not found`

    return hero
}