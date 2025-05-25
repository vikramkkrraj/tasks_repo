const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// Sample CRUD endpoints shown here (Add more as needed)

// GET: Retrieve all recipes
router.get('/', async (req, res) => {
    const recipes = await Recipe.find();
    res.json(recipes);
});

// POST: Add new recipe
router.post('/add', async (req, res) => {
    const newRecipe = new Recipe(req.body);
    await newRecipe.save();
    res.send('Recipe added');
});

// PUT: Update a recipe by recipe_id
router.put('/update/:id', async (req, res) => {
    const result = await Recipe.updateOne({ recipe_id: parseInt(req.params.id) }, { $set: req.body });
    res.json(result);
});

// DELETE: Delete a recipe by recipe_id
router.delete('/delete/:id', async (req, res) => {
    const result = await Recipe.deleteOne({ recipe_id: parseInt(req.params.id) });
    res.json(result);
});

module.exports = router;