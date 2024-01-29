import { search } from "./search.js";
const searchInstance = new search();
export class Area{
    constructor(){
            this.getArea()  
    }
    async getArea() {
        let area = document.querySelector("#area");
        let searchApi = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;

        try {
            const mealsByArea = await searchInstance.apisearch(searchApi);
            this.updateDOM(mealsByArea);
            // console.log(mealsByArea);
        } catch (error) {
            console.error("Error fetching or processing data:", error);
        }
    }
    updateDOM(areas) {   
        const demoElement = document.getElementById("area");
        demoElement.innerHTML = "";
        var mealElement = ``;
        areas.forEach((area) => {

            mealElement += `
                <div data-area="${area.strArea}" class="colom col-md-3 position-relative overflow-hidden text-white">
                    <i class="fa-solid fa-house-laptop fa-4x"></i>
                    <h3>${area.strArea}</h3>
                </div>
            `;
        });
        demoElement.innerHTML = mealElement;
    }
    
    async  specificArea(area) {
        let searchApi= `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
        try {
            const mealsByArea = await searchInstance.apisearch(searchApi);
    // const areaInstance = new Area();
    this.updateDOMForClickedArea(mealsByArea);
            console.log(mealsByArea);
        } catch (error) {
            console.error("Error fetching or processing data:", error);
        }
    }
    updateDOMForClickedArea(areas) {
        const demoElement = document.getElementById("area");
        demoElement.innerHTML = "";
        var mealElement = ``;
        areas.forEach((area) => {
            mealElement += `
                <div  class="colom col-md-3 position-relative overflow-hidden"">
                    <div class="overlay d-flex align-items-center text-center rounded-2">
                        <p class="fs-2 fw-bold">${area.strMeal}</p>
                       
                    </div>
                    <img src="${area.strMealThumb}" class="w-100 rounded-2" alt="">
                </div>
            `;
        });
        demoElement.innerHTML = mealElement;
        // console.log("Update DOM for clicked area:", areas);
    }

}
const areaInstance = new Area();

// Use event delegation to handle click events
$("#area").on('click', '.colom', function () {
    const area = $(this).data('area');
    console.log(area);
    areaInstance.specificArea(area);
});


