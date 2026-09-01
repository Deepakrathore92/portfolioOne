import mongoose from 'mongoose';

let isConnected = false;

// Fallback in-memory storage in case MongoDB is not running locally
export const memoryDb = {
  contacts: [],
  projects: [],
  services: []
};

export const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;

  if (!mongoUri) {
    console.log('ℹ️  No MONGO_URI provided in environment. Operating with memory/seed persistence.');
    return false;
  }

  try {
    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = true;
    console.log(`✅ MongoDB Connected successfully: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.warn(`⚠️ MongoDB connection warning: ${error.message}. Running fallback mode with in-memory persistence.`);
    isConnected = false;
    return false;
  }
};

export const getDbStatus = () => {
  return {
    connected: isConnected || mongoose.connection.readyState === 1,
    readyState: mongoose.connection.readyState,
    mode: isConnected ? 'mongodb' : 'memory_fallback'
  };
};

export default connectDB;
