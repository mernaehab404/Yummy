export class Navbar {
    constructor() {
        // console.log("hi");
        this.isOpen = false;
        document.querySelector(".open").addEventListener("click",()=> {
    this.openClose()
})}
openClose(){
   
    let width = $(".left-side").width();

    if (this.isOpen) {
      $("#navbar").animate({ left: -width }, 1000);
      $(".open").removeClass("fa-solid fa-xmark").addClass("fa-solid fa-bars");
    
        // Hide the list items one by one
      //   $(".ul li").each(function (index) {
      //     $(this).delay(index * 100).slideDown(500);
      //   });
    } else {
      //open
    $(".left-side").css("display", "flex");
      $("#navbar").animate({ left: -0 }, 1000);
      $(".open").removeClass("fa-solid fa-bars").addClass("fa-solid fa-xmark");
      //   $(".ul li").each(function (index) {
      //     $(this).delay(index * 100).slideUp(500)});
    }
  
    this.isOpen = !this.isOpen; // Toggle the state
}


}
    