import { Router } from "express";
import db from '../db/index.js'
const router = Router();



router.get('/', (req, res) => {
    const items = db.prepare('SELECT * FROM items').all();
    res.json(items);
});


router.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    const item = items.find(i => i.id === id)
    if(!item) res.status(404).json({ error: "Nie znaleziono produktu" })
    res.json(item)
})

export default router;
