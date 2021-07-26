const ApiConstants = require('../enum/ApiConstants');

class BaseController {
    constructor(expressInstance) {
        if(!expressInstance) {
            throw new Error('A instância do express é obrigatória');
        }
        this.express = expressInstance;
        this.setupRoutes(ApiConstants.BASE_PATH);
    }

    //definição do metodo abstrado para ser implementado nas classes filhas
    setupRoutes() {
        throw new Error('setupRoutes deve ser implementado');
    }
}

module.exports = BaseController;