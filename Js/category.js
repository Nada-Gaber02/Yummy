var allCategories = []
async function getCategoryApi() {
    let request = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let data = await request.json()
    allCategories = data.categories
    // console.log(allCategories);
    displayCategory()
}
getCategoryApi()

function displayCategory() {
    let categoryCartona =''
    for(i=0;i<allCategories.length;i++){
        let desc = allCategories[i].strCategoryDescription.slice(0, 150);
        categoryCartona += `
            <div class="col-md-3 overflow-hidden mb-4">
                <div class="card-category position-relative" data-category="${allCategories[i].strCategory}">
                    <img src="${allCategories[i].strCategoryThumb}" class="w-100" alt="">
                    <div class="layout-category text-center">
                        <h3>${allCategories[i].strCategory}</h3>
                        <p>${desc}</p>
                    </div>
                </div>
            </div>
        `
    }
    document.getElementById('categoryPage').innerHTML = categoryCartona
    const cards = document.querySelectorAll('.card-category');
    for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function () {
        const category = this.getAttribute('data-category');
        window.location.href = `showCategoryMeals.html?category=${category}`;
    });
    }
}