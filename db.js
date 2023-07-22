const Knex = require('knex');

const knex = Knex({ client: 'sqlite3', connection: { filename: './data.db' }, useNullAsDefault: true });

const createTableIfNotExists = async () => {
    const exists = await knex.schema.hasTable('uploads');
    if (!exists) {
        return knex.schema.createTable('uploads', table => {
            table.string('hash');
            table.integer('size');
        });
    }
};

const findUploadByHash = async (hash) => {
    return knex('uploads').where('hash', hash).first();
};

const insertUpload = async (hash, size) => {
    return knex('uploads').insert({ hash, size });
};

const closeDb = () => {
    return knex.destroy();
};

module.exports = { createTableIfNotExists, findUploadByHash, insertUpload, closeDb };
