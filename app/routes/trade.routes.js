module.exports = function(app) {

    var trade = require('../controllers/trade.controller.js');

    // Create a new Note
    app.post('/trade', trade.create);

    // Retrieve all Notes
    app.get('/trade', trade.findAll);

    // Retrieve a single Note with noteId
    app.get('/trade/:tradeId', trade.findOne);

    // Update a Note with noteId
    app.put('/tradeChange/:trade', trade.update);

    // Delete a Note with noteId
    app.delete('/tradeDelete/:trade', trade.delete);
}