import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';

const router = express.Router();

router.use(cors());
router.options('*', cors());

router.get('/:img', (req: Request, res: Response) => {
    res.sendFile(path.resolve(`public/images/${req.params.img}`));
});

export default router;
