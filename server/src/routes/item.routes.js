import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.json([{ id: 1, name: 'Jajka', ammount: 10, bought: false }]);
});

export default router;
