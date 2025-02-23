const heroTitle = document.querySelectorAll('.heroTitle');
const heroSubTitle = document.getElementById('heroSubtitle');
const heroImg = document.getElementById('imageHolderHero');
const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        entry.target.classList.toggle('show', entry.isIntersecting);
    })
});
const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        entry.target.classList.toggle('visible', entry.isIntersecting);
    })
});
const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        entry.target.classList.toggle('append', entry.isIntersecting);
    })
});
heroTitle.forEach(title =>{
    observer1.observe(title)
})
observer2.observe(heroSubTitle)
observer3.observe(heroImg)

const email = document.getElementById('email');
const fullName = document.getElementById('fullName');
const subject = document.getElementById('subject');
const message = document.getElementById('MessageText');

const submitBtn = document.getElementById('submitBtn');

function clearInput(){
    email.value = '';
    fullName.value = '';
    subject.value = '';
    message.value = '';
}
function sendemail(){
    parms = {
        email: email.value,
        fullName: fullName.value,
        subject: subject.value,
        messageText: message.value
    }
    if (parms.email === '' || parms.fullName === '' || parms.subject === '' || parms.messageText === ''){
        console.log('Please fill in all fields')
        showErrorNotification();
    }else{
        console.log('Email sent')
        emailjs.send('service_kkh7r3e', 'template_kzcwdjc', parms)
        showNotification();
    }
}
function handleSubmit(event){
    event.preventDefault();
    sendemail();
    clearInput();
}

submitBtn.addEventListener('click', handleSubmit)

const emailSentNotification = document.getElementById('emailSentNotification');
function showNotification(){
    emailSentNotification.classList.add('show');
    setTimeout(() => {
        emailSentNotification.classList.add('hide');
        setTimeout(() => {
            emailSentNotification.classList.remove('show');
            emailSentNotification.classList.remove('hide');
        }, 900);
    }, 3000);
}
const errorNotification = document.getElementById('emailErrorNotification')
function showErrorNotification(){
    errorNotification.classList.add('show');
    setTimeout(() =>{
        errorNotification.classList.add('hide');
        setTimeout(() =>{
            errorNotification.classList.remove('show');
            errorNotification.classList.remove('hide');
        }, 900);
    }, 3000);
}

