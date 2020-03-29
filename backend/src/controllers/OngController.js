const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

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

    const id = generateUniqueId();

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