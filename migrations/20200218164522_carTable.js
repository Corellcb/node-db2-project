
exports.up = function(knex) {
  // The change we want to make to our schema
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.string('VIN', 128).notNullable();
        tbl.string('make', 128).notNullable();
        tbl.string('model', 128).notNullable();
        tbl.string('mileage', 128);
    });
};

exports.down = function(knex) {
  // undoing that change
    return knex.schema.dropTableIfExists('cars');
};
