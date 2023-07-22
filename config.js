module.exports = {
    db: {
        client: 'sqlite3',
        connection: { filename: './data.db' },
        useNullAsDefault: true
    },
    server: {
        port: 3000
    },
    table: {
        name: 'uploads',
        fields: {
            id: 'id',
            hash: 'hash',
            size: 'size'
        }
    }
};
