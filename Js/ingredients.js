var allIng = []
async function getIngApi(){
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let data = await response.json()
    allIng = data.meals
    // console.log(allIng);
    displayIng()
}
getIngApi()

function displayIng(){
    let ingContainer = ''
    for(i=0;i<allIng.length;i++){
        let Ingdesc = allIng[i].strDescription 
        ? allIng[i].strDescription.slice(0, 110) 
        : '';
        ingContainer += `
                <div class="col-md-3 text-center mb-4" style="cursor: pointer;">
                    <div class="ing-list text-white text-center" data-ingredient="${allIng[i].strIngredient}">
                        <i class="fa-solid fa-drumstick-bite" style="color: #ffffff; font-size: 65px;" ></i>
                        <h3>${allIng[i].strIngredient}</h3>
                        <p>${Ingdesc}</p>
                    </div>
                </div>
        `
    }
    document.getElementById('ingredients').innerHTML = ingContainer
    const cards = document.querySelectorAll('.ing-list');
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', function () {
        const ingredient = this.getAttribute('data-ingredient');
        window.location.href = `ingredientsMeals.html?ingredient=${ingredient}`;
        });
    }
}