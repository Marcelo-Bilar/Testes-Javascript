const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger/swagger.json');
const ApiConstants = require('./enum/ApiConstants');
const UserController = require('./controllers/UserController');

class App {
    start() {
        this.setupExpress();
        this.loadControllers();
        this.startServer();
    }

    setupExpress() {
        //cria a instancia do express
        this.express = express ();

        // configura o swagger na API
        this.express.use(
            `${ApiConstants.BASE_PATH}/docs`, 
            swaggerUi.serve, 
            swaggerUi.setup(swaggerFile)
        );

        //definindo middleware para imprimir requisição nova
        this.express.use((req, res, next) => {
            console.log(req.method, req.url);
            next();
        });
    }

    loadControllers() {
        // carrega toda a lista de controllers que a aplicação terá 
        this.controllers = [
            new UserController(this.express)
        ];
    }

    startServer() {
        //inicia o servidor da API na porta 3001
        const port = 3001;
        this.express.listen(port, () => {
            console.log('Api esta executando na porta ', port)
        });
    }
}

module.exports = App;