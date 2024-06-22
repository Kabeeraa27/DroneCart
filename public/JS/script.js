document.addEventListener('DOMContentLoaded', function() {
    var toggles = document.querySelectorAll('.filter__toggle');

    toggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            var filterBlock = this.nextElementSibling;
            var icon = this.querySelector('.icon-plus');

            if (filterBlock.style.display === 'block') {
                filterBlock.style.display = 'none';
                icon.classList.remove('icon-minus');
                icon.classList.add('icon-plus');
            } else {
                filterBlock.style.display = 'block';
                icon.classList.remove('icon-plus');
                icon.classList.add('icon-minus');
            }
        });
    });
});


const products = [
    { name: "Product 1", category: "Batteries" },
    { name: "Product 2", category: "Propellers" },
    // Add more product objects as needed
];

// Function to filter products based on category
function filterProducts(category) {
    const filteredProducts = products.filter(product => product.category === category);
    displayProducts(filteredProducts);
}

// Function to display filtered products
function displayProducts(products) {
    const productSection = document.getElementById("productSection");
    productSection.innerHTML = ""; // Clear previous products

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("pro");
        productDiv.innerHTML = `
            <img src="../public/IMG/${product.name}.jpg" alt="Product Image">
            <div class="des">
                <span>${product.category}</span>
                <h5>${product.name}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>$78</h4>
                <a href="#"><i class="fas fa-shopping-cart cart"></i></a>
            </div>`;
        productSection.appendChild(productDiv);
    });
}

// Initial display of all products
displayProducts(products);

