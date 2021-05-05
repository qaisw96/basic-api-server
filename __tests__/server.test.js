'use strict';

const server = require('../src/server.js');

const superTest = require('supertest');
const mockServer = superTest(server.app)
const testObj1 = {"meal": "salad", "type": "vegetarian"}
const testObj2 = {"meal": "tona", "type": "fish"}

describe('Check REST status and Returned data', () =>{
    it('Create a record using POST', async () => {
        let resPost = await mockServer.post('/food').send(testObj1)
        resPost = await mockServer.post('/food').send(testObj2)

        expect(resPost.body.record).toEqual(testObj2)
        expect(resPost.status).toEqual(201)
        
    })

    it('Read a list of records using GET', async () => {
        let resGetAll = await mockServer.get('/food')
        
        expect(resGetAll.body[0].record).toEqual(testObj1)
        expect(resGetAll.body[1].record).toEqual(testObj2)
        expect(resGetAll.status).toEqual(200)

    })

    it('Read a record using GET', async () => {
        let resGetOne = await mockServer.get('/food/2')

        expect(resGetOne.body.record).toEqual(testObj2)
        expect(resGetOne.status).toEqual(200)
    })

    it('Update a record using PUT', async () => {
        const updatedObj = {"meal": "chicken", "type": "Meat"}
        let resUpdate = await mockServer.put('/food/1').send(updatedObj)

        expect(resUpdate.body.record).toEqual(updatedObj)
    } )

    it('Delete a record using DELETE', async () => {
        // test if route is exist
        let resDelete = await mockServer.delete('/food/2')
        expect(resDelete.body).toEqual(true)
        // test if route does not exist
        resDelete = await mockServer.delete('/food/22')
        expect(resDelete.body).toEqual(false)
        
    } )
})
