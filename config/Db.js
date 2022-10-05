const Sequelize = require("sequelize")

 const Dbconn = new Sequelize("movieTheater","root","",{
    dialect: "mysql"
})
module.exports = Dbconn;