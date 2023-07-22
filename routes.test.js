const request = require('supertest');
const express = require('express');
const routes = require('./routes'); // Make sure this path is correct
const app = express();
const { closeDb } = require('./db');
const db = require('./db');

app.use('/', routes);
let server;

beforeAll(async () => {
    server = app.listen(); // Start the server
    await db.createTableIfNotExists(); // Setup the database
});

afterAll(done => {
    server.close(() => {
        closeDb().then(done); // Close the database connection after server
    });
});

describe('POST /upload', () => {
    it('responds with json', async () => {
        const mockFile = Buffer.from('This is a mock file');

        const response = await request(app)
            .post('/upload')
            .attach('file', mockFile, 'mockFile.txt');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('hash');
        expect(response.body).toHaveProperty('size');
        expect(response.body.hash).toBe("e1cb5d5a40dc2a063fedd32c047e270328790761");
        expect(response.body.size).toBe(19);
    });
});

