var searchMeals = []
async function getSearchPageByName(name) {
    let request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    let data = await request.json()
    searchMeals = data.meals
    // console.log(searchMeals);
    
}

function displaySearchByName(){
    let searchContainer = ''
    let name = document.getElementById('inputSearchName').value
    for (let i=0; i < searchMeals.length; i++) {
        if(searchMeals[i].strMeal.toLowerCase().includes(name.toLowerCase())){
        searchContainer += `
            <div class="col-md-3 overflow-hidden mb-4">
            <div class="card-img position-relative" data-id="${searchMeals[i].idMeal}">
                <img src="${searchMeals[i].strMealThumb}" class="w-100 rounded-2" alt="meal">
                <div class="layout position-absolute end-0 start-0 bottom-0 d-flex justify-content-start align-items-center">
                    <h3 class="p-2">${searchMeals[i].strMeal}</h3>
                </div>
            </div>
        </div>
        `
        }
    }
    document.getElementById('searchPage').innerHTML = searchContainer
    getSearchPageByName(`${name}`);
    const cards = document.querySelectorAll('.card-img');
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', function () {
            const mealId = this.getAttribute('data-id');
            window.location.href = `mealDesc.html?id=${mealId}`;
        });
    }
}

$('#inputSearchName').on('input', function() {
    
    let name = document.getElementById('inputSearchName').value;
    if (name.trim() !== '') {
        displaySearchByName();
        
    } else {
        document.getElementById('searchPage').innerHTML = '';
        
    }
})

// by letter
async function getsearchMealByLetter(letter){
    let request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
    let data = await request.json();
    searchMeals = data.meals || [];
    displaySearchByLetter();
}

function displaySearchByLetter() {
    let searchContainer = '';
    for (let i = 0; i < searchMeals.length; i++) {
        searchContainer += `
            <div class="col-md-3 overflow-hidden mb-4">
                <div class="card-img position-relative" data-id="${searchMeals[i].idMeal}">
                    <img src="${searchMeals[i].strMealThumb}" class="w-100 rounded-2" alt="meal">
                    <div class="layout position-absolute end-0 start-0 bottom-0 d-flex justify-content-start align-items-center">
                        <h3 class="p-2">${searchMeals[i].strMeal}</h3>
                    </div>
                </div>
            </div>
        `;
    }
    document.getElementById('searchPage').innerHTML = searchContainer;
    const cards = document.querySelectorAll('.card-img');
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', function () {
            const mealId = this.getAttribute('data-id');
            window.location.href = `mealDesc.html?id=${mealId}`;
        });
    }
}

$('#inputSearchLetter').on('input', function() {
    let letter = document.getElementById('inputSearchLetter').value;
    if (letter.trim().length === 1) {
        getsearchMealByLetter(letter);
        displaySearchByLetter()
    } else {
        document.getElementById('searchPage').innerHTML = '';
        
    }
});

