let nav = document.getElementById('nav');

window.onscroll = function(){
    if(nav==null){
      return
    }
    else if(window.pageYOffset>50){
        nav.style.background = "#132f45";
    }
    else{
        nav.style.background="transparent";
    }
}

let modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Responsive nav-bar
function myFunction() {
  var x = document.getElementById("righto");
  if (x.className === "right-side") {
    x.className += " responsive";
  } else {
    x.className = "right-side";
  }
} 

// Review modal
function openForm() {
  document.getElementById("review").style.display = "block";
}

function closeForm() {
  document.getElementById("review").style.display = "none";
}

//Mentors darken
const mentorItems = document.querySelectorAll('.mentor')
    mentorItems.forEach(mentorItem =>{
      mentorItem.addEventListener('mouseover',()=>{
        mentorItem.classList.add('img-darken')
        })
    })
    mentorItems.forEach(mentorItem =>{
      mentorItem.addEventListener('mouseout',()=>{
        mentorItem.classList.remove('img-darken')
        })
    })