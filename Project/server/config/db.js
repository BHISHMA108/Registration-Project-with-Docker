// const mongoose = require('mongoose');

import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    }catch(err){
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
}

export default connectDB;


//💗💕This is only the main part
// const conenctDB = async ()=>{
//         const connection = await mongoose.connect(process.env.MONGO_URI);
// }
// module.exports = connectDB


// 💗💕"process.env.variable  here variable is the Variable from .env file"