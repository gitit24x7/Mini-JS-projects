const togglebutton = document.querySelector('.togglebutton')

togglebutton.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme');
//saving the theme in local storage 
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
})

// Added on page load to check and apply saved theme
document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-theme');
});
