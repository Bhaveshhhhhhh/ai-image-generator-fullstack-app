import express, { urlencoded } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import imageGeneratorRoutes from "./routes/imageGeneratorRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
// app.use(urlencoded({ extended: true }));
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/ai", imageGeneratorRoutes);

app.get("/", async (req, res) => {
  res.send("Hello from ai");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGO_URL);
    app.listen(process.env.PORT, () => {
      console.log(
        `Server is Working on PORT http://localhost:${process.env.PORT}/`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
