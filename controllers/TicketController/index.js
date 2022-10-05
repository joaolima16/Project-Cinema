const MovieTable = require("../../models/MovieTable");
const RoomTable = require("../../models/RoomTable")
class TicketController {
  static async CreateTicket(req, res) {
    const { MovieName, duration, ticket, sinopse, hour } = req.body;
    const id_room = req.params;
    try { 
    const RoomCapacity	 = await RoomTable.findOne({ where: id_room });
    if(RoomCapacity <= 0){
        return console.log("Não é possível adicionar o filme")
    }
      const Movie = await MovieTable.create({
        Name: MovieName,
        Duration: duration,
        Ticket: ticket,
        Sinopse: sinopse,
        Hour: hour,
        roomId: id_room,
      });
      const IndexRoom = await RoomTable.findOne({where:id_room});
      const Value = IndexRoom.RoomCapacity;
      const NewValue = Value - ticket;
      RoomTable.update({RoomCapacity:NewValue},{where:id_room});

    } catch (ex) {
      console.log(ex.message);
    }
}
}
module.exports = TicketController;
