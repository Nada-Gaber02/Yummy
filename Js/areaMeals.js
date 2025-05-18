var meals = [];
async function getAreaMeals(area) {
    var response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    data = await response.json();
    meals = data.meals;
    displayAreaMeals(meals);
};


function displayAreaMeals(meals) {
    let areaMealContainer = '';
    for (let i = 0; i < meals.length; i++) {
        areaMealContainer += `
            <div class="col-md-3 mb-4 overflow-hidden" >
                <div class="card-img position-relative"  data-id="${meals[i].idMeal}">
                    <img src="${meals[i].strMealThumb}" class="w-100 rounded-2" alt="meal">
                    <div class="layout position-absolute end-0 start-0 bottom-0 d-flex justify-content-start align-items-center">
                        <h3 class="p-2">${meals[i].strMeal}</h3>
                    </div>
                </div>
            </div>
        `;
    }
    document.getElementById('areaMeals').innerHTML = areaMealContainer;
    const cards = document.querySelectorAll('.card-img');
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', function () {
            const mealId = this.getAttribute('data-id');
            window.location.href = `mealDesc.html?id=${mealId}`;
        });
    }
}

const paramsArea = new URLSearchParams(window.location.search);
const area = paramsArea.get('area');
if (area) {
    getAreaMeals(area);
}