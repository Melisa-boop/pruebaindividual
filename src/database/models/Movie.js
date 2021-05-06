

module.exports =function (sequelize,dataTypes){
    let alias = "Movie"//nombre del modelo que le cedi a models( la BBDD se llama notes)

    let cols={
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        title:{
            type:dataTypes.STRING,
        },

        rating:{
            type:dataTypes.DOUBLE
        },

        awards:{
            type:dataTypes.INTEGER
        },
        length:{
            type:dataTypes.INTEGER

        },
        genre_id:{
            type: dataTypes.INTEGER
        },
        release_date:{
            type:dataTypes.DATE
        }
  
    };
    let config={
        tableName:'movies',
        timestamps:true,
        underscored: true

    }
    const Movie =sequelize.define(alias,cols,config);
    Movie.associate=function(models){

    Movie.belongsToMany(models.Actor, {
        as:"actores",
        through:"actor_movie",
        foreignKey:"movie_id",
        otherkey:"actor_id",
        timestamps:false,
        underscored:true
    });
    Movie.belongsToMany(models.Genero,{
        as:"genero",
        foreignKey:"genre_id",
        timestamps:true,
        underscored:true
    }
    )};
    
    return Movie;
};