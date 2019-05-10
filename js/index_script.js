/* 
   Javascript Program to add functionality to homepage.    
   Programmers: Jacob Huebner
   File Name: index_script.js
*/

// Runs when the document starts
$(document).ready(function() {

 /* 
  * Hamburger menu 
  * When clicked, the menu will toggle the menuitemlist's visibility
  * with an animaiton. 
  */
  $("#hamburgermenubtn").click(function() {
    if($("#topnavitemlist").is(":visible") == true){
      $(".navitemlist").slideToggle("slow","swing", function(){
        $("#topnavitemlist").attr("style", "");
        $("#topnavitemlist").addClass("hide");
        $("#topnavitemlist").removeClass("show");
      });
    }
    else{
      $(".navitemlist").slideToggle("slow","swing", function(){
        $("#topnavitemlist").attr("style", "");
        $("#topnavitemlist").addClass("show");
        $("#topnavitemlist").removeClass("hide");
      });
    }
    
  });


  // ======== Menu item 1 ========
  /*
  $("#navbtn1").on({  

    // hover functionality
    mouseenter: function () {
      // Code here
    },

    // double tap functionality
    dblclick: function () {
      // Code here 
    },

    // single tap functionality
    click: function () {
      // Code here
    }
  })
  */


});
