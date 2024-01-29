export class categories {
  constructor() {
    this.displayCategoryResults();
  }
  async displayCategoryResults() {
    let category = document.querySelector("#demo");
    let searchApi = `https://www.themealdb.com/api/json/v1/1/categories.php`;
    const mealsByCategory = await this.apisearch(searchApi);
    this.updateDOM(mealsByCategory);
    // console.log(mealsByCategory);
  }

  updateDOM(meals) {
    const demoElement = document.getElementById("demo");
    demoElement.innerHTML = "";
    var mealElement = ``;
    meals.forEach((meal) => {
      // const index = meal.strCategoryDescription.indexOf("[1]")
      const extractedDescription = meal.strCategoryDescription
        .split(" ")
        .slice(0, 20)
        .join(" ");

      mealElement += `
          <div data-category="${meal.strCategory}" class="colom col-md-3 position-relative  overflow-hidden">
          <div class="overlay text-center rounded-2">
          <p class="fs-2 fw-bold">${meal.strCategory}</p>
          <p class="desc">${extractedDescription}</p>
      </div>
          <img src="${meal.strCategoryThumb}" class="w-100 rounded-2" alt="">
      </div>
          `;
      // console.log("done");
      demoElement.innerHTML = mealElement;
    });
  }
  async specificArea(category) {
    let searchApi = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    try {
      const mealsByCategory = await this.apisearch(searchApi);
      // const areaInstance = new Area();
      this.updateDOMForClickedArea(mealsByCategory);
      this.displaydetailsclick(mealsByCategory);
      
      console.log(mealsByCategory);
    } catch (error) {
      console.error("Error fetching or processing data:", error);
    }
  }

  updateDOMForClickedArea(meals) {
    const demoElement = document.getElementById("demo");
    demoElement.innerHTML = "";
    var mealElement = ``;
    meals.forEach((meal) => {
      mealElement += `
                <div data-categorymod="${meal.strIngredient}"  class="colom col-md-3 position-relative overflow-hidden"">
                    <div class="overlay d-flex align-items-center text-center rounded-2">
                        <p class="fs-2 fw-bold">${meals.strCategory}</p>
                       
                    </div>
                    <img src="${meals.strCategoryThumb}" class="w-100 rounded-2" alt="">
                </div>
            `;
    });
    demoElement.innerHTML = mealElement;
    // console.log("Update DOM for clicked ingredients:", ingredients);
  }

  async apisearch(url) {
    try {
      let data = await fetch(url);
      let dataApi = await data.json();
      return dataApi.categories || [];
      //  console.log(dataApi.categories);
    } catch (error) {
      console.error("error fetching data:", error);
      return [];
    }
  }
  displaydetailsclick(info) {
    var cartona = ``;
    for (let i = 0; i < info.length; i++) {
      cartona += `
           <div class="col-md-4">
           <img src="${info[i].strMealThumb}" class="details w-100" alt="">
           <h2>${info[i].strMeal}</h2>
       </div>
       <div class="col-md-8">
           <h2>Instructions</h2>
           <p>${info[i].strInstructions}</p>
           <h3>Area : <span>${info[i].strArea}</span></h3>
           <h3>Category : <span>${info[i].strCategory}</span></h3>
           <h3>Recipes : </h3>
           <ul class="list-unstyled d-flex g-3 flex-wrap">
               <li class="alert alert-info m-2 p-1">${info[i].strIngredient1}</li>
               <li class="alert alert-info m-2 p-1">${info[i].strIngredient2}</li>
               <li class="alert alert-info m-2 p-1">${info[i].strIngredient3}</li>
               <li class="alert alert-info m-2 p-1">${info[i].strIngredient4}</li>
               <li class="alert alert-info m-2 p-1">${info[i].strIngredient5}</li>
               <li class="alert alert-info m-2 p-1">${info[i].strIngredient6}</li>
               <li class="alert alert-info m-2 p-1">${info[i].strIngredient7}</li>
               <li class="alert alert-info m-2 p-1">${info[i].strIngredient8}</li>
               <li class="alert alert-info m-2 p-1">${info[i].strIngredient9}</li>
               <li class="alert alert-info m-2 p-1">${info[i].strIngredient10}</li>
     
            </ul>
           <h3>Tags :</h3>
           <ul class="list-unstyled d-flex g-3 flex-wrap">
           
               <li class="alert alert-danger m-2 p-1">${info[i].strTags}</li>
            </ul>
            <a target="_blank" href="${info[i].strSource}" class="btn btn-success">Source</a>
            <a target="_blank" href="${info[i].strYoutube}" class="btn btn-danger">Youtube</a>
     
     
       </div>
           `;
    }
    document.getElementById("demo").innerHTML = cartona;
  }
}



const categoriesInstance = new categories();

// Use an event listener to call the displayCategoryResults method when the button is clicked
$("#btn-category").on("click", async function () {
  await categoriesInstance.displayCategoryResults()
});
$("#demo").on("click", async function () {
  const category = $(this).attr("data-category");
  const anything= $(this).attr("data-categorymod")
  console.log(category);
  categoriesInstance.specificArea(category);
  categoriesInstance.specificArea(anything);
});
