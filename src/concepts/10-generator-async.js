import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorAsyncComponent = async (element) => {
    const heroGenerator = getGeroGenerator()
    let isFinished = false

    do {
        const { value, done } = await heroGenerator.next()
        isFinished = done

        if (isFinished) break

        element.innerHTML = value
    } while (!isFinished)
}

async function* getGeroGenerator() {
    for (const hero of heroes) {
        await sleep()
        yield hero.name
    }

    return 'No hay más heroes'
}

const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 500)
    })
}