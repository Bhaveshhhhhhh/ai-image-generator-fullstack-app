import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then((c) => {
      console.log(`Database Connected ${c.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;
