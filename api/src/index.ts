import express from "express";
import cors from "cors";
import userRouter from "./routers/user";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(userRouter);

app.listen(port, () => {
    console.log("Server connected on port:", port);
});
