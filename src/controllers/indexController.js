const db = require('../database/models');

let indexController={
    index:function(req,res){
        db.Nota.findAll()//busco todas las notas de  BBDD y la muestro en la vista
        .then(function(notas){
            return res.render('index',{notas:notas})
        })
       
    },

    create: function(req,res){
        db.Nota.create({
            title:req.body.title,
            text:req.body.text
        })

        .then (function (notas){
            res.redirect('/')
        })
        },
    
    delete: function(req, res){
        db.Nota.destroy({
            where: {
                id_notes: req.params.id
            }
        })
        .then(function(notas){
            res.redirect('/')
        })
    }
}

module.exports = indexController;
        
