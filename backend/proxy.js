let ChatGPTUnofficialProxyAPI;

import('chatgpt').then((module) => {
  ChatGPTUnofficialProxyAPI = module.ChatGPTUnofficialProxyAPI;
}).catch((error) => {
  console.error(error)
});

// Exportar ChatGPTUnofficialProxyAPI como valor predeterminado
module.exports = ChatGPTUnofficialProxyAPI;
