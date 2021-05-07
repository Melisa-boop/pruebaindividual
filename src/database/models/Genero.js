module.exports=function(sequelize,dataTypes){
    let alias ="Genero";

    let cols={
        id:{
            type:dataTypes.INTEGER, 
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:dataTypes.STRING,
        },
        ranking:{
            type:dataTypes.INTEGER,
        }


      
    };
    let config={
        tableName:'genres',
        timestamps:true,
        underscored: true

    }
    const Genero =sequelize.define(alias,cols,config);
    Genero.associate=function(models){

    Genero.hasMany(models.Movie, {
        as:"movies",
        foreignKey:"genre_id",
        timestamps:true,
        underscored:true

    }
    )};
    return Genero;
};
    
