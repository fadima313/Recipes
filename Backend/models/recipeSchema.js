const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: String,
  url: String,
  image: String,
  name: String,
  description: String,
  author: String,
  ratings: Number, 
  ingredients: [String],
  steps: [String],
  nutrients: {
    kcal: String,
    fat: String,
    saturates: String,
    carbs: String,
    sugars: String,
    fibre: String,
    protein: String,
    salt: String,
  },
  times: {
    preparation: String,
    cooking: String,
  },
  serves: Number,
  difficult: String,
  vote_count: Number,
  subcategory: String,
  dish_type: String,
  maincategory: String,
},{ collection: 'Recette' });

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
