const mongoose = require("mongoose");

const connrctToDB = async ()=>{

    const connect = await mongoose.connect(process.env.MONGO_URL,{
        dbName:process.env.DB_NAME,
        useNewUrlParser: true,
        useCreateIndex:true,
        useUnifiedTopology:true,
        useFindAndModify:false
    });
    console.log(`MongoDB connected : ${connect.connection.host}`);
};

module.exports = connrctToDB ; 