const request = require('supertest');
const { app } = require('../app');
const { StatusCodes } = require('http-status-codes');
const models = require('../src/models/sql/models');

const newUser = {
  name: 'Gabi Dal Silv',
  email: 'gabi.dalsilv@gmail.com',
  password: '123456',
};

describe('Tests the login endpoint', () => {
  afterAll((done) => {
    models.sequelize.close()
      .then(() => done());
  });

  it('Should not be able to sign in without an email', (done) => {
    return request(app)
      .post('/login')
      .send({ password: 'test123' })
      .expect(StatusCodes.BAD_REQUEST)
      .expect('Content-Type', /json/)
      .then((res) => {
        expect(res.body.message).toContain('Email field is required');
        done();
      });
  });

  it('Should not be able to sign in with an invalid email', (done) => {
    return request(app)
      .post('/login')
      .send({
          email: '@tests',
          password: 'test123',
        })
      .expect(StatusCodes.BAD_REQUEST)
      .expect('Content-Type', /json/)
      .then((res) => {
        expect(res.body.message).toContain('Email must be at a valid format');
        done();
      });
  });

  it('Should not be able to sign in without an password', (done) => {
    return request(app)
      .post('/login')
      .send({ email: 'trybeer@gmail.com' })
      .expect(StatusCodes.BAD_REQUEST)
      .expect('Content-Type', /json/)
      .then((res) => {
        expect(res.body.message).toContain('Password field is required');
        done();
      });
  });

  it('Should not be able to sign in with a valid email that is not registered', (done) => {
    return request(app)
      .post('/login')
      .send({
          email: 'testButIamSureThisEmailIsNotThere@test.com',
          password: 'test123',
        })
      .expect(StatusCodes.NOT_FOUND)
      .expect('Content-Type', /json/)
      .then((res) => {
        expect(res.body.message).toContain('Login failed. User not found');
        done();
      });
  });

  it('Should not be able to sign in with incorrect password', async (done) => {
    await request(app)
      .post('/user/register')
      .send(newUser);

    return request(app)
      .post('/login')
      .send({
          email: newUser.email,
          password: '123',
        })
      .expect(StatusCodes.UNAUTHORIZED)
      .expect('Content-Type', /json/)
      .then((res) => {
        expect(res.body.message).toContain('Login failed. Invalid credentials.');
        models.users.destroy({ where: { email: 'gabi.dalsilv@gmail.com' } })
          .then(() => done());
      });
  });

  it('Should be able to login successfully', async (done) => {
    await request(app)
      .post('/user/register')
      .send(newUser);

    return request(app)
      .post('/login')
      .send(newUser)
      .expect(StatusCodes.OK)
      .expect('Content-Type', /json/)
      .then((res) => {
        expect(typeof res.body.token).toBe('string');
        models.users.destroy({ where: { email: 'gabi.dalsilv@gmail.com' } })
          .then(() => done());
      });
  });
});
