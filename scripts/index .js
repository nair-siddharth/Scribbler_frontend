console.log('IN!!!!!!!!!!!!!!!!!');

// Modal 
var signupModal = document.getElementById("signupModal");
var signinModal = document.getElementById("signinModal");
var createPostModal = document.getElementById("createPostModal");


// Get the button that opens the modal
var signupBtn = document.getElementById("signupBtn");
var signinBtn = document.getElementById("signinBtn");
var createPostBtn = document.getElementById("createPostBtn");


// Get the <span> element that closes the modal
var span0 = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modal 
signupBtn.onclick = function() {
    signupModal.style.display = "flex";

}
signinBtn.onclick = function() {
    signinModal.style.display = "flex";
  
}
createPostBtn.onclick = function(){
    createPostModal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span0.onclick = function() {
    signupModal.style.display = "none";
}
span1.onclick = function() {
    signinModal.style.display = "none";
}

span2.onclick = function() {
    createPostModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signupModal || event.target == signinModal || event.target == createPostModal) {
    signupModal.style.display = "none";
    signinModal.style.display = "none";
    createPostModal.style.display = "none";
  }
}

function goToSignUp(){
    signupModal.style.display = "flex";
    signinModal.style.display = "none";
}