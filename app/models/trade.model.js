var mongoose = require('mongoose');

var TradeSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', TradeSchema);