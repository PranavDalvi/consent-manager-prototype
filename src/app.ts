import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/health", (_req, res) => {
	res.json({status: "ok"})
});

export default app;