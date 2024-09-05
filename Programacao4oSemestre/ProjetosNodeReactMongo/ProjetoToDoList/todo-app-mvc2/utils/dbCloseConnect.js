import mongoose from 'mongoose';

const closeConnectionMongo = async () => {
    if (mongoose.connection.readyState === 1) {
      try {
        await mongoose.disconnect();
        console.log('Desconectado do MongoDB');
      } catch (error) {
        console.error('Erro ao desconectar do MongoDB:', error);
        throw error;
      }
    }
  };

export default closeConnectionMongo;