/**
 * 
 * @param {HTMLDivElement} element 
 */
export const enviromentComponent = (element) => {
    console.log(import.meta.env)
    const html = `
        DEV: ${import.meta.env.DEV} </br>
        PROD: ${import.meta.env.PROD} </br>
        SSR: ${import.meta.env.SSR} </br>
        VITE_API_KEY: ${import.meta.env.VITE_API_KEY} </br>
    `
    element.innerHTML = html
}