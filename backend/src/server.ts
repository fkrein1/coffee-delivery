import express from 'express';
import 'express-async-errors';
import { errorMiddleware } from './errors/errorMiddelware';
import routes from './routes';

const PORT = process.env.PORT || 3008;

const app = express();
app.use(express.json());

app.use(routes);
app.use(errorMiddleware);
app.listen(PORT, () => console.log(`Running on Port: ${PORT}`));