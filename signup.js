const clientBtn = document.querySelector(".SigninBtn");
const workerBtn = document.querySelector(".SignupBtn");
const moveBtn = document.querySelector(".moveBtn");
const client= document.querySelector(".client");
const worker= document.querySelector(".worker");

workerBtn.addEventListener("click",()=>{
    moveBtn.classList.add("rightBtn");
    worker.classList.add("workerForm");
    client.classList.remove("clientForm");
    moveBtn.innerHTML="Worker";
})

clientBtn.addEventListener("click",()=>{
    moveBtn.classList.remove("rightBtn");
    client.classList.add("clientForm");
    worker.classList.remove("workerForm");
    moveBtn.innerHTML="Client";
})

function toggleForm(formType) {
    var signinForm = document.getElementById('SIGNIN');
    var signupForm = document.getElementById('SIGNUP');

    if (formType === 'signin') {
        signinForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    } else if (formType === 'signup') {
        signinForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    }
}

