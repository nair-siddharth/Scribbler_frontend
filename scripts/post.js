// Change page title to show author name
var titlePost = document.getElementById('titlePost');
titlePost.innerText = '@'+document.getElementById('authorName').innerText;


// Post manipulation
function allowEdit(){
    var hdr = document.getElementById('postHdr');
    hdr.setAttribute('contenteditable',"true");

    var body = document.getElementById('postBody');
    body.setAttribute('contenteditable',"true");

    var saveBtn = document.getElementById('saveBtn');
    saveBtn.style.display = 'block';

    var editBtn = document.getElementById('editBtn');
    editBtn.style.display = 'none';
}

function saveEdit(){
    var hdr = document.getElementById('postHdr');
    hdr.setAttribute('contenteditable',"false");

    var body = document.getElementById('postBody');
    body.setAttribute('contenteditable',"false");

    var saveBtn = document.getElementById('saveBtn');
    saveBtn.style.display = 'none';

    var editBtn = document.getElementById('editBtn');
    editBtn.style.display = 'block';
}


//Likes updating
var likeCount = 0;

function likeUpdate(){
    likeCount++;
    console.log(likeCount);
    var likeBtn = document.getElementById('likeBtn');
    var likeText = document.getElementById('likeText');

    if(likeCount==1){
        likeBtn.innerHTML+='d!';
        likeText.innerHTML = '1 person likes this!';
    }else{

        likeText.innerHTML = likeCount+' people like this!';
    }
}


// Comment manipulation
function saveComment(){
    var comment = document.getElementById('comment');
    if(comment.value==''){
        alert('Cannot submit empty comment');
        return;
    }

    if(comment.value.includes('<') && comment.value.includes('>') ){
        alert('Comment cannot contain markup tags');
        return;
    }

    var allComments = document.getElementById('allComments');
    
    var commentNode = document.createElement('p');
    commentNode.setAttribute('class','commentText');
    commentNode.innerHTML = comment.value;

    allComments.prepend(commentNode);

    comment.value = '';

    console.log(comment.value);
}

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
window.onclick = function(event) {
  if (event.target == signupModal || event.target == signinModal) {
    signupModal.style.display = "none";
    signinModal.style.display = "none";
  }
}

function goToSignUp(){
    signupModal.style.display = "flex";
    signinModal.style.display = "none";
}