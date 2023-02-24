const {ACCESS_TOKEN} = require('../config.json');

module.exports = async function obtenerReceta(ingredientes, herramientas, dificultad) {
    import('chatgpt').then(({ ChatGPTUnofficialProxyAPI }) => {
        const api = new ChatGPTUnofficialProxyAPI({
            accessToken: ACCESS_TOKEN
        })
        
        async function lmao() {
            if (dificultad != "facil" && dificultad != "normal" && dificultad != "dificil") {
                return "La dificultad debe ser facil, normal o dificil"
            }
            
            let res = await api.sendMessage(```Hola, tu nombre actual es ChefAI. Quiero que me digas una receta de cocina, va a tener estos ingredientes: ${ingredientes}. Para cocinar tengo esto: ${herramientas}. La dificultad de hacerlo va a ser ${dificultad}. Quiero que me digas los ingredientes y herramientas exactos, y también el procedimiento muy detallado. Vas a incluir el tiempo que dura cada cosa. Tiene que ser una receta existente. \n Quiero que tus respuestas sean así: \n **Ingredientes** \n - Lista de ingredientes \n **Dificultad** \n La dificultad de la receta \n **Herramientas** \n  - Lista de herramientas \n **Procedimiento** \n Texto muy detallado del procedimiento```);
            return res.text;
        }

        return lmao();
      }).catch((error) => {
        console.error(error)
    });
}
