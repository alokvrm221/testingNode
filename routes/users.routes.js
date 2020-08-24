const users = require('../controllers/users.controller')

module.exports = ( app)=> {
    app.post('/api/v1/user', users.create);
    app.get('/api/v1/user/:id', users.getUser);
    app.post('/api/v1/users', users.getUsersList);
    app.put('/api/v1/user', users.update);
    app.get('/api/v1/user', users.search);
}
