/**
 *@file index.js
 *@description  Ponto da entrada da aplicação. Lê variaveis do ambiente.
 *Importa a app Express e arranca o servidor HTTP. Mantém o ficheiro.
 *Para que a configuração do Express viva em `src`.
 */

const { application } = require("express");

/**
* Arranca o servidor HTTP do Express a escutar em `PORT`.
* Inclui handlers de sucesso/erro para logs mais claros em desenvolvimento.
* @function startServer
* @returns {void}
*/

function startServer(){
    const server = app.listen(PORT, () => {
        console.log(`Servidor a correr na porta ${PORT}`);
    });

    // Em caso de erro ao abrir a porta devolve
    server.on("error", (err) => {
        console.error(err.message);
    });
}

//Arranca o servidor
startServer();