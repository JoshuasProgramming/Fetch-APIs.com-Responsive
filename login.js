
//Grab login password element
const login_password = document.getElementById('login_password');

//Grab login password checkbox and add an event listener for when the user clicks it
const login_password_checkbox = document.getElementById('login_password_checkbox').addEventListener("click", (e)=>{

    //Checking if the login password input is of type 'password' or 'text'
    if(login_password.type == "password"){
        login_password.type = "text";
    } else if(login_password.type == "text"){
        login_password.type ="password";
    }
});

//Hamburger Menu

//Grabbing the hamburger image
const hamburger_image = document.getElementById('hamburger_image');

//Grabbing the popup section 
const popup = document.getElementById('popup');

//Grabbing the unordered list within the popup menu
const ham_ul = document.getElementById('ham_ul');

const close_popup = document.getElementById('close_popup');

//Function that'll enable the popup menu
function enableMenu(){
    popup.classList = [];
    popup.classList.add("popup");
    // ham_ul.style.margin = "0px 100px";
    ham_ul.style.transform = "translate(0px,0px)";
    ham_ul.style.left = "0";
}

function disablemenu(){
    popup.classList = [];
    popup.classList.add("disabled");
    ham_ul.style.margin = "0px -600px";
}

//When the user presses the hamburger menu
hamburger_image.addEventListener("click",(e)=>{

    let x = popup.classList[0];
 
    if(x === "disabled"){
        enableMenu();
    }
});

close_popup.addEventListener("click", (e)=>{
    disablemenu();
});