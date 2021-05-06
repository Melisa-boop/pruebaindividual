// Database
let db = require('../database/models/index');

module.exports={
    listadoActores: function(req, res) {
        db.Actor.findAll({
            include: { all: true }
        })
        .then((actors) => {
            return res.json({actors:actors})
        })
        .catch((error) => {
            return res.send(error)
        });
    },

search:function(req,res){//faltaria hacer la vista de search resoult// req.query.search(lo que el usuario busca)
    db.Actor.findAll({
        where:{
            first_name:req.query.search}//loq ue el usuario busca
        
        
    })
    .then(function(resultado){
       return  res.json({
            queryString:req.query.search,
            actores:resultado//recuperamos lo que el usuario busca
        })
    })
        .catch(function(e){
            console.log(e)
        
    })
},//editar un actor
update: function(req, res) {
    db.Actor.update({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        image:(req.file ? req.file.filename : req.body.image),
        rating:req.body.rating,
        favourite_movie_id:req.body.favourite_movie_id,
       

    },
    {
        where:{
            id:req.params.id
        }
    })
    .then(function(){
        return res.json({success:"se ha modificado al pelicula"})

    })  
},
// eliminar  un producto de la BBDD
delete: function(req, res) {
    db.Actor.destroy({
       
    },
    {
        where:{
            id:req.params.id
        }
    })
    .then(function(){
        return res.json({success:"se ha borrado al pelicula"});

    })

},
creacion: function(req,res){
    db.Actor.create({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        image:(req.file ? req.file.filename : req.body.image),
        rating:req.body.rating,
        favourite_movie_id:req.body.favourite_movie_id
    })

    .then (function (actor){
        return res.json({actor:actor})
    })
    },
}
