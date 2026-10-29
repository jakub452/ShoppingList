import express from 'express'
import cors from 'cors'
import itemRouter from './routes/item.routes.js';


const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/items', itemRouter);

export default app
