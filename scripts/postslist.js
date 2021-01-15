console.log('IN!!!!!!!!!!!!!!!!!');

// Modal 
var signupModal = document.getElementById("signupModal");
var signinModal = document.getElementById("signinModal");


// Get the button that opens the modal
var signupBtn = document.getElementById("signupBtn");
var signinBtn = document.getElementById("signinBtn");


// Get the <span> element that closes the modal
var span0 = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
signupBtn.onclick = function() {
    signupModal.style.display = "flex";

}
signinBtn.onclick = function() {
    signinModal.style.display = "flex";
  
}

// When the user clicks on <span> (x), close the modal
span0.onclick = function() {
    signupModal.style.display = "none";
}
span1.onclick = function() {
    signinModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it

/*This doesnt work, usint eventListener instead
window.onclick = function(event) {
    alert('window');
  if (event.target == signupModal || event.target == signinModal) {
    signupModal.style.display = "none";
    signinModal.style.display = "none";
  }
}*/

window.addEventListener("click", function(event) {
    if (event.target == signupModal || event.target == signinModal) {
        signupModal.style.display = "none";
        signinModal.style.display = "none";
    }    
});

function goToSignUp(){
    signupModal.style.display = "flex";
    signinModal.style.display = "none";
}

function deletePost(element){
    document.getElementById('postDelete').style.display = "flex";
    var id = element.parentNode.parentNode.parentNode.parentNode.id;
    var elementID = document.getElementById(id);
    
    document.getElementById('DeletePostBtn').onclick = function(){
        elementID.parentNode.removeChild(elementID);
        console.log('Inner delete -'+id);
        document.getElementById('postDelete').style.display = "none";    
    }

}

window.onclick = function(){
    if(event.target == document.getElementById('postDelete')){
        document.getElementById('postDelete').style.display = "none";
    }
}

document.getElementById('cancelPost').onclick = function(){
    document.getElementById('postDelete').style.display = "none";
}