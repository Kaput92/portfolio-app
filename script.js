const links = document.getElementsByClassName('link');
const bulb = document.getElementById('fa-lightbulb');

bulb.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        for (let link of links) {
        link.style.color = 'white'
    } 
}
    else {
        for (let link of links){
        link.style.color = ''}
    }
})