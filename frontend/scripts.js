document.addEventListener("DOMContentLoaded", function() {
    var materials_data = [
        {"name": "Paper", "recyclable": 1, "environmental_impact": 0.2, "biodegradable": 1},
        {"name": "Plastic", "recyclable": 1, "environmental_impact": 0, "biodegradable": 0},
        {"name": "Glass", "recyclable": 1, "environmental_impact": 0.5, "biodegradable": 0},
        {"name": "Aluminum", "recyclable": 1, "environmental_impact": 0.5, "biodegradable": 0},
        {"name": "Cotton", "recyclable": 1, "environmental_impact": 0.2, "biodegradable": 1},
        {"name": "Steel", "recyclable": 1, "environmental_impact": 0.5, "biodegradable": 0},
        {"name": "Wood", "recyclable": 1, "environmental_impact": 0.2, "biodegradable": 1},
        {"name": "Nylon", "recyclable": 1, "environmental_impact": 0, "biodegradable": 0},
        {"name": "Rubber", "recyclable": 1, "environmental_impact": 0, "biodegradable": 0},
        {"name": "Polyethylene", "recyclable": 1, "environmental_impact": 0, "biodegradable": 0},
        {"name": "Cardboard", "recyclable": 1, "environmental_impact": 0.5, "biodegradable": 1},
        {"name": "Styrofoam", "recyclable": 0, "environmental_impact": 0, "biodegradable": 0},
        {"name": "Polyester", "recyclable": 1, "environmental_impact": 0, "biodegradable": 0},
        {"name": "Silk", "recyclable": 0, "environmental_impact": 0.2, "biodegradable": 1},
        {"name": "Brick", "recyclable": 0, "environmental_impact": 0.5, "biodegradable": 1},
        {"name": "Tin", "recyclable": 1, "environmental_impact": 0.5, "biodegradable": 0},
        {"name": "Leather", "recyclable": 0, "environmental_impact": 0.5, "biodegradable": 1},
        {"name": "Concrete", "recyclable": 0, "environmental_impact": 0, "biodegradable": 0},
        {"name": "Ceramic", "recyclable": 1, "environmental_impact": 0.5, "biodegradable": 0},
        {"name": "Bamboo", "recyclable": 1, "environmental_impact": 0.2, "biodegradable": 1}
    ];

    var productCardsContainer = document.getElementById("productCards");

    // Create product cards dynamically
    materials_data.forEach(function(material) {
        var productCard = document.createElement("div");
        productCard.classList.add("productCard");

        var productImage = document.createElement("img");
        productImage.classList.add("productImage");
        productImage.src = "product_image.jpg"; // Add the actual image source here
        productImage.alt = material.name;

        var materialTitle = document.createElement("div");
        materialTitle.innerHTML = "<h4>Material: " + material.name + "</h4>";

        var ecoScoreText = document.createElement("div");
        ecoScoreText.classList.add("ecoScoreText");
        ecoScoreText.innerHTML = "<h3>Eco Score: " + calculateScore(material) + "</h3>";

        productCard.appendChild(productImage);
        productCard.appendChild(materialTitle); // Add material title to product card
        productCard.appendChild(ecoScoreText);
        productCardsContainer.appendChild(productCard);
    });

    // Function to calculate the eco score
    function calculateScore(material) {
        var recyclable = material.recyclable;
        var environmentalImpact = material.environmental_impact;
        var biodegradable = material.biodegradable;

        // Calculate individual material score
        var materialScore = (recyclable * 0.4) + (environmentalImpact * 0.4) + (biodegradable * 0.2);

        return materialScore.toFixed(2);
    }
});
