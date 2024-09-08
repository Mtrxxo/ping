let emailInput = document.getElementById("email");
let form = document.getElementById("form");
let submit = document.getElementById("submit");
let iconContainer = document.querySelectorAll(".icon-container");
let icon = document.querySelectorAll(".icon");
let errorMessage = document.querySelector(".errorMsg");

for (let i = 0; i < iconContainer.length; i++){
    iconContainer[i].addEventListener("mouseover", function(){
        iconContainer[i].style.backgroundColor = "hsl(223, 87%, 63%)"
        iconContainer[i].style.border = "none"
        icon[i].style.color = "white"
    })
    
    iconContainer[i].addEventListener("mouseout", function(){
        icon[i].style.color = "hsl(209, 33%, 12%)"
        iconContainer[i].style.backgroundColor = "white"
        iconContainer[i].style.border = "1px solid hsl(209, 33%, 12%)"
    })
}

form.addEventListener("submit", function(e){
    e.preventDefault();

    errorMessage.innerHTML = ''

    formValidation();
})

const formValidation = () => {
    let emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (emailValue === ''){
        errorMessage.innerHTML = "Email is required"
        emailInput.style.border = "1px solid hsl(354, 100%, 66%)"
    }else if(!emailRegex.test(emailValue)){
        errorMessage.innerHTML = "Please enter a valid email address"
        emailInput.style.border = "1px solid hsl(354, 100%, 66%)"
    }else{
        location.reload();
    }
}