import { Router } from "express";
import db from '../db/index.js'

const router = Router();

router.get('/', (req, res) => {
    const items = db.prepare('SELECT * FROM items').all();
    res.json(items);
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const deleted = db.prepare('DELETE FROM items WHERE id = ?').run(id);
    res.json(deleted)
})

router.post('/', (req, res) => {
    const { name, amount = 1 } = req.body;

    const create = db
        .prepare('INSERT INTO items (name, amount) VALUES (?, ?)')
        .run(name.trim(), amount);

    res.json(create)
})

router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    const { bought } = req.body;
    
    const patch = db
        .prepare('UPDATE items SET bought = ? WHERE id = ?')
        .run(bought, id);

    res.json(patch)
})

router.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    const item = db
        .prepare('SELECT * FROM items WHERE id = ?')
        .get(id);
    if(!item) res.status(404).json({ error: "Nie znaleziono produktu" })
    res.json(item)
})

export default router;
