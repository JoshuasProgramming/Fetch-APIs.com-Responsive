//Grab the password input area/element
const register_password = document.getElementById('register_password');
//Grab the confirm password input area/element
const register_confirm_password = document.getElementById('register_confirm_password');

//Grab the register password checkbox and add an event listener, 
//so that once the user clicks, it will reveal/unreveal the password
const register_password_checkbox = document.getElementById('register_password_checkbox').addEventListener("click",(e)=>{
    
    //Checking if the register password input is of type 'password' or 'text'
    if(register_password.type == "password"){
        register_password.type = "text";
    } else if(register_password.type == "text"){
        register_password.type = "password";
    }

    //Checking if the register confirm password input is of type 'password' or 'text'
    if(register_confirm_password.type == "password"){
        register_confirm_password.type = "text";
    } else if(register_confirm_password.type == "text"){
        register_confirm_password.type = "password";
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