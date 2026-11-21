
const dishes = [
    { name: "Shukto", category: "Vegetarian", type: "veg", price: 160, description: "A traditional Bengali mixed vegetable dish with a delicate bitter-sweet flavour.", image: "shukto.jpg" },
    { name: "Aloo Posto", category: "Vegetarian", type: "veg", price: 140, description: "Potatoes cooked with aromatic poppy seed paste.", image: "aloo-posto.jpg" },
    { name: "Chholar Dal", category: "Vegetarian", type: "veg", price: 120, description: "Bengal gram cooked with coconut and fragrant spices.", image: "chholar-dal.jpg" },
    { name: "Dhokar Dalna", category: "Vegetarian", type: "veg", price: 170, description: "Bengal gram lentil cakes simmered in a rich curry.", image: "dhokar-dalna.jpg" },
    { name: "Mochar Ghonto", category: "Vegetarian", type: "veg", price: 160, description: "A traditional banana blossom preparation with Bengali spices.", image: "mochar-ghonto.jpg" },
    { name: "Labra", category: "Vegetarian", type: "veg", price: 130, description: "A comforting medley of seasonal vegetables cooked together.", image: "labra.jpg" },
    { name: "Begun Bhaja", category: "Vegetarian", type: "veg", price: 90, description: "Golden fried eggplant slices with a light spice coating.", image: "begun-bhaja.jpg" },
    { name: "Aloo Dum", category: "Vegetarian", type: "veg", price: 130, description: "Baby potatoes cooked in a rich Bengali-style gravy.", image: "aloo-dum.jpg" },
    { name: "Shorshe Ilish", category: "Fish", type: "nonveg", price: 420, description: "Hilsa fish cooked in Bengal's signature mustard sauce.", image: "shorshe-ilish.jpg" },
    { name: "Ilish Bhapa", category: "Fish", type: "nonveg", price: 450, description: "Steamed hilsa flavoured with mustard, green chilli and mustard oil.", image: "ilish-bhapa.jpg" },
    { name: "Doi Katla", category: "Fish", type: "nonveg", price: 320, description: "Katla fish cooked in a creamy yoghurt-based gravy.", image: "doi-katla.jpg" },
    { name: "Rui Kalia", category: "Fish", type: "nonveg", price: 280, description: "Rohu fish in a rich and aromatic Bengali curry.", image: "rui-kalia.jpg" },
    { name: "Pabda Jhal", category: "Fish", type: "nonveg", price: 300, description: "Pabda fish simmered in a spicy mustard-based gravy.", image: "pabda-jhal.jpg" },
    { name: "Chingri Malai Curry", category: "Fish", type: "nonveg", price: 380, description: "Prawns cooked in a delicate coconut milk curry.", image: "chingri-malai-curry.jpg" },
    { name: "Bhetki Paturi", category: "Fish", type: "nonveg", price: 350, description: "Bhetki fillet marinated with mustard and steamed in banana leaf.", image: "bhetki-paturi.jpg" },
    { name: "Kolkata Fish Fry", category: "Fish", type: "nonveg", price: 190, description: "Crumb-coated fish fillet fried until crisp and golden.", image: "kolkata-fish-fry.jpg" },
    { name: "Kosha Mangsho", category: "Meat", type: "nonveg", price: 380, description: "Slow-cooked mutton in a deep, rich Bengali spice gravy.", image: "kosha-mangsho-mutton.jpg" },
    { name: "Bengali Chicken Curry", category: "Meat", type: "nonveg", price: 260, description: "A homestyle chicken curry with potatoes and aromatic spices.", image: "bengali-chicken-curry.jpg" },
    { name: "Chicken Dak Bungalow", category: "Meat", type: "nonveg", price: 320, description: "A classic chicken preparation with eggs and potatoes.", image: "chicken-dak-bungalow.jpg" },
    { name: "Mutton Rezala", category: "Meat", type: "nonveg", price: 390, description: "Tender mutton in a fragrant, mildly spiced yoghurt gravy.", image: "mutton-rezala.jpg" },
    { name: "Chicken Chaap", category: "Meat", type: "nonveg", price: 300, description: "Rich and flavourful slow-cooked chicken with aromatic spices.", image: "chicken-chaap.jpg" },
    { name: "Kolkata Mutton Biryani", category: "Meat", type: "nonveg", price: 360, description: "Fragrant rice layered with tender mutton and a potato.", image: "kolkata-mutton-biryani.jpg" },
    { name: "Steamed Rice", category: "Rice & Breads", type: "veg", price: 80, description: "Freshly steamed rice, a staple of the Bengali meal.", image: "steamed-rice.jpg" },
    { name: "Basanti Pulao", category: "Rice & Breads", type: "veg", price: 180, description: "Golden aromatic sweet pulao with cashews and raisins.", image: "basanti-pulao.jpg" },
    { name: "Luchi", category: "Rice & Breads", type: "veg", price: 60, description: "Soft, fluffy deep-fried Bengali flatbread.", image: "luchi.jpg" },
    { name: "Radhaballabhi", category: "Rice & Breads", type: "veg", price: 100, description: "Deep-fried stuffed bread filled with spiced lentils.", image: "radhaballabhi.jpg" },
    { name: "Koraishutir Kochuri", category: "Rice & Breads", type: "veg", price: 100, description: "Flaky fried bread stuffed with spiced green peas.", image: "koraishutir-kochuri.jpg" },
    { name: "Kolkata Kathi Roll", category: "Snacks", type: "nonveg", price: 160, description: "A Kolkata street-food favourite wrapped in a flaky paratha.", image: "kathi-roll.jpg" },
    { name: "Ghugni", category: "Snacks", type: "veg", price: 90, description: "Yellow peas cooked with spices and served as a popular snack.", image: "ghugni.jpg" },
    { name: "Fish Chop", category: "Snacks", type: "nonveg", price: 120, description: "Crispy crumb-coated Bengali fish croquettes.", image: "fish-chop.jpg" },
    { name: "Mochar Chop", category: "Snacks", type: "veg", price: 100, description: "Crispy banana blossom croquettes with Bengali spices.", image: "mochar-chop.jpg" },
    { name: "Mughlai Paratha", category: "Snacks", type: "nonveg", price: 180, description: "A crisp stuffed paratha with a savoury egg filling.", image: "mughlai-paratha.jpg" },
    { name: "Rosogolla", category: "Sweets", type: "veg", price: 50, description: "Soft cottage-cheese balls soaked in light sugar syrup.", image: "rosogolla.jpg" },
    { name: "Nolen Gur Sandesh", category: "Sweets", type: "veg", price: 80, description: "Delicate cottage-cheese sweet flavoured with date palm jaggery.", image: "nolen-gur-sandesh.jpg" },
    { name: "Mishti Doi", category: "Sweets", type: "veg", price: 70, description: "Traditional caramelised sweet yoghurt from Bengal.", image: "mishti-doi.jpg" },
    { name: "Kacha Golla", category: "Sweets", type: "veg", price: 60, description: "Soft and delicate fresh chhena sweet.", image: "kacha-golla.jpg" },
    { name: "Langcha", category: "Sweets", type: "veg", price: 60, description: "A deep-fried milk-based sweet soaked in sugar syrup.", image: "langcha.jpg" },
    { name: "Chomchom", category: "Sweets", type: "veg", price: 60, description: "A traditional Bengali sweet with a rich, soft texture.", image: "chomchom.jpg" },
    { name: "Payesh", category: "Sweets", type: "veg", price: 90, description: "Bengali rice pudding slowly cooked with milk and sugar.", image: "payesh.jpg" },
    { name: "Aam Pora Shorbot", category: "Drinks", type: "veg", price: 70, description: "Refreshing smoky raw mango cooler with roasted spices.", image: "aam-pora-shorbot.jpg" },
    { name: "Gondhoraj Ghol", category: "Drinks", type: "veg", price: 90, description: "A refreshing yoghurt drink infused with fragrant Gondhoraj lime.", image: "gondhoraj-ghol.jpg" },
    { name: "Sweet Lassi", category: "Drinks", type: "veg", price: 80, description: "A chilled and creamy yoghurt-based drink.", image: "sweet-lassi.jpg" }
];

const menuGrid = document.getElementById("menuGrid");
const menuSearch = document.getElementById("menuSearch");
const menuCount = document.getElementById("menuCount");
const noResults = document.getElementById("noResults");
const filterButtons = document.querySelectorAll(".filter-btn");
let activeCategory = "All";

function renderMenu() {
    const searchTerm = menuSearch.value.trim().toLowerCase();
    const filtered = dishes.filter(dish => {
        const categoryMatch = activeCategory === "All" || dish.category === activeCategory;
        const searchMatch = (dish.name + " " + dish.description + " " + dish.category).toLowerCase().includes(searchTerm);
        return categoryMatch && searchMatch;
    });
    menuCount.textContent = `Showing ${filtered.length} of ${dishes.length} dishes`;
    noResults.style.display = filtered.length === 0 ? "block" : "none";
    menuGrid.style.display = filtered.length === 0 ? "none" : "grid";
    menuGrid.innerHTML = filtered.map(dish => `
        <article class="menu-card">
            <div class="menu-image">
                <img src="../images/menu/${dish.image}" alt="${dish.name}" loading="lazy" onerror="this.style.display='none'">
                <span class="food-type ${dish.type}">${dish.type === "veg" ? "● Vegetarian" : "● Non-Vegetarian"}</span>
            </div>
            <div class="menu-info">
                <div class="menu-info-top">
                    <h3>${dish.name}</h3>
                    <span class="price">₹${dish.price}</span>
                </div>
                <p>${dish.description}</p>
            </div>
        </article>
    `).join("");
}

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(item => item.classList.remove("active"));
        button.classList.add("active");
        activeCategory = button.dataset.category;
        renderMenu();
    });
});

menuSearch.addEventListener("input", renderMenu);

document.querySelectorAll("[data-category-link]").forEach(link => {
    link.addEventListener("click", () => {
        const category = link.dataset.categoryLink;
        const target = document.querySelector(`.filter-btn[data-category="${category}"]`);
        if (target) target.click();
    });
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const open = navLinks.classList.toggle("open");
        menuToggle.textContent = open ? "✕" : "☰";
        menuToggle.setAttribute("aria-expanded", String(open));
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

renderMenu();
