 const densities = {
        "all purpose flour": 125, "bread flour": 127, "water": 236, "milk": 240, "chicken broth": 240,
        "granulated sugar": 198, "salt": 6, "yeast": 3, "olive oil": 216, "butter": 226, "ricotta cheese": 240,
        "mozzarella": 112, "honey": 340, "garlic powder": 3, "onion powder": 3,
        "italian seasonings": 2, "vanilla extract": 5, "baking soda": 6, "cream of tartar": 3, "baking powder": 4,
        "vegetable oil": 192, "powdered sugar": 120, "lemon juice": 240, "rice vinegar": 240, "brown sugar": 208, "fish sauce": 240,
        "lime juice": 240, "soy sauce": 254, "red wine vinegar": 240, "corn syrup": 368, "black pepper": 2.5, "sesame oil" :218,
        "chili garlic sauce": 230
    };
    const teaspoonIngredients = ["salt", "yeast", "baking powder", "baking soda", "cream of tartar", "vanilla extract", "italian seasonings", "garlic powder", "onion powder", "black pepper"];

    const recipes = [
        {
            id: "melt-detroit", type: "pizza", category: "Pizza", name: "Melt Detroit-Style", desc: "70% Hydration, 40% Poolish airy crust.", baseArea: 80,
            ingredients: [
                { name: "Bread flour (Poolish)", val: 132 }, { name: "Water (Poolish)", val: 132, isLiquid: true },
                { name: "Instant yeast (Poolish)", val: 1.0 }, { name: "Bread flour (Final)", val: 198 },
                { name: "Water (Final)", val: 99, isLiquid: true }, { name: "Salt", val: 8.25 },
                { name: "Granulated sugar", val: 8.25 }, { name: "Olive oil", val: 8.25, isLiquid: true }, { name: "Instant yeast (Final)", val: 1.0 }
            ],
            method: "1. Poolish: Mix the poolish flour, water, and 1g yeast. Cover and rest 8-12 hrs at room temp.\n2. Mixing: Combine poolish with final flour, water, salt, sugar, and remaining yeast. Mix until combined, then add oil. Knead until smooth.\n3. First Rest: Place dough in a heavily oiled Detroit pan. Cover and rest 1 hr.\n4. Shaping: Dimple dough toward edges. If it shrinks, rest 15m and repeat until it fills corners. Proof 1.5-2 hrs until very puffy.\n5. Bake: Parbake at 450°F for 7 mins. Add cheese to the very edge, then toppings. Bake at 500°F for 12-15 mins."
        },
        {
            id: "avantis-bread", type: "standard", category: "Breads", name: "Normal Avanti's Bread", desc: "Sweet and soft white bread.", linkTo: "calzone", linkText: "Use for Calzones",
            ingredients: [
                { name: "Water", val: 354, isLiquid: true }, { name: "Egg", val: 2, isQty: true }, { name: "olive oil", val: 20.25, isLiquid: true },
                { name: "Salt", val: 9 }, { name: "All purpose flour", val: 625 }, { name: "Granulated sugar", val: 132 }, { name: "Instant yeast", val: 7 }
            ],
            method: "1. Combine water, eggs, oil, salt, flour, sugar, and yeast. Knead for 10 mins (or use bread machine dough cycle).\n2. First Rise: Place in a greased bowl, cover, and let rise in a warm spot until doubled (approx 90 mins).\n3. Shaping: Punch down and divide into loaves. Place in greased loaf pans.\n4. Second Rise: Cover and let rise for 45-60 mins.\n5. Bake: Preheat to 350°F. Bake for 25-30 mins or until the tops are golden brown."
        },
        {
            id: "calzone", type: "standard", category: "Pork", name: "Ricotta Calzones", desc: "Filling for Avanti's dough.", linkTo: "avantis-bread", linkText: "View Bread Dough",
            ingredients: [
                { name: "Ricotta cheese", val: 454 }, { name: "Mozzarella", val: 224 }, { name: "Egg", val: 1, isQty: true },
                { name: "Italian seasonings", val: 12 }, { name: "Garlic powder", val: 9 }, { name: "Onion powder", val: 9 }
            ],
            method: "1. Filling: In a bowl, mix ricotta, mozzarella, egg, and seasonings until smooth.\n2. Prep: Using a batch of Avanti's dough, roll out circles roughly 8 inches wide.\n3. Assembly: Place 1/2 cup of filling on one side. Fold over and crimp edges tightly with a fork.\n4. Bake: Brush with egg wash if desired. Bake at 375°F for 20-25 mins until golden and crisp."
        },
        {
            id: "dominos-style", type: "pizza", category: "Pizza", name: "Dominos Style Hand-Tossed", desc: "Soft dough, buttery garlic crust.", baseArea: 452,
            ingredients: [
                { name: "Bread flour", val: 750 }, { name: "granulated sugar", val: 24 }, { name: "Instant yeast", val: 13 },
                { name: "Salt", val: 18 }, { name: "Water", val: 300, isLiquid: true }, { name: "Milk", val: 245, isLiquid: true },
                { name: "Olive oil", val: 40, isLiquid: true }
            ],
            method: "1. Mix: Combine dry ingredients. Mix warm water and milk (110°F), then add to dry with oil. Knead 8 mins.\n2. Proof: Let rise in a warm place for 90 mins.\n3. Prep: Divide into 4 balls. Stretch on a floured surface.\n4. Parbake: Bake at 450°F for 4 mins.\n5. Final: Add sauce/toppings. Brush edges with garlic butter. Bake at 450°F for 8-10 mins until bubbly."
        },
        {
            id: "tavern-style", type: "pizza", category: "Pizza", name: "Chicago Tavern Style", desc: "Thin, crispy 24-hr cold ferment.", baseArea: 226,
            ingredients: [
                { name: "Bread flour", val: 450 }, { name: "Butter (Cold bits)", val: 60 }, { name: "Salt", val: 9 },
                { name: "Instant yeast", val: 4 }, { name: "Water", val: 180, isLiquid: true }, { name: "Granulated sugar", val: 9 }
            ],
            method: "1. Mix: Pulse flour, salt, yeast, and sugar. Cut in cold butter bits until it looks like meal.\n2. Combine: Add ice water and mix until a very stiff dough forms. Knead 2 mins.\n3. Ferment: Place in a container and fridge for 24-48 hours.\n4. Rolling: Roll out paper-thin using a rolling pin. Place on a pizza screen.\n5. Cure: Let the rolled dough sit at room temp for 2 hours to dry out. Bake at 550°F until dark golden and crispy."
        },
        {
            id: "sugar-cookies", type: "standard", category: "Dessert", name: "Press Sugar Cookies", desc: "Grandma Grabow's pressed sugar cookies.",
            ingredients: [
                { name: "Butter", val: 227 }, { name: "Vegetable oil", val: 192, isLiquid: true }, { name: "Granulated sugar", val: 198 },
                { name: "Powdered sugar", val: 120 }, { name: "Egg", val: 1, isQty: true }, { name: "Vanilla extract", val: 5 },
                { name: "Salt", val: 6 }, { name: "Baking soda", val: 6 }, { name: "Cream of tartar", val: 3 }, { name: "All purpose flour", val: 500 }
            ],
            method: "1. Creaming: Beat butter, oil, and both sugars until very fluffy. Add egg and vanilla.\n2. Dry: Whisk salt, soda, tartar, and flour. Gradually add to wet mixture.\n3. Shaping: Roll into 1-inch balls. Place on ungreased sheet.\n4. Press: Dip a flat-bottomed glass in sugar and press balls to 1/4 inch thick.\n5. Bake: Bake at 375°F for 8-10 mins. Cool on sheet for 2 mins before moving."
        },
        {
            id: "chicken-dumpling", type: "standard", category: "Soups", name: "Chicken & Dumpling", desc: "Southern style broth with hand-rolled dough.",
            ingredients: [
                { name: "Chicken broth", val: 1440, isLiquid: true },{name: "Celery stick", val: 2, isQty: true},{name: "Onion", val: 1/2, isQty: true}, 
                { name: "Shredded chicken", val: 454, isChicken: true }, { name: "All purpose flour", val: 375 },
                { name: "Baking powder", val: 12 }, { name: "Salt", val: 6 }, { name: "Milk", val: 270, isLiquid: true }
            ],
            method: "1. Base: Bring broth and chicken to a rolling boil.\n2. Dough: Mix flour, baking powder, and salt. Cut in shortening. Stir in milk to form a ball.\n3. Roll: Heavily flour a surface. Roll dough extremely thin (1/8 inch). Cut into 1-inch strips.\n4. Cook: Drop strips into boiling broth. Reduce heat to low. Cover and simmer 20 mins without stirring."
        },
        {
            id: "grandmas-pancakes", type: "standard", category: "Breakfast", name: "Pancakes", desc: "Grandma Widener's pancake recipe.",
            ingredients: [
                {name: "All purpose flour", val: 156.25},{name: "Baking powder", val: 12}, {name: "Granulated sugar", val: 12},
                {name: "Salt", val: 3},{name: "Egg", val: 1, isQty: true},{name: "Milk", val: 240, isLiquid: true},
                {name: "Vegetable oil", val: 24, isLiquid: true},{name: "Vanilla extract", val: 5}
            ],
            method: "1. Combine flour, baking powder, sugar, and salt in a bowl.\n2. Beat egg and milk together. Add oil and vanilla extractand mix.\n3. Combine the wet ingredients with the dry ingredients. Be careful not to over mix, it is ok if it is a bit lumpy.\n4. To cook, pour batter onto a buttered hot griddle or pan. Cook until bubbles form, then flip."
        },
        {
            id: "banana-bread", type: "standard", category: "Breakfast", name: "Banana Bread", desc: "Mom's banana bread recipe", ingredients:[
                {name: "Butter", val: 113}, {name: "Granulated sugar", val: 198},{name: "egg", val: 2, isQty: true},
                {name: "Ripe banana", val: 3, isQty: true}, {name: "Vanilla extract", val: 5},{name: "All purpose flour", val: 250},
                {name: "Baking soda", val: 6}, {name: "Salt", val: 3} 
            ],
            method: "1. Preheat oven to 350°F (175°C). Grease a 9x5 inch loaf pan.\n2. In a large bowl, cream together the butter, sugar, eggs, and bananas until light and fluffy.\n3. Add the rest of the ingredients(flour, baking soda, salt, vanilla) and mix until incorperated.\n4. Pour batter into the prepared loaf pan. Bake for 55-60 minutes."
        },
        {
            id: "waffles", type: "standard", category: "Breakfast", name: "Waffles", desc: "Just waffles", ingredients:[
                {name: "All purpose flour", val: 250}, {name: "Baking powder", val: 16}, {name: "Granulated sugar", val: 25},
                {name: "Salt", val: 6}, {name: "Egg", val: 2, isQty: true}, {name: "Milk", val: 360, isLiquid: true},
                {name: "Butter", val: 76}, {name: "Vanilla extract", val: 5}
            ],
            method: "1. Preheat waffle iron.\n2. In a large bowl, whisk together flour, baking powder, sugar, and salt.\n3. In another bowl, beat eggs and then add warm milk, softened butter, and vanilla extract.\n4. Combine wet and dry ingredients until just mixed.\n5. Pour batter onto the preheated waffle iron and cook until golden brown."
        },
        {
            id: "fresh-lemonade", type: "standard", category: "Drinks", name: "Fresh Lemonade", desc: "Classic refreshing lemonade", ingredients:[
                {name: "Lemon juice", val: 240, isLiquid: true}, {name: "Granulated sugar", val: 198},
                {name: "Water", val: 708, isLiquid: true}
            ],
            method: "1. In a sauce pan, heat your sugar and an equal part of water until sugar is dissolved and remove from heat.\n2. Add the sugar water to the lemon juice and the remaining water(more water might be required depending on the strength of the lemon juice).\n3. Serve over ice."
        },
        {
            id: "spring-roll-bowls", type: "standard", category: "Chicken", name: "Spring Roll Bowl Noodles", desc: "Deconstructed spring rolls in a bowl", linkTo: "korean-chicken-for-spring-rolls", linkText: "View Korean Chicken Recipe", ingredients:[
                {name: "Garlic clove", val: 3, isQty: true}, {name: "Rice vinegar", val: 30, isLiquid: true},{name: "Brown sugar", val: 52},
                {name: "Fish sauce", val: 30, isLiquid: true}, {name: "Lime juice", val: 80, isLiquid: true},{name: "Vegetable oil", val: 64, isLiquid: true}
            ],
            method: "1. Blend all of the ingredients together until smooth.\n2. Bring water to a boil and cook 7oz of rice noodles for 2 minutes and drain. \n3. Add sauce to the noodles and serve in bowls with sliced carrots, cucumber and chicken"
        },
        {
            id: "chicken-fajitas", type: "standard", category: "Chicken", name: "Chicken Fajitas", desc: "Classic chicken fajitas", ingredients:[
                {name: "Chicken thigh", val: 681, isChicken: true}, {name: "Bell pepper", val: 2, isQty: true},{name: "Onion", val: 1, isQty: true},
                {name: "Soy sauce", val: 64, isLiquid: true}, {name: "Red wine vinegar", val: 60, isLiquid: true},{name: "Corn syrup", val: 23},
                {name: "Vegetable oil", val: 12, isLiquid: true}, {name: "Black pepper", val: 1}
            ],
            method: "1. In a bowl, mix soy sauce, red wine vinegar, corn syrup, vegetable oil, and black pepper to create a marinade.\n2. Marinate the chicken for at least 30 minutes but ideally a few hours.\n3. Heat a skillet over medium-high heat and cook the chicken until fully cooked, or cook on grill for 5-7 minutes, the chicken does not need to be fully cooked at this stage.\n4. Remove and cut the chicken into strips. \n5. Add the bell peppers and onions to the skillet and sauté until tender, add back the chicken and cook until chicken reaches 165°F. Serve with tortillas."
        },
        {
            id: "korean-chicken-for-spring-rolls", type: "standard", category: "Chicken", name: "Chicken for Spring Roll Bowls", desc: "Korean chicken filling for spring rolls", linkTo: "spring-roll-bowls", linkText: "View Spring Roll Bowl Noodles Recipe", ingredients:[
                {name: "Chicken thigh", val: 681, isChicken: true}, {name: "Soy sauce", val: 40, isLiquid: true},{name: "Brown sugar", val: 26},
                {name: "Sesame oil", val: 20, isLiquid: true}, {name: "Chili garlic sauce", val: 14.375, isLiquid: true},{name: "Olive oil", val: 9}
            ],
            method: "1. In a bowl, mix soy sauce, brown sugar, sesame oil, chili garlic sauce, salt and pepper to create a marinade.\n2. Marinate the chicken for at least 1 hour but ideally overnight.\n3. Heat a skillet over medium-high heat, add the olive oil and cook the chicken for 3-5 minutes until fully cooked.\n4. Remove and cut the chicken into strips and serve with spring roll bowl noodles."
        },
        {
            id: "focaccia", type: "pizza", category: "Breads", name: "Focaccia", desc: "80% Hydration, 50% Poolish airy crust.", baseArea: 106,
            ingredients: [
                { name: "Bread flour (Poolish)", val: 175 }, { name: "Water (Poolish)", val: 175, isLiquid: true },
                { name: "Instant yeast (Poolish)", val: 1.3 }, { name: "Honey", val: 5 }, { name: "Bread flour (Final)", val: 200 },
                { name: "Water (Final)", val: 130, isLiquid: true }, { name: "Salt", val: 11 },
                { name: "Honey", val: 15 }, { name: "Olive oil", val: 11, isLiquid: true }, { name: "Instant yeast (Final)", val: 1.3 }
            ],
            method: "1. Poolish: Mix the poolish flour, water, and yeast. Cover and rest 8-12 hrs at room temp.\n2. Mixing: Combine poolish with final flour, water, salt, sugar, and remaining yeast. Mix until combined, then add oil. Mix until smooth.\n3. First Rest: Place dough in a heavily oiled Detroit pan. Cover and rest 1 hr.\n4. Shaping: Dimple dough toward edges. If it shrinks, rest 15m and repeat until it fills corners. Proof 1.5-2 hrs until very puffy.\n5. Add toppings if desired and bake at 425°F for (X) mins."
        }
    ];