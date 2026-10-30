import { Router } from "express";

const router = Router();

let items = [
    { id: 1, name: 'Jajka', ammount: 10, bought: false },
    { id: 2, name: 'Mleko', ammount: 6, bought: false },
    { id: 3, name: 'Chleb', ammount: 9, bought: false },
    { id: 4, name: 'Mienso', ammount: 7, bought: false },
]

router.get('/', (req, res) => {
    res.json(items);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    const item = items.find(i => i.id === id)
    if(!item) res.status(404).json({ error: "Nie znaleziono produktu" })
    res.json(item)
})

export default router;
