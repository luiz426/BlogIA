import express from 'express';
import cors from 'cors';
import postsRouter from './routes/posts.ts';

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

app.use("/", postsRouter);

app.listen(PORT, () => {
    console.log(`Servidor de email rodando na porta ${PORT}`);
});