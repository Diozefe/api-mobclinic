import * as express from 'express';
import { router } from '../routes/routes';

const application = express();

//Middleware de serialização
application.use(express.urlencoded({extended:true}));
application.use(express.json());

//Adicionando rotas na aplicação
application.use(router);

export{ application };