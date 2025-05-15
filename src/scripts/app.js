const btnInstall = document.getElementById('install');
const error = document.getElementById('error');

btnInstall.addEventListener('click', function() {
    error.textContent = 'Esta función aun no esta disponible!'
    setTimeout(() =>{
        error.textContent = ' ';
    }, 3000)
})