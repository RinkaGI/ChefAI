import {createRequire} from 'module';
import receta from './backend/getRecipe.js';
const require = createRequire(import.meta.url)
const promptTerminal = require('prompt-sync')();

// get info
let ingredientes = promptTerminal("¿Qué ingredientes tienes?: ")
let herramientas = promptTerminal("¿Qué herramientas quieres utilizar para cocinar? (air frier, microondas, batidora, barbacoa, horno etc..): ")
let dificultad = promptTerminal("¿Qué dificultad quieres que sea hacerlo? (facil, normal, dificil): ")

// get recipe and show it
let recetaCocina = await receta(ingredientes, herramientas, dificultad);

console.log(recetaCocina)
