
//SAVE button

$(document).ready(function () {

   // write some code to pull data from localStorage to populate all the input


   var get9AM = localStorage.getItem("9AM");
   $("#Sche9").val(get9AM);


   $("#save1").on("click", function (event) {

      // element is a native js element (not jquery)
      var element = event.target;
      var div = $(element).parent()

      // siblings will return an array 
      // we put selector inside the sibling function
      // since siblings return an array, and there is only 1 siblings of the div that has a classs of task-note
      // so we can be sure that the siblings function will return a single element array
      var input = div.siblings(".task-note")[0]

      // convert native js element to jquery object
      input = $(input)
      console.log(element)
      // alert("hola");
      var inputValue = input.val();
      localStorage.setItem("9AM", inputValue);
      // var get9AM =localStorage.getItem("9AM");
      // $("#Sche9").val(get9AM);


   });

   var get10AM = localStorage.getItem("10AM");
   $("#Sche10").val(get10AM);

   $("#save2").on("click", function (event) {

      var element = event.target;
      var div = $(element).parent()

      var input = div.siblings(".task-note")[0]

      input = $(input)
      console.log(element)

      var inputValue = input.val();
      localStorage.setItem("10AM", inputValue);

   });

   var get10AM = localStorage.getItem("11AM");
   $("#Sche11").val(get10AM);

   $("#save3").on("click", function () {

      var element = event.target;
      var div = $(element).parent()

      var input = div.siblings(".task-note")[0]

      input = $(input)
      console.log(element)

      var inputValue = input.val();
      localStorage.setItem("11AM", inputValue);

      var get10AM = localStorage.getItem("11AM");
      $("#Sche11").val(get10AM);



   });

   var get10AM = localStorage.getItem("12AM");
   $("#Sche12").val(get10AM);

   $("#save4").on("click", function () {

      var element = event.target;
      var div = $(element).parent()

      var input = div.siblings(".task-note")[0]

      input = $(input)
      console.log(element)

      var inputValue = input.val();
      localStorage.setItem("12AM", inputValue);

      var get10AM = localStorage.getItem("12AM");
      $("#Sche12").val(get10AM);


   });

   var get10AM = localStorage.getItem("13AM");
   $("#Sche13").val(get10AM);

   $("#save5").on("click", function () {

      var element = event.target;
      var div = $(element).parent()

      var input = div.siblings(".task-note")[0]

      input = $(input)
      console.log(element)

      var inputValue = input.val();
      localStorage.setItem("13AM", inputValue);

      var get10AM = localStorage.getItem("13AM");
      $("#Sche13").val(get10AM);


   });

   var get10AM = localStorage.getItem("14AM");
   $("#Sche14").val(get10AM);

   $("#save6").on("click", function () {

      var element = event.target;
      var div = $(element).parent()

      var input = div.siblings(".task-note")[0]

      input = $(input)
      console.log(element)

      var inputValue = input.val();
      localStorage.setItem("14AM", inputValue);

      var get10AM = localStorage.getItem("14AM");
      $("#Sche14").val(get10AM);


   });

   var get10AM = localStorage.getItem("15AM");
   $("#Sche15").val(get10AM);


   $("#save7").on("click", function () {
      var element = event.target;
      var div = $(element).parent()

      var input = div.siblings(".task-note")[0]

      input = $(input)
      console.log(element)

      var inputValue = input.val();
      localStorage.setItem("15AM", inputValue);

      var get10AM = localStorage.getItem("15AM");
      $("#Sche15").val(get10AM);



   });

   var get10AM = localStorage.getItem("16AM");
   $("#Sche16").val(get10AM);

   $("#save8").on("click", function () {
      var element = event.target;
      var div = $(element).parent()

      var input = div.siblings(".task-note")[0]

      input = $(input)
      console.log(element)

      var inputValue = input.val();
      localStorage.setItem("16AM", inputValue);

      var get10AM = localStorage.getItem("16AM");
      $("#Sche16").val(get10AM);




   });

   var get10AM = localStorage.getItem("17AM");
   $("#Sche17").val(get10AM);

   $("#save9").on("click", function () {
      var element = event.target;
      var div = $(element).parent()

      var input = div.siblings(".task-note")[0]

      input = $(input)
      console.log(element)

      var inputValue = input.val();
      localStorage.setItem("17AM", inputValue);

      var get10AM = localStorage.getItem("17AM");
      $("#Sche17").val(get10AM);


   });




});

//Moment timer

$(document).ready(function () {

   $(".lead2").append(moment().format('MMMM Do YYYY, h:mm:ss a'));


});
