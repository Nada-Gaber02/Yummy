var mealDesc = []

const params = new URLSearchParams(window.location.search);
const mealId = params.get('id');
if (mealId) {
    getPageDescriptionApi(mealId);
}

async function getPageDescriptionApi(mealId){
    let response = await fetch (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    let dataDesc = await response.json()
    mealDesc = dataDesc.meals
    displayDescription()
}


function displayDescription(){
    let mealContainerDesc = ''
    for(let i = 0; i < mealDesc.length; i++){
        let recipesBox = '';
        for(let j = 1; j <= 20; j++){
            let measure = mealDesc[i][`strMeasure${j}`];
            if(measure && measure.trim() !== ''){
                recipesBox += `<li class="badge px-3 py-2 my-3">${measure}</li>`;
            }
        }
        let tagsBox = '';
        let tags = mealDesc[i].strTags;
        if (tags && tags.trim() !== '') {
            let tagsArr = tags.split(',');
            for (let k = 0; k < tagsArr.length; k++) {
                tagsBox += `<li class="px-3 py-2 my-3 rounded-2" style="background-color:#F8D7DA; color:#B54229">${tagsArr[k]}</li>`;
            }
        }
        mealContainerDesc += `
        <div class="col-md-4">
                    <div class="description-page-img">
                        <img src="${mealDesc[i].strMealThumb}" class="w-100 rounded-2" alt="">
                        <h2>${mealDesc[i].strMeal}</h2>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="description-page-instructions text-white">
                        <h2>Instructions</h2>
                        <p>${mealDesc[i].strInstructions}</p>
                        <h3><span style="font-weight: 700;">Area :</span> ${mealDesc[i].strArea}</h3>
                        <h3><span style="font-weight: 700;">Category :</span> ${mealDesc[i].strCategory}</h3>
                        <h3><span style="font-weight: 700;">Recipes :</span></h3>
                        <div class="d-flex gap-2">
                            <div class="recipes-box d-flex gap-2 flex-wrap">
                                ${recipesBox}
                            </div>
                        </div>
                        <h3><span style="font-weight: 700;">Tags :</span></h3>
                        <div class="d-flex gap-2 flex-wrap list-unstyled">
                            ${tagsBox}
                        </div>
                        <div class="tags-btn d-flex gap-2">
                            <a href="${mealDesc[i].strSource}" target="_blank" class="text-bg-success px-3 py-2 my-3 rounded-2 text-decoration-none">Source</a>
                            <a href="${mealDesc[i].strYoutube}" target="_blank" class="text-bg-danger rounded-2 px-3 py-2 my-3 text-decoration-none">Youtube</a>
                        </div>
                    </div>
                </div>
        `
    }
    document.getElementById('descriptionPage').innerHTML = mealContainerDesc
}

const sideNav = $('.side-nav').innerWidth()
let isShown = false
$('.sideNavBar').css({left:`-${sideNav}px`}) 

$('.side-nav-btn').on('click',function(){
    if(isShown == true){
        $('.sideNavBar').animate({left: `-${sideNav}px`}, 500)
        $('.side-nav-btn i').addClass('d-none')
        $('.side-nav-btn .navBtn').removeClass('d-none')
        isShown = false
    }
    else{
        $('.sideNavBar').animate({left: '0'}, 500)
        $('.side-nav-btn i').removeClass('d-none')
        $('.side-nav-btn .navBtn').addClass('d-none')
        
        isShown = true
    }
})


