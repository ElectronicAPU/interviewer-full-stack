import express from "express";
import { cors } from "./middleware/cors";
import { errorHandler } from "./middleware/error-handler";
import { notFound } from "./middleware/not-found";
import routes from "./routes/index.js";
import { requestTimestamp } from "./middleware/request-timestamp";

const app = express();

app.use(cors);
app.use(express.json());
app.use(requestTimestamp);
app.use(routes);
app.use(notFound);
app.use(errorHandler);

export default app;
