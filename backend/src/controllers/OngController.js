const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {

    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response) {
        /**
     * Validação para garantir campos corretos
     */
    const { name, email, whatsapp, city, uf } = request.body

    const id = crypto.randomBytes(4).toString('HEX');

    /**
     * Aguarda esse trecho terminar para prosseguir
     */
    await connection('ongs').insert({ id, name, email, whatsapp, city, uf })

    /**
     * retorna o ID da ong cadastrada
     */
    return response.json({ id });
    }
};