import { Router } from 'express'


const router = Router();

router.get('/user', (res, req, next) => {
    res.json({"output":" this is user"})
})

export default router