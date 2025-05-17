import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Teste de conexão com o servidor');
});

export default router;