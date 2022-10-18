import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const entering = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
    })
    console.log(`Mongodb connected ${entering.connection.host}`);
  }
  catch (error) {
    console.log(`ERROR: ${error.message}`);
    process.exit(1);
  }
}

export default connectDB;