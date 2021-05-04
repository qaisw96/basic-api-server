'use strict';

const server = require('../src/server.js')

const superTest = require('supertest');
const mockServer = superTest(server.app)

describe('Check REST status and Returned data', () =>{
    it('Create a record using POST', async () => {
        let resPost = await mockServer.post('/food').send({"meal": "salad", "type": "healthy"})

        expect(resPost.body.record.meal).toEqual('salad')
        expect(resPost.status).toEqual(201)
        

    })

    // it('Read a list of records using GET', async () => {
    //     let resPost = await mockServer.post('/food').send({"meal": "salad", "type": "healthy"}, {"meal": "tona", "type": "fish"})
    //     let res = await mockServer.get('/food')
    //     expect(res.body).toEqual([
    //         { id: 1, record: { meal: 'salad', type: 'healthy' } },
    //         { id: 2, record: { meal: 'tona', type: 'fish' } }
    //       ])
    // })

    // it('Read a record using GET', async () => {
    //     let res = await mockServer.get('/food/:id')
    //     console.log(res.body);
    //     res.params.id = 1
    //     expect(res.body[res.params.id ].record).toEqual({"meal": "salad", "type": "healthy"})
    //     expect(res.status).toEqual(200)

    // })


    // it('Update a record using PUT', async () => {
    //     let res = await mockServer.put('/food/:id').send({"mea4444455": "salad", "type": "healthy"})

    //     console.log("put", res.request);
    //     expect(res.body).toEqual({ "meal44444": "salad", "type": "healthy" })
    // } )
})
