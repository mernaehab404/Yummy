

export class Ingredients {
  constructor() {
    this.getIngredients();
  }

  async getIngredients() {
    let ingr = document.querySelector("#ingredients");
    let searchApi = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`;

    try {
      const mealsByIngredients = await this.apisearch(searchApi);
      this.updateDOM(mealsByIngredients);
    //   console.log(mealsByIngredients);
    } catch (error) {
      console.error("Error fetching or processing data:", error);
    }
  }
  updateDOM(ingredients) {   
        const demoElement = document.getElementById("ingredients");
        demoElement.innerHTML = "";
        var mealElement = ``;
        ingredients.forEach((ingr) => {
//  const extractedDescription =  ingr.strDescription.split(" ").slice(0,20).join(" ")
            mealElement += `
                <div data-ingr="${ingr.strIngredient}" class="colom col-md-3 position-relative overflow-hidden text-white">
                    <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                    <h3>${ingr.strIngredient}</h3>
                    <p>${ingr.strDescription}</p>         
                </div>
            `;
        });
        demoElement.innerHTML = mealElement;
    }
    async  specificArea(ingr) {
        let searchApi= `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingr}`;
        try {
            const mealsByIngredients = await this.apisearch(searchApi);
    // const areaInstance = new Area();
    this.updateDOMForClickedArea(mealsByIngredients);
            console.log(mealsByIngredients);
        } catch (error) {
            console.error("Error fetching or processing data:", error);
        }
    }

  updateDOMForClickedArea(ingredients) {
        const demoElement = document.getElementById("ingredients");
        demoElement.innerHTML = "";
        var mealElement = ``;
        ingredients.forEach((ingr) => {
            mealElement += `
                <div  class="colom col-md-3 position-relative overflow-hidden"">
                    <div class="overlay d-flex align-items-center text-center rounded-2">
                        <p class="fs-2 fw-bold">${ingr.strMeal}</p>
                       
                    </div>
                    <img src="${ingr.strMealThumb}" class="w-100 rounded-2" alt="">
                </div>
            `;
        });
        demoElement.innerHTML = mealElement;
        // console.log("Update DOM for clicked ingredients:", ingredients);
    }

    async apisearch(url) {
        try{
        let data = await fetch(url);
        let dataApi = await data.json();
         return dataApi.meals || [];
        //  console.log(dataApi.meals);
        }catch(error){
            console.error("error fetching data:",error)
            return[]
        }
      }
}

const ingrInstance = new Ingredients();

// Use event delegation to handle click events
$("#ingredients").on('click', '.colom', function () {
    const ingr = $(this).attr('data-ingr');
    console.log(ingr);
    ingrInstance.specificArea(ingr);
});


