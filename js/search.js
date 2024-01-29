export class search {
  constructor() {
    document.getElementById("search-name").addEventListener("input", () => {
      this.displaySearchResults();
    });
    document.getElementById("search-letter").addEventListener("input",()=>{
        this.displaySearchLetters()
    })
  }
  async displaySearchResults() {
    const mealName = document.querySelector("#search-name").value;
    // console.log(mealName);
    let searchApi = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
    const mealsByName = await this.apisearch(searchApi);
    this.updateDOM(mealsByName,'name');
  }
  async displaySearchLetters(){
    const inputValue  =document.querySelector("#search-letter").value;
     console.log(inputValue );
     if (inputValue.length > 0) {
        const firstLetter = inputValue.charAt(0);
      
        console.log("First letter:", firstLetter);
     
    let searchApiLetter = `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue }`;
    const mealsByLetter = await this.apisearch(searchApiLetter);
    this.updateDOM(mealsByLetter,'letter');

    }

  }

  updateDOM(meals,searchType) {
    const demoElement = document.getElementById("demo");
    // Clear previous search results
    demoElement.innerHTML = "";
    var mealElement = ``;
    // Iterate through the meals and create HTML elements to display them
    meals.forEach((meal) => {
      mealElement += `
      <div class="colom col-md-3 position-relative  overflow-hidden">
      <div class="overlay d-flex align-items-center rounded-2">
      <p class="fs-2 fw-bold p-3">${meal.strMeal}</p>
  </div>
      <img src="${meal.strMealThumb}" class="w-100 rounded-2" alt="">
  </div>
      `;

      demoElement.innerHTML = mealElement;
    });
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

  