let allIngMeals = [];
async function getIngredientsMeals(ingredient) {
    var resp = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    var data = await resp.json();
    allIngMeals = data.meals;
    displayIngredientsMeals(allIngMeals);
}

function displayIngredientsMeals(meals) {
    let mealContainer = '';
    for (let i = 0; i < meals.length; i++) {
        mealContainer += `
            <div class="col-md-3 mb-4">
                <div class="card-img overflow-hidden position-relative" data-id="${meals[i].idMeal}">
                    <img src="${meals[i].strMealThumb}" class="w-100 rounded-2" alt="meal">
                    <div class="layout position-absolute end-0 start-0 bottom-0 d-flex justify-content-start align-items-center">
                        <h3 class="p-2">${meals[i].strMeal}</h3>
                    </div>
                </div>
            </div>
        `;
    }
    document.getElementById('ingMeals').innerHTML = mealContainer;
    const cards = document.querySelectorAll('.card-img');
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', function () {
            const mealId = this.getAttribute('data-id');
            window.location.href = `mealDesc.html?id=${mealId}`;
        });
    }
}

const paramsIng = new URLSearchParams(window.location.search);
const ingredient = paramsIng.get('ingredient');
if (ingredient) {
    getIngredientsMeals(ingredient);
}