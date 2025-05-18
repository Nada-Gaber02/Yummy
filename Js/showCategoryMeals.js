
const paramsCategory = new URLSearchParams(window.location.search);
const category = paramsCategory.get('category');
var allCategoryMeals = [];


async function getCategoryMeals() {
    let request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    let data = await request.json();
    allCategoryMeals = data.meals;
    displayCategoryMeals();
}


function displayCategoryMeals() {
    let categoryMealsContainer = '';
    for (let i = 0; i < allCategoryMeals.length; i++) {
        categoryMealsContainer += `
        <div class="col-md-3 overflow-hidden mb-4">
            <div class="card-categoryMeal position-relative" data-id="${allCategoryMeals[i].idMeal}">
                <img src="${allCategoryMeals[i].strMealThumb}" class="w-100" alt="meal">
                <div class="layout position-absolute end-0 start-0 bottom-0 d-flex justify-content-start align-items-center">
                    <h3 class="p-2">${allCategoryMeals[i].strMeal}</h3>
                </div>
            </div>
        </div>
        `;
    }
    document.getElementById('categoryMeal').innerHTML = categoryMealsContainer;

    const cards = document.querySelectorAll('.card-categoryMeal');
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', function () {
            const mealId = this.getAttribute('data-id');
            window.location.href = `mealDesc.html?id=${mealId}`;
        });
    }
}


getCategoryMeals();