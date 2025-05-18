var allMeals = []
async function getMainPageApi(){
    let request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    let data = await request.json()
    allMeals = data.meals
    // console.log(allMeals);
    displayMeals()
}
getMainPageApi()

function displayMeals(){
    let mealContainer = ''
    for(let i = 0; i < allMeals.length; i++){
        mealContainer += `
        <div class="col-md-3 overflow-hidden mb-4">
            <div class="card-img position-relative">
                <img src="${allMeals[i].strMealThumb}" class="w-100 rounded-2" alt="meal">
                <div class="layout position-absolute end-0 start-0 bottom-0 d-flex justify-content-start align-items-center">
                    <h3 class="p-2">${allMeals[i].strMeal}</h3>
                </div>
            </div>
        </div>
        `
    }
    document.getElementById('mainPage').innerHTML = mealContainer
    const cards = document.querySelectorAll('.card-img');
    for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function () {
        const mealId = allMeals[i].idMeal;
        window.location.href = `mealDesc.html?id=${mealId}`;
    });
}
}


//side nav js
const sideNav = $('.side-nav').innerWidth()
let isShown = false
$('.sideNavBar').css({left:`-${sideNav}px`}) 

$('.side-nav-btn').on('click',function(){
    if(isShown == true){
        $('.sideNavBar').animate({left: `-${sideNav}px`}, 500)
        $('.side-nav-btn i').addClass('d-none')
        $('.side-nav-btn .navBtn').removeClass('d-none')
        $('ul').addClass('animate__fadeOutDown')
        $('ul').removeClass('animate__fadeInUp')
        isShown = false
    }
    else{
        $('.sideNavBar').animate({left: '0'}, 500)
        $('.side-nav-btn i').removeClass('d-none')
        $('.side-nav-btn .navBtn').addClass('d-none')
        $('ul').addClass('animate__fadeInUp')
        $('ul').removeClass('animate__fadeOutDown')
        isShown = true
    }
})

// ...existing code...
window.addEventListener('load', function () {
    if (window.location.pathname !== '/' && performance.navigation.type === performance.navigation.TYPE_RELOAD) {
        window.location.href = '/';
    }
});
