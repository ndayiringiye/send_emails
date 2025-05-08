const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://ndayiringiyedavid120:MmnncOUEudTVTUzB@cluster0.wlsjl45.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log({
            message: "Database connected successfully",
            conn: conn.connection.host
        });
    } catch (error) {
        console.log({ message: "Database connection failed", error });
    }
};

module.exports = { connectDb };
