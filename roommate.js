
let btn=document.getElementById("login")

btn.addEventListener("click",()=>{
    if(btn.classList.contains("login")){
        btn.classList.replace("logout","login")
        btn.textContent="logged in successfully"
    }
    else{
        btn.classList.replace("login","logout")
        btn.textContent="Logout"
    }
})