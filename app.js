const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const pwShowHide = document.querySelectorAll(".showPW");
const pwFields = document.querySelectorAll(".password");

// javascript code for password show/hide
pwShowHide.forEach(eyeIcon =>{
  eyeIcon.addEventListener("click",() =>{
    pwFields.forEach(pwField => {
      if(pwField.type === "password"){
        pwField.type= "text";

        pwShowHide.forEach(icon => {
          icon.classList.replace("fa-eye-slash","fa-eye")
        })
      }else{
        pwField.type = "password";
        pwShowHide.forEach(icon => {
          icon.classList.replace("fa-eye","fa-eye-slash")
        })
      }
    })
  })
})


sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
