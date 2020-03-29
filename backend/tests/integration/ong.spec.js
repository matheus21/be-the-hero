const request = require('supertest')
const faker = require('faker/locale/pt_BR')
const app = require('../../src/app')
const connection = require('../../src/database/connection')
describe('ONG', () => {
    
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    })

    afterAll(async () => {
        await connection.destroy();
    })
    
    it('should be able to create a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name: faker.company.companyName(),
            email: faker.internet.email(),
            whatsapp: faker.helpers.replaceSymbols('###########'),
            city: faker.address.city(),
            uf: faker.address.stateAbbr()
        })

        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8);
    })
})