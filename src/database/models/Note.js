

module.exports =function (sequelize,DataTypes){
    let alias = "Nota"//nombre del modelo que le cedi a models( la BBDD se llama notes)

    let cols={
        id_notes:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        title:{
            type:DataTypes.STRING
        },

        text:{
            type:DataTypes.STRING
        }
  
    };
    let config={
        tableName:'notas',
        timestamps:false
    };
    const Nota =sequelize.define(alias,cols,config);
    return Nota;
};