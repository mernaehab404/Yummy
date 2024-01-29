import { Area } from "./Area.js";
import { categories } from "./Categories.js";
import { Ingredients } from "./Ingredients.js";
import { Navbar } from "./Navbar.js";
import { search } from "./search.js";
const nav = new Navbar();
const searchobj = new search();
const categoryobj = new categories
const areaobj= new Area
const ingreobj = new Ingredients

$(function () {
  $("#loading").slideUp(1000);
});


async function getALL() {
  let data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  );
  let dataApi = await data.json();
  return dataApi.meals;
  console.log(dataApi.meals);
}
function displayData(info) {
  var cartona = ``;
  let i = 0;
  for (i = 0; i < info.length; i++) {
    cartona += `
        <div class="colom col-md-3 position-relative  overflow-hidden">
        <div class="overlay d-flex align-items-center rounded-2">
        <p class="fs-2 fw-bold p-3">${info[i].strMeal}</p>
    </div>
        <img src="${info[i].strMealThumb}" class="w-100 rounded-2" alt="">
    </div>
        `;
  }
  document.getElementById("home").innerHTML = cartona;
}

async function Allfunctions() {
  try {
    let info = await getALL();
    displayData(info);
  } catch (error) {
    console.error("Error fetching  data:", error);
  }
}
Allfunctions();

$(document).ready(function () {
  $(".content").hide();

  // Show the home content by default
  $("#default").show();

  // Add click event listener to the li elements
  $(".nav-link").on("click", function (e) {
    e.preventDefault();

    // Get the data-target attribute of the clicked link
    var targetContentId = $(this).data("target");

    // Hide all content sections
    $(".content").hide();

    // Show the corresponding content section
    $("#" + targetContentId).show();
    
    // $("li").on('click',function () {
    // let width = $(".left-side").width();

    //   $(".nvv").animate({ left: -width }, 1000);

    //   })
  });
});



