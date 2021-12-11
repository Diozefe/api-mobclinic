import { Router } from 'express';

const router = Router();

router.post('/usuario/criar', (req, res)=>{
    return res.json({message:'Ainda não funciona, mas vai funcionar'});
});


export{ router }