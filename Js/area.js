var allAreas = [];
async function getAreaApi() {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);  
    let data = await response.json();
    allAreas = data.meals;
    // console.log(allAreas);
    displayArea()
}
getAreaApi();

function displayArea() {
    let areaContainer = '';
    for (let i = 0; i < allAreas.length; i++) {
        areaContainer += `
        <div class="col-md-3 mb-4" style="cursor: pointer;">
            <div class="area-list text-white d-flex flex-column justify-content-center align-items-center gap-3" data-area="${allAreas[i].strArea}">
                <i class="fa-solid fa-house-laptop" style="color: #ffffff; font-size: 70px;"></i>
                <h3>${allAreas[i].strArea}</h3>
            </div>
        </div>
        `;
    }
    document.getElementById('area').innerHTML = areaContainer;
    const cards = document.querySelectorAll('.area-list');
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', function () {
            const area = this.getAttribute('data-area');
            window.location.href = `areaMeals.html?area=${area}`;
        });
    }
}