var Trade = require('../models/trade.model.js');

exports.create = function(req, res) {
    // Create and Save a new Note

      
    if(!req.body.content) {
        return res.status(400).send({message: "Note can not be empty"});
    }

    var trade = new Trade({title: req.body.title || "Untitled Note", content: req.body.content});

    trade.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Note."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.
    Trade.find(function(err, trades){
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while retrieving notes."});
        } else {
            res.send(trades);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single note with a noteId
    Trade.findById(req.params.tradeId, function(err, trade) {
        if(err) {
            console.log(err);
            if(err.kind === 'ObjectId') {
                return res.status(404).send({message: "Note not found with id " + req.params.tradeId});                
            }
            return res.status(500).send({message: "Error retrieving note with id " + req.params.tradeId});
        } 

        if(!trade) {
            return res.status(404).send({message: "Note not found with id " + req.params.tradeId});            
        }

        res.send(trade);
    });
};

exports.update = function(req, res) {
    // Update a note identified by the noteId in the request
     console.log("##########UPDATE#########")
    Trade.findById(req.params.tradeId, function(err, trade) {
        if(err) {
            console.log(err);
            if(err.kind === 'ObjectId') {
                return res.status(404).send({message: "Note not found with id " + req.params.trade});                
            }
            return res.status(500).send({message: "Error finding note with id " + req.params.trade});
        }

       

        if(!trade) {
            return res.status(404).send({message: "Note not found with id " + req.params.noteId});            
        }

        trade.title = req.body.title;
        trade.content = req.body.content;

        trade.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update note with id " + req.params.noteId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request
    Trade.findByIdAndRemove(req.params.tradeId, function(err, note) {
        if(err) {
            
            if(err.kind === 'ObjectId') {
                return res.status(404).send({message: "Note not found with id " + req.params.tradeId});                
            }
            return res.status(500).send({message: "Could not delete note with id " + req.params.tradeId});
        }

        if(!note) {
            return res.status(404).send({message: "Note not found with id " + req.params.tradeId});
        }

        res.send({message: "Note deleted successfully!"})
    });
};