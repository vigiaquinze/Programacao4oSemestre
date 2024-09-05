import mongoose from 'mongoose';

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
    throw new Error("Database não listado no arquivo .env");
}

const connectMongo = async()=>{
    if (mongoose.connection.readyState>0) {
        return;
    } else{
        mongoose.connect(databaseUrl).then("MongoDB conectado.").catch(err=>console.error(err));
    }
}

export default connectMongo;