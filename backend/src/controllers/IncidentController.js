const connection = require ('../database/connection');

module.exports = {
    async index( request, response){
        const { page = 1} = request.query;

        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'incidents.*',
            'ongs.name',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf']
        );

        response.header('X-Total-Count', count['count(*)'])

        return response.json(incidents); 
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;
        // abaixo é verificar pelo id da on, se ela realmente resposável pelo id requisitado acima
        const ong_id = request.headers.authorization;

        // buscar o incidente na tabela incidente
        const incident = await connection('incidents').where('id', id)
        .select('ong_id')
        .first();

        // verificação se o ong id é diferente do id do caso que está logado
        if (incident.ong_id != ong_id){
            // condigo de status http "Não autorizado"
            return response.status(401).json({error: 'Operation not permitted'});
        }
        // se de sucesso:
        await connection('incidents').where('id', id).delete();
        // 204 = resposta que não tem conteúdo para o frontend
        return response.status(204).send();
    }
};