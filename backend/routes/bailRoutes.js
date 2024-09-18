const express = require('express');
const router = express.Router();
const Offense = require('../models/offense');

router.get('/:id', async (req, res) => {
    try {
        const offense = await Offense.findById(req.params.id);
        res.json(offense);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const offense = new Offense({
        name: req.body.name,
        penalCode: req.body.penalCode,
        bailEligibility: req.body.bailEligibility
    });
    try {
        const newOffense = await offense.save();
        res.status(201).json(newOffense);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
