const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {todo} = require('./../models/todo');

const todos = [{
  text : 'todo1'
},{
  text : 'todo2'
}];


beforeEach((done) => {
  todo.remove({}).then(() => {
    return todo.insertMany(todos);
  }).then( () => done() );
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Test todo text';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        todo.find({text}).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
  });

  it('should not create todo with invalid body data', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e));
      });
  });
});

describe('GET /todos', () => {
  it('should return all todos', (done) => {
    request(app)
    .get('/todos')
    .expect(200)
    .expect((res) => {
      console.log(res);
      expect(res.body.todos.length).toBe(2)
    })
    .end(done)
  })

});
