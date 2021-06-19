const request = require('supertest');
const { app } = require('../app');
const { StatusCodes } = require('http-status-codes');
const models = require('../src/models/sql/models');

const newUser = {
  name: 'Gabi Dal Silv',
  email: 'gabi.dalsilv@gmail.com',
  password: '123456',
};

describe('Test the register endpoint', () => {
  afterAll((done) => {
    models.sequelize.close()
      .then(() => done());
  });

  it('Should not be able to register without a name', (done) => {
    // expect.assertions(2);
    return request(app)
      .post('/user/register')
      .send({
        email: newUser.email,
        password: newUser.password,
      })
      .expect(StatusCodes.BAD_REQUEST)
      .expect('Content-Type', /json/)
      .then((res) => {
        expect(res.body.message).toContain('Name field is required.');
        done();
      });
  });

  it('Should not be able to register without an email', (done) => {
    // expect.assertions(2);
    return request(app)
      .post('/user/register')
      .send({
        name: newUser.name,
        password: newUser.password,
      })
      .expect(StatusCodes.BAD_REQUEST)
      .expect('Content-Type', /json/)
      .then((res) => {
        expect(res.body.message).toContain('Email field is required.');
        done();
      });
  });

  it('Should not be able to register with invalid email', (done) => {
    // expect.assertions(2);
    return request(app)
      .post('/user/register')
      .send({
        name: newUser.name,
        email: 'invalid.email',
        password: newUser.password,
      })
      .expect(StatusCodes.BAD_REQUEST)
      .expect('Content-Type', /json/)
      .then((res) => {
        expect(res.body.message).toContain('Email must be at a valid format.');
        done();
      });
  });

  it('Should not be able to register without a password', (done) => {
    // expect.assertions(2);
    return request(app)
      .post('/user/register')
      .send({
        name: newUser.name,
        email: newUser.email,
      })
      .expect(StatusCodes.BAD_REQUEST)
      .expect('Content-Type', /json/)
      .then((res) => {
        expect(res.body.message).toContain('Password field is required.');
        done();
      });
  });

  it('Should be able to register successfully', (done) => {
    // expect.assertions(2);
    return request(app)
      .post('/user/register')
      .send(newUser)
      .expect(StatusCodes.CREATED)
      .then((res) => {
        expect(res.body.email).toEqual(newUser.email);
        done();
      });
    });

  it('Should not be able to register with an email already registered', (done) => {
    // expect.assertions(3);
    return request(app)
      .post('/user/register')
      .send(newUser)
      .expect(StatusCodes.BAD_REQUEST)
      .expect('Content-Type', /json/)
      .then((res) => {
        models.users.destroy({ where: { email: 'gabi.dalsilv@gmail.com' } })
          .then(() => {
            expect(res.body.message).toContain('This email is already in use.');
            return done();
          })
      });
  });

  it('Client created should have role "client"', (done) => {
    // expect.assertions(2);
    return request(app)
      .post('/user/register')
      .send({ ...newUser, isVendor: false })
      .expect(StatusCodes.CREATED)
      .expect('Content-Type', /json/)
      .then((res) => {
        models.users.destroy({ where: { email: 'gabi.dalsilv@gmail.com' } })
          .then(() => {
            expect(res.body.role).toEqual('client');
            return done();
          });
      });
  });

  it('Should be administrator when sign in successfully', (done) => {
    // expect.assertions(2);
    return request(app)
      .post('/user/register')
      .send({ ...newUser, isVendor: true })
      .expect(StatusCodes.CREATED)
      .expect('Content-Type', /json/)
      .then((res) => {
        models.users.destroy({ where: { email: 'gabi.dalsilv@gmail.com' } })
          .then(() => {
            expect(res.body.role).toEqual('administrator');
            return done();
          });
      });
  });
});
