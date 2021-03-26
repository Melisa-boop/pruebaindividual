const db = require("../database/models");

let detailController = {
    detail: function(req, res){
        db.Nota.findByPk(req.params.id)
        .then(function(notas){
            res.render('detail', {notas:notas})
        })
    },
    editSave: function(req,res){
        db.Nota.update({
            id_notes: req.params.id,
            title: req.body.title,
            text: req.body.text
        },{
            where: {
                id_notes: req.params.id
            }
        })
        .then(function(){
            res.redirect('/')
        })
    }
}

module.exports = detailController;