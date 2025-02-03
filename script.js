const links = document.getElementsByClassName('link');
const bulb = document.getElementById('fa-lightbulb');
const table = document.querySelector('table');
const anchor = document.querySelectorAll('a');
const list = document.querySelector('.project-one');

    list.addEventListener('click', () => {
    table.classList.toggle('tableHide');
    });



bulb.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {

        table.style.borderColor = 'white';

        for (let a of anchor){
        a.style.color = 'white'
    };

        for (let link of links) {
        link.style.color = 'white'
        };
}
    else {

        table.style.borderColor = '';

        for (let a of anchor){
            a.style.color = ''
        };

        for (let link of links){
        link.style.color = ''
        };
    }
})