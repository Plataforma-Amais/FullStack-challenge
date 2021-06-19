const request = require('supertest');
const { app } = require('../app');
const { StatusCodes } = require('http-status-codes');
const models = require('../src/models/sql/models');

const newUser = {
  name: 'Gabi Dal Silv',
  email: 'gabi.dalsilv@gmail.com',
  password: '123456',
};

describe('Tests the profile endpoint', () => {
  let session = null;
  beforeAll((done) => {
    return request(app)
      .post('/user/register')
      .send(newUser)
      .end((err, res) => {
        if (err) return done(err);
        session = res.body.token;
        return done();
      });
  });

  afterAll((done) => {
    models.users.destroy({ where: { email: 'gabi.dalsilv@gmail.com' } })
      .then(() => models.sequelize.close())
      .then(() => done());
  });

  it('Should not be able to update without a valid name', (done) => {
    return request(app)
      .put('/user/edit')
      .set({ authorization: session })
      .send({ })
      .expect(StatusCodes.BAD_REQUEST)
      .expect('Content-Type', /json/)
      .then((res) => {
        expect(res.body.message).toEqual('Name field is required.');
        done();
      });
  });

  it('Should not be able to update when name is an invalid format', (done) => {
    return request(app)
      .put('/user/edit')
      .set({ authorization: session })
      .send({  name: 'Adal' })
      .expect(StatusCodes.BAD_REQUEST)
      .then((res) => {
        expect(res.body.message).toContain('Name must be at least 12 characters');
        done();
      });
  });

  it('Should be able to update name successfully', (done) => {
    return request(app)
      .put('/user/edit')
      .set({ authorization: session })
      .send({  name: 'Erisberto Da Silva' })
      .expect(StatusCodes.OK)
      .then((res) => {
        expect(res.body.message).toEqual('Name updated successfully.');
        done();
      });
  });
});
