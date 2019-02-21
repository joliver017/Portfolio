// $(document).ready(function() {
//     random_bg_color();
//     $("html").on("load", function() {
//         random_bg_color();
//     });
//   });
  
//   var bgColors = ["46,139,87", "30,144,255", "60,179,113" , "245,176,203", "220,106,207", 
//                   "212,77,92", "148, 197, 204", "180, 210, 231", "169, 206, 244", "34, 174, 209", 
//                   "175, 169, 141", "105, 153, 93", "132, 192, 198", "70, 177, 201", "207, 142, 128", 
//                   "60, 136, 110", "239, 136, 227", "103, 142, 54", "221, 162, 79", "193, 77, 148",
//                   "160, 157, 165", "87, 222, 193", "27, 173, 196", "240, 153, 81", "48, 197, 136", 
//                   "3, 198, 214", "197,194,39", "68,129,192", "214,143,46"];
  
//   function random_bg_color() {
//     var randomColor = bgColors[Math.floor(Math.random()*bgColors.length)];
//     $("html").css("background-color", "rgb(" + randomColor + ")");
//   };

$(document).ready(function(){
    M.AutoInit();
    $('.carousel').carousel();
  });