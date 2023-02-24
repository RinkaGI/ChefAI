import {createRequire} from 'module';
import { ChatGPTUnofficialProxyAPI } from 'chatgpt';
const require = createRequire(import.meta.url)

const promptTerminal = require('prompt-sync')();
const { ACCESS_TOKEN } = require('./config.json')


// get info
let ingredientes = promptTerminal("¿Qué ingredientes tienes?: ")
let herramientas = promptTerminal("¿Qué herramientas quieres utilizar para cocinar? (air frier, microondas, batidora, barbacoa, horno etc..): ")
let dificultad = promptTerminal("¿Qué dificultad quieres que sea hacerlo? (facil, normal, dificil): ")

// get chatgpt proxy
const api = new ChatGPTUnofficialProxyAPI({
    accessToken: ACCESS_TOKEN
 })

 //check info
 if (dificultad != "facil" && dificultad != "normal" && dificultad != "dificil") {
    console.log("La dificultad debe ser facil, normal o dificil")
 } 

 // get recipe and show it
 let res = await api.sendMessage(`Hola, tu nombre actual es ChefAI. Quiero que me digas una receta de cocina, va a tener estos ingredientes: ${ingredientes}. Para cocinar tengo esto: ${herramientas}. La dificultad de hacerlo va a ser ${dificultad}. Quiero que me digas los ingredientes y herramientas exactos, y también el procedimiento muy detallado. Vas a incluir el tiempo que dura cada cosa. Tiene que ser una receta existente. \n Quiero que tus respuestas sean así: \n **Ingredientes** \n - Lista de ingredientes \n **Dificultad** \n La dificultad de la receta \n **Herramientas** \n Lista de herramientas \n **Procedimiento** \n Texto muy detallado del procedimiento`);


 console.log(res.text)
