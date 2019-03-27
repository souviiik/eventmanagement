'use-strict'

const express = require('express');
const apiRoutes = express.Router();

const withAuth = require('./middleware');
//const userCtrl = require('./controller/user_ctrl');
const eventCtrl = require('./controller/event_ctrl');

/*apiRoutes.post('/add-user', userCtrl.addUser);
apiRoutes.post('/login', userCtrl.login);
apiRoutes.get('/logout', withAuth, userCtrl.logout);
apiRoutes.get('/profile', withAuth, userCtrl.profile);*/

apiRoutes.get('/events/:page', eventCtrl.getEvents);
apiRoutes.post('/events/add', eventCtrl.addEvents);
apiRoutes.get('/event/:id', eventCtrl.getEventById);
apiRoutes.put('/event/:id', eventCtrl.updateEventById);
apiRoutes.delete('/event/:id', eventCtrl.removeEventById);
apiRoutes.post('/event-bulk-delete', eventCtrl.bulkDeleteEvent);
apiRoutes.all('*', (req, res) => res.send(`Welcome to Event Management API`));

module.exports = apiRoutes;
