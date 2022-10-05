const RoomTable = require("../models/RoomTable")
const MovieTable = require("../models/MovieTable")
const TipsTable = require("../models/TipsTable")
 class Controller{
    static async migrations(){
        RoomTable.sync({ force: true });                          
;
        Controller.RelationshipRoomMovieTables();
        MovieTable.sync({ force: true });   
         Controller.RelationshipTipsMoviesTables();
         Controller.RelationshipRoomsTipsTables();     
        TipsTable.sync({ force: true });
       

     
    }
    static async RelationshipRoomMovieTables(){
        MovieTable.belongsTo(RoomTable,{
            constraint:true,
            allowNull:false
        })
        RoomTable.belongsTo(MovieTable,{
            constraint:true,
            allowNull:false
        })
    }
    static async RelationshipRoomsTipsTables(){
        TipsTable.belongsTo(RoomTable,{
            constraint:true,
            allowNull:false
        })
        RoomTable.belongsTo(TipsTable,{
            constraint:true,
            allowNull:false
        })
    }
    static async RelationshipTipsMoviesTables(){
        MovieTable.belongsTo(TipsTable,{
            constraint:true,
            allowNull:false
        })
        TipsTable.belongsTo(MovieTable,{
            constraint:true,
            allowNull: false
        })
    }
}
module.exports = Controller
