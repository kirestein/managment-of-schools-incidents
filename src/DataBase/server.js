import express from 'express';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use(cors())

app.use('/api', createProxyMiddleware({ 
    target: 'https://jungle-solar-crystal.glitch.me', // aqui vai o endereço do servidor que você quer acessar
    changeOrigin: true,
    pathRewrite: {
        '^/api': '', // reescreve o caminho para remover o '/api'
    },
}));

console.log('rodando');
console.log(app.target);
app.listen(3000);