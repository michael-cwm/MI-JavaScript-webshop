
    
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

    console.log(forms);
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          event.preventDefault();
          event.stopPropagation();
          if (!form.checkValidity()) {
            // event.preventDefault();
            // event.stopPropagation();
            modal.style.display = "none";
          }
  
          form.classList.add("was-validated");
        },
        // false
      );
    });



    document.getElementById("arrowBack").addEventListener("click", () => {
      window.history.back();
    })

    // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector("button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.addEventListener("click", () => {
  console.log("btn");
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", () => {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


console.log("hejhej");



  
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.querySelectorAll(".needs-validation");
  
//     // Loop over them and prevent submission
//     Array.prototype.slice.call(forms).forEach(function (form) {
//       form.addEventListener(
//         "submit",
//         function (event) {
//           if (!form.checkValidity()) {
//             event.preventDefault();
//             event.stopPropagation();
//           }
  
//           form.classList.add("was-validated");
//         },
//         false
//       );
//     });

//     document.getElementById("arrowBack").addEventListener("click", () => {
//       window.history.back();
//     })

//     // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.querySelector("button");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.addEventListener("click", () => {
//   console.log("btn");
//   modal.style.display = "block";
// });

// // When the user clicks on <span> (x), close the modal
// span.addEventListener("click", () => {
//   modal.style.display = "none";
// });

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// console.log("hejhej");

export default (function () {
  "use strict";
});


