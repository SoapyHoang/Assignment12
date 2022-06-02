var recipe = {
    title: 'Guacamole',
    servings: 4,
    ingredients: [ "3 Avocados", "1 Lime", "1 Teaspoon Salt", "1/2 Cup Onion", 
                   "3 Tablespoons Cilantro", "2 Diced Tomatoes", 
                   "1 Teaspoon Garlic", "1 Pinch Ground Pepper"
                ],
    displayRecipe: function() {
        var msg = ""
        msg += this.title + '\n';
        msg += `Serves: ${this.servings} \n`;
        msg += `Ingredients:\n`
        for (item of this.ingredients) {
            msg += `- ${item}\n`
        }
        console.log(msg)
    }
}

recipe.displayRecipe()
