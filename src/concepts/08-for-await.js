import { heroes } from '../data/heroes'
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async (element) => {

    const herosIds = heroes.map(hero => hero.id)

    const heroPromises = getHeroesAsync(herosIds)

    // Este es un nuevo caso de uso que se podría llegar a utilizar como await Promise.all()
    for await (const hero of heroPromises) {
        element.innerHTML += `${hero.name} </br>`
    }

}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = (heroIds) => {

    const heroPromises = []

    heroIds.forEach(id => {
        heroPromises.push(getHeroAsync(id))
    })

    return heroPromises
}

const getHeroAsync = async (id) => {

    await new Promise((resolve) => {
        setTimeout(() => resolve(), 1000)
    })

    return heroes.find(hero => hero.id === id)
}