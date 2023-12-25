import expres from "express";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js"
import userRoute from "./routes/user.route.js"
dotenv.config();

connectDB();

const app = expres();

app.use(cors());
app.use(expres.json());
app.use(morgan("dev"));


app.use("/api/auth/",userRoute)

const port = process.env.port || 8080;

app.listen(port, () => {
  console.warn(`server running on ${port}`.bgGreen.white);
});
