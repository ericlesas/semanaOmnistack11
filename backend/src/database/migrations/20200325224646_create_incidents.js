exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        //primary_key:
        table.increments(); 
        //campos: 
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        // Relacionamentos:
        table.string('ong_id').notNullable();
        // foreign_key:
        table.foreign('ong_id').references('id').inTable('ongs');
    })
  };

exports.down = function(knex) {
  return knex.schema.dropTable('incidents')
};
