// Importez les modules nécessaires
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Recipe = require('../models/recipeSchema'); 


mongoose.set('debug', true);

// Route pour récupérer toutes les recettes
router.get('/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    console.log(recipes);
    res.json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des recettes.' });
  }
});

// Route pour récupérer les recettes par catégorie
router.get('/recipes/:category', async (req, res) => {
  const category = req.params.category;
  
  try {
    const recipes = await Recipe.find({ category: category });
    res.json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des recettes par catégorie.' });
  }
});

// Route pour récupérer les détails d'une recette par son nom
router.get('/recipe/:name', async (req, res) => {
  const recipeName = req.params.name;
  
  try {
    const recipe = await Recipe.findOne({ name: recipeName });
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Recette non trouvée.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des détails de la recette.' });
  }
});

// Exportez le routeur
module.exports = router;
