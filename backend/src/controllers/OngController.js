const crypto = require('crypto');
const connection = require('../database/connection');

// Exportar um objeto aqui de dentro com os métodos
module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
   
        return response.json(ongs);
    },

    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;

    // Gerando um ID (criptografado usando o crypto)
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

    return response.json({ id });
    }
};