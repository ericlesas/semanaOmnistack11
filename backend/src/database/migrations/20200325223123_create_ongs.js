// Responsável pela tabela (o que vai acontecer quando ser executada essa migration)
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
  })
};

// Voltar atrás na criação de uma tabela (deletar ela)
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
