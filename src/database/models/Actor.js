module.exports =function (sequelize,DataTypes){
    let alias = "Actor"//nombre del modelo que le cedi a models( la BBDD se llama notes)

    let cols={
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        first_name:{
            type:DataTypes.STRING,
        },

        last_name:{
            type:DataTypes.STRING
        },

        rating:{
            type:DataTypes.DECIMAL
        },

        image: {
            type: DataTypes.STRING,
        },
        favourite_movie_id: {
            type: DataTypes.INTEGER,
        },
    };
    let config={
        tableName:'actors',
        timestamps:true,
        underscored: true

    }
    const Actor =sequelize.define(alias,cols,config);
    Actor.associate=function(models){

    Actor.belongsToMany(models.Movie, {
        as:"peliculas",
        through:"actor_movie",
        foreignKey:"actor_id",
        otherkey:"movie_id",
        timestamps:false,
        underscored:true
    }
    )};
    return Actor;
};