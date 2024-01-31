import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbackComponent = (element) => {
    const id = '5d86371f2343e37870b91ef12'
    findHero(id, (error, hero) => {
        // -- optional chaning (?.) & nullish coalescing operator (??)
        // element.innerHTML = hero?.name ?? 'No hay heroe'
        if (error) {
            element.innerHTML = error
            return
        }

        element.innerHTML = hero.name
    })
}

/**
 * 
 * @param {String} id 
 * @param {(error: String | null, hero:Object)=>void} callback 
 */
const findHero = (id, callback) => {
    const hero = heroes.find(hero => hero.id === id)

    // El estandar de la industria es mandar el error como primer argumento del callbak
    if (!hero) {
        callback(`Hero with id ${id} not found`)
        return
    }

    callback(null, hero)
}