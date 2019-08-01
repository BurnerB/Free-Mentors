let nav = document.getElementById('nav');

window.onscroll = function(){
    if(window.pageYOffset>100){
        nav.style.background = "#132f45";
    }
    else{
        nav.style.background="transparent";
    }
}

// let modal = document.getElementById('id01');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }