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

function clearInput(event){
    event.preventDefault();
    email.value = '';
    fullName.value = '';
    subject.value = '';
    message.value = '';
}