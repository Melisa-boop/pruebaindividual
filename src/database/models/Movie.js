

module.exports =function (sequelize,DataTypes){
    let alias = "Movie"//nombre del modelo que le cedi a models( la BBDD se llama notes)

    let cols={
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        title:{
            type:DataTypes.STRING,
        },

        rating:{
            type:DataTypes.DECIMAL
        },

        awards:{
            type:DataTypes.INTEGER
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

    }
    )};
    return Movie;
};