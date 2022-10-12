const Sequelize = require("sequelize")
const mysql =require("mysql2");

const sequelize=new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PASSWORD,{dialect:"mysql"})
sequelize.authenticate().then(()=>{
    console.log(`connect to node with mysql successful`);
}).catch((err)=>{console.log(err,'db err');})



module.exports=sequelize