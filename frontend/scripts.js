document.addEventListener("DOMContentLoaded", function() {
    var materials_data = [
        {"name": "Paper", "recyclable": 1, "environmental_impact": 0.2, "biodegradable": 1},
        {"name": "Plastic", "recyclable": 1, "environmental_impact": 0, "biodegradable": 0},
        {"name": "Wood", "recyclable": 1, "environmental_impact": 0.2, "biodegradable": 1},
        {"name": "Steel", "recyclable": 1, "environmental_impact": 0.5, "biodegradable": 0},
        {"name": "Cotton", "recyclable": 1, "environmental_impact": 0.2, "biodegradable": 1},
        {"name": "Brick", "recyclable": 0, "environmental_impact": 0.5, "biodegradable": 1},
        {"name": "Lens", "recyclable": 1, "environmental_impact": 0.5, "biodegradable": 0},
        {"name": "Honey", "recyclable": 1, "environmental_impact": 0.2, "biodegradable": 1},
        {"name": "Leather", "recyclable": 0, "environmental_impact": 0.5, "biodegradable": 1}
        // Add more materials data as needed
    ];

    var products_data = [
        {"name": "Notepad", "composition": [
            {"material": "Paper", "quantity": 50},
            {"material": "Plastic", "quantity": 1}
        ]},
        {"name": "Toothbrush", "composition": [
            {"material": "Plastic", "quantity": 1}
        ]},
        {"name": "Clothing", "composition": [
            {"material": "Cotton", "quantity": 80}
        ]},
        {"name": "Paper containers with plastic lid", "composition": [
            {"material": "Paper", "quantity": 70},
            {"material": "Plastic", "quantity": 30}
        ]},
        {"name": "Wooden table", "composition": [
            {"material": "Wood", "quantity": 100}
        ]},
        {"name": "Utensils", "composition": [
            {"material": "Steel", "quantity": 90}
        ]},
        {"name": "Lens", "composition": [
            {"material": "Lens", "quantity": 100}
        ]},
        {"name": "Coffee cups (use and throw)", "composition": [
            {"material": "Paper", "quantity": 80},
            {"material": "Plastic", "quantity": 20}
        ]},
        {"name": "Honey jar filled with honey", "composition": [
            {"material": "Glass", "quantity": 70},
            {"material": "Honey", "quantity": 30}
        ]},
        {"name": "Cotton bedsheets", "composition": [
            {"material": "Cotton", "quantity": 100}
        ]},
        {"name": "Steel spoon", "composition": [
            {"material": "Steel", "quantity": 100}
        ]},
        {"name": "Leather Belt", "composition": [
            {"material": "Leather", "quantity": 80}
        ]}
        // Add more products data as needed
    ];

    var productCardsContainer = document.getElementById("productCards");

    // Iterate over each product
    products_data.forEach(function(product) {
        var productCard = document.createElement("div");
        productCard.className = "productCard";
        productCard.style.borderRadius = "12px";
        productCard.style.marginBottom = "20px";
        productCard.style.padding = "20px";

        var productName = document.createElement("h2");
        productName.textContent = product.name;

        var totalCredits = 0;
        var rewardsList = [];

        // Calculate the total credits and rewards for the product
        product.composition.forEach(function(item) {
            var material = materials_data.find(function(material) {
                return material.name === item.material;
            });
            if (material) {
                var materialScore = calculateScore(material);
                totalCredits += calculateCredits(materialScore);
                rewardsList = rewardsList.concat(determineRewards(materialScore));
            }
        });

        var credits = document.createElement("div");
        credits.className = "credits";
        credits.textContent = "Credits: " + totalCredits;

        var rewards = document.createElement("div");
        rewards.className = "rewards";
        rewards.textContent = "Rewards: " + rewardsList.join(", ");

        productCard.appendChild(productName);
        productCard.appendChild(credits);
        productCard.appendChild(rewards);

        productCardsContainer.appendChild(productCard);
    });

    // Function to calculate the eco score of a material
    function calculateScore(material) {
        var recyclable = material.recyclable;
        var environmentalImpact = material.environmental_impact;
        var biodegradable = material.biodegradable;

        // Calculate individual material score
        var materialScore = (recyclable * 0.4) + (environmentalImpact * 0.4) + (biodegradable * 0.2);

        return materialScore;
    }

    // Function to calculate credits based on the eco score
    function calculateCredits(ecoScore) {
        if (ecoScore >= 0.8) {
            return 3;
        } else if (ecoScore >= 0.6) {
            return 2;
        } else if (ecoScore >= 0.4) {
            return 1;
        } else {
            return 0;
        }
    }

    // Function to determine rewards based on the eco score
    function determineRewards(ecoScore) {
        if (ecoScore >= 0.8) {
            return ["Plant 3 seeds", "Clean the water"];
        } else if (ecoScore >= 0.6) {
            return ["Clean house"];
        } else if(ecoScore >= 0.4) {
            return ["Plant 1 seed"];
        } else {
            return["No rewards."]
        }
    }
});
