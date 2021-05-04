'use strict';

const server = require('../src/server.js')

const superTest = require('supertest');
const mockServer = superTest(server.app)

describe('Bad Method & Route check', () => {
    it('404 on a bad route', async () => {
        let res = await mockServer.get('/cool')
        expect(res.status).toEqual(404)
    })

    it('404 on a bad method', async () => {
        let res = await mockServer.put('/food')
        expect(res.status).toEqual(404)
    })
})